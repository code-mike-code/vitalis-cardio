import { render, screen } from '@testing-library/react'
import Features from './Features'

describe('Features', () => {
  it('renders section title', () => {
    render(<Features />)
    expect(screen.getByText('Dlaczego Klinika Vitalis?')).toBeInTheDocument()
  })

  it('renders all feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Kompleksowa opieka')).toBeInTheDocument()
    expect(screen.getByText('Zespół specjalistów')).toBeInTheDocument()
    expect(screen.getByText('Nowoczesna rehabilitacja')).toBeInTheDocument()
  })
})
