import { render, screen } from '@testing-library/react'
import Logo from './Logo'

describe('Logo', () => {
  it('renders logo image', () => {
    render(<Logo />)
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Logo size="sm" />)
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()

    rerender(<Logo size="lg" />)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})
