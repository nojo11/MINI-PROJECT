import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

interface ChartsProps {
  trend: Array<{ day: string; scans: number; frauds: number }>
  categoryShare: Array<{ name: string; value: number }>
}

const pieColors = ['#2563EB', '#F59E0B', '#EF4444', '#10B981']

export default function Charts({ trend, categoryShare }: ChartsProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="h-64">
        <ResponsiveContainer>
          <BarChart data={trend}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="day" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip />
            <Bar dataKey="scans" fill="#2563EB" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="h-64">
        <ResponsiveContainer>
          <LineChart data={trend}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="day" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip />
            <Line dataKey="frauds" stroke="#EF4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="h-64 lg:col-span-2">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={categoryShare}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              innerRadius={64}
            >
              {categoryShare.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={pieColors[index % pieColors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
