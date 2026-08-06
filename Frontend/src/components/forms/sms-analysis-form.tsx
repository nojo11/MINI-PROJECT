import { zodResolver } from '@hookform/resolvers/zod'
import { ClipboardPaste, Eraser, ScanSearch } from 'lucide-react'
import { useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'

const schema = z.object({
  message: z
    .string()
    .trim()
    .min(20, 'SMS too short. Please paste at least 20 characters.'),
})

type SmsFormValues = z.infer<typeof schema>

interface SmsAnalysisFormProps {
  loading?: boolean
  onSubmit: (message: string) => void
}

const examples = [
  'URGENT: Your wallet was reversed. Send GHS 20 now to secure account.',
  'Your MoMo transfer of GHS 250 to Kofi Mensah was successful.',
]

export function SmsAnalysisForm({ loading, onSubmit }: SmsAnalysisFormProps) {
  const form = useForm<SmsFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { message: '' },
  })

  const messageValue = useWatch({ control: form.control, name: 'message' }) || ''

  async function pasteFromClipboard() {
    const pasted = await navigator.clipboard.readText()
    form.setValue('message', pasted, { shouldValidate: true })
  }

  return (
    <Card className="space-y-4">
      <CardTitle>SMS Analysis</CardTitle>
      <form
        className="space-y-3"
        onSubmit={form.handleSubmit((values) => onSubmit(values.message))}
      >
        <label className="sr-only" htmlFor="sms-message">
          Paste your SMS message here
        </label>
        <Textarea
          id="sms-message"
          placeholder="Paste your SMS message here..."
          aria-invalid={Boolean(form.formState.errors.message)}
          {...form.register('message')}
        />
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{messageValue.length} characters</span>
          {form.formState.errors.message ? (
            <span className="text-danger">{form.formState.errors.message.message}</span>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2">
          <Button type="submit" loading={loading}>
            <ScanSearch className="size-4" />
            Analyze SMS
          </Button>
          <Button
            variant="outline"
            type="button"
            onClick={pasteFromClipboard}
            disabled={loading}
          >
            <ClipboardPaste className="size-4" />
            Paste
          </Button>
          <Button
            variant="secondary"
            type="button"
            onClick={() => form.reset()}
            disabled={loading}
          >
            <Eraser className="size-4" />
            Clear
          </Button>
        </div>
      </form>
      <div className="space-y-1">
        <p className="text-xs font-medium text-muted-foreground">Example messages</p>
        <ul className="space-y-1 text-xs">
          {examples.map((sample) => (
            <li key={sample}>
              <button
                type="button"
                className="rounded text-left text-primary underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => form.setValue('message', sample, { shouldValidate: true })}
              >
                {sample}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
