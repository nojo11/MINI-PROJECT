import { getRecentScans } from '@/services/history'
import type { AnalyticsSummary } from '@/types/analysis'

export async function getAnalyticsSummary(): Promise<AnalyticsSummary> {
  const scans = await getRecentScans()
  const messagesChecked = scans.length
  const fraudsPrevented = scans.filter((scan) => scan.risk === 'fraudulent').length
  const averageConfidence =
    messagesChecked === 0
      ? 0
      : Math.round(
          scans.reduce((acc, scan) => acc + scan.confidence, 0) / messagesChecked,
        )

  return {
    messagesChecked,
    fraudsPrevented,
    averageConfidence,
    todaysThreats: scans.filter((scan) => {
      const sameDay =
        new Date(scan.timestamp).toDateString() === new Date().toDateString()
      return sameDay && scan.risk !== 'safe'
    }).length,
    trend: [
      { day: 'Mon', scans: 8, frauds: 2 },
      { day: 'Tue', scans: 9, frauds: 3 },
      { day: 'Wed', scans: 12, frauds: 4 },
      { day: 'Thu', scans: 11, frauds: 3 },
      { day: 'Fri', scans: 14, frauds: 5 },
      { day: 'Sat', scans: 7, frauds: 2 },
      { day: 'Sun', scans: 10, frauds: 4 },
    ],
    categoryShare: [
      { name: 'Urgency', value: 34 },
      { name: 'Money Request', value: 27 },
      { name: 'Fake Reversal', value: 19 },
      { name: 'Link Based', value: 20 },
    ],
  }
}
