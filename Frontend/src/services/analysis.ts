import { addRecentScan } from '@/services/history'
import { withLatency } from '@/services/api'
import type {
  AnalysisResult,
  ExplanationItem,
  RecommendationItem,
  RiskLabel,
} from '@/types/analysis'

const scamPatterns = [
  { term: 'urgent', indicator: 'Urgency' },
  { term: 'immediately', indicator: 'Urgency' },
  { term: 'prize', indicator: 'Prize' },
  { term: 'winner', indicator: 'Prize' },
  { term: 'click', indicator: 'Suspicious Link' },
  { term: 'http', indicator: 'Suspicious Link' },
  { term: 'send', indicator: 'Money Request' },
  { term: 'transfer', indicator: 'Money Request' },
  { term: 'reversal', indicator: 'Fake Reversal' },
  { term: 'bank', indicator: 'Bank Impersonation' },
]

function deriveRisk(probability: number): RiskLabel {
  if (probability >= 75) return 'fraudulent'
  if (probability >= 40) return 'suspicious'
  return 'safe'
}

function buildExplanations(indicators: string[]): ExplanationItem[] {
  if (!indicators.length) {
    return [
      {
        id: 'exp-safe',
        title: 'Low-risk message structure',
        description:
          'No high-risk scam wording or suspicious transfer prompts were detected in this SMS.',
        confidence: 84,
      },
    ]
  }

  return indicators.map((indicator, index) => ({
    id: `exp-${indicator}-${index}`,
    title: `${indicator} signal detected`,
    description: `The message contains language patterns associated with ${indicator.toLowerCase()} attacks in Ghanaian MoMo scams.`,
    confidence: 70 + Math.min(index * 5, 25),
  }))
}

function buildRecommendations(risk: RiskLabel): RecommendationItem[] {
  if (risk === 'safe') {
    return [
      {
        id: 'safe-1',
        text: 'Proceed with caution',
        reason: 'Treat this message as low risk, but always verify sender details.',
      },
      {
        id: 'safe-2',
        text: 'Keep transaction receipts',
        reason: 'Store confirmation SMS for future dispute resolution.',
      },
    ]
  }

  const base: RecommendationItem[] = [
    {
      id: 'risk-1',
      text: 'Do not reply',
      reason: 'Scam operators use replies to confirm active phone numbers.',
    },
    {
      id: 'risk-2',
      text: 'Do not click links',
      reason: 'Links may lead to credential theft or malicious payment pages.',
    },
    {
      id: 'risk-3',
      text: 'Do not send money',
      reason: 'Immediate transfer requests are a core fraud tactic.',
    },
  ]

  if (risk === 'fraudulent') {
    base.push({
      id: 'risk-4',
      text: 'Report this sender',
      reason: 'Share the message with your provider to help block future attacks.',
    })
  }

  return base
}

export async function analyzeSms(message: string): Promise<AnalysisResult> {
  return withLatency(() => {
    const lower = message.toLowerCase()
    const indicators = Array.from(
      new Set(
        scamPatterns
          .filter((pattern) => lower.includes(pattern.term))
          .map((pattern) => pattern.indicator),
      ),
    )
    const fraudProbability = Math.min(98, 20 + indicators.length * 18)
    const confidence = Math.min(99, 68 + indicators.length * 6)
    const risk = deriveRisk(fraudProbability)
    const result: AnalysisResult = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      message,
      fraudProbability,
      confidence,
      risk,
      indicators,
      explanations: buildExplanations(indicators),
      recommendations: buildRecommendations(risk),
    }

    addRecentScan({
      id: result.id,
      timestamp: result.timestamp,
      message: result.message,
      risk: result.risk,
      confidence: result.confidence,
    })

    return result
  })
}
