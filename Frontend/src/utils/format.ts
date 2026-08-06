import type { RiskLabel } from '@/types/analysis'

export function formatRiskLabel(risk: RiskLabel): string {
  if (risk === 'fraudulent') return 'High Risk'
  if (risk === 'suspicious') return 'Suspicious'
  return 'Safe'
}

export function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleString()
}
