import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Analyze SMS</Button>)
    expect(screen.getByRole('button', { name: 'Analyze SMS' })).toBeInTheDocument()
  })
})
