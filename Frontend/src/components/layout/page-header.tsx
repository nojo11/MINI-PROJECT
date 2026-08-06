interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h1>
      <p className="max-w-2xl text-sm text-muted-foreground md:text-base">{description}</p>
    </div>
  )
}
