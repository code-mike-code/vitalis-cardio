import { render, screen } from '@testing-library/react'
import Services from './Services'

describe('Services', () => {
  it('renders section title', () => {
    render(<Services />)
    expect(screen.getByText('Nasze specjalizacje')).toBeInTheDocument()
  })

  it('renders all services', () => {
    render(<Services />)
    expect(screen.getByText('Kardiologia')).toBeInTheDocument()
    expect(screen.getByText('Rehabilitacja')).toBeInTheDocument()
    expect(screen.getByText('Fizjoterapia')).toBeInTheDocument()
  })
})
