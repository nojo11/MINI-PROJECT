import type { RecentScan } from '@/types/history'
import { Badge } from '@/components/ui/badge'
import { Card, CardTitle } from '@/components/ui/card'
import { EmptyState } from '@/components/ui/empty-state'
import { formatDate, formatRiskLabel } from '@/utils/format'

interface RecentScansTableProps {
  scans: RecentScan[]
}

export function RecentScansTable({ scans }: RecentScansTableProps) {
  if (!scans.length) {
    return (
      <EmptyState
        title="No analyses yet."
        description="Paste an SMS above to begin."
      />
    )
  }

  return (
    <Card className="space-y-3 overflow-x-auto">
      <CardTitle>Recent Scans</CardTitle>
      <table className="w-full min-w-[680px] text-left text-sm">
        <thead className="text-xs uppercase text-muted-foreground">
          <tr>
            <th className="py-2">Date</th>
            <th className="py-2">Message Preview</th>
            <th className="py-2">Prediction</th>
            <th className="py-2">Confidence</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {scans.map((scan) => {
            const variant =
              scan.risk === 'safe'
                ? 'safe'
                : scan.risk === 'suspicious'
                  ? 'suspicious'
                  : 'danger'

            return (
              <tr key={scan.id} className="border-t border-border hover:bg-muted/50">
                <td className="py-3 text-xs text-muted-foreground">{formatDate(scan.timestamp)}</td>
                <td className="max-w-md py-3 text-foreground">{scan.message.slice(0, 72)}...</td>
                <td className="py-3">
                  <Badge variant={variant}>{formatRiskLabel(scan.risk)}</Badge>
                </td>
                <td className="py-3 font-mono">{scan.confidence}%</td>
                <td className="py-3 text-primary">View</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Card>
  )
}
