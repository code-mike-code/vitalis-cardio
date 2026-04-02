import { render, screen } from '@testing-library/react'
import Logo from './Logo'

describe('Logo', () => {
  it('renders logo with text by default', () => {
    render(<Logo />)
    expect(screen.getByText('Klinika Vitalis')).toBeInTheDocument()
  })

  it('hides text when showText is false', () => {
    render(<Logo showText={false} />)
    expect(screen.queryByText('Klinika Vitalis')).not.toBeInTheDocument()
  })
})
