import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('renders headline', () => {
    render(<Hero />)
    expect(screen.getByText(/medyczna/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Umów wizytę')).toBeInTheDocument()
    expect(screen.getByText('Nasze specjalizacje')).toBeInTheDocument()
  })

  it('renders stats', () => {
    render(<Hero />)
    expect(screen.getByText('15+')).toBeInTheDocument()
  })
})
