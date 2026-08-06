import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import { useMemo } from 'react'
import { Card, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { useMotionPreference } from '@/hooks/use-reduced-motion'

const messages = [
  'Analyzing sender...',
  'Checking known scam patterns...',
  'Evaluating language...',
  'Running AI model...',
  'Generating explanation...',
]

interface LoadingExperienceProps {
  progress: number
}

export function LoadingExperience({ progress }: LoadingExperienceProps) {
  const reducedMotion = useMotionPreference()
  const activeMessage = useMemo(
    () => messages[Math.min(messages.length - 1, Math.floor(progress / 20))],
    [progress],
  )

  return (
    <Card className="space-y-4">
      <CardTitle>Analyzing Message</CardTitle>
      <div className="flex items-center gap-3">
        <motion.div
          animate={reducedMotion ? undefined : { scale: [1, 1.06, 1] }}
          transition={{ duration: 0.2, repeat: Infinity }}
        >
          <Shield className="size-8 text-primary" aria-hidden="true" />
        </motion.div>
        <p className="text-sm text-muted-foreground">{activeMessage}</p>
      </div>
      <Progress value={progress} />
    </Card>
  )
}
