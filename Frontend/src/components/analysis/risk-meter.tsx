import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import type { RiskLabel } from '@/types/analysis'

interface RiskMeterProps {
  value: number
  risk: RiskLabel
}

const riskColorMap: Record<RiskLabel, string> = {
  safe: '#10B981',
  suspicious: '#F59E0B',
  fraudulent: '#EF4444',
}

export function RiskMeter({ value, risk }: RiskMeterProps) {
  const chartData = [
    { name: 'risk', value },
    { name: 'remaining', value: 100 - value },
  ]

  return (
    <div className="h-44 w-full" aria-label={`Risk meter: ${value}%`}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            innerRadius={52}
            outerRadius={72}
            startAngle={90}
            endAngle={-270}
            stroke="none"
          >
            <Cell fill={riskColorMap[risk]} />
            <Cell fill="var(--color-muted)" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="-mt-24 text-center">
        <p className="font-mono text-3xl font-bold text-foreground">{value}%</p>
        <p className="text-xs text-muted-foreground">Fraud probability</p>
      </div>
    </div>
  )
}
