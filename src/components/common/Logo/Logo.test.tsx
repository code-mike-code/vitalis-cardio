import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Logo from './Logo'

const renderLogo = (props = {}) =>
  render(<MemoryRouter><Logo {...props} /></MemoryRouter>)

describe('Logo', () => {
  it('renders logo image', () => {
    renderLogo()
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
  })

  it('renders with different sizes', () => {
    const { rerender } = renderLogo({ size: 'sm' })
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()

    rerender(<MemoryRouter><Logo size="lg" /></MemoryRouter>)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})
