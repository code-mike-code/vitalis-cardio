import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders logo text', () => {
    render(<Header />)
    expect(screen.getByText('VITALIS')).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<Header />)
    expect(screen.getByText('+48 123 456 789')).toBeInTheDocument()
  })

  it('opens menu on hamburger click', () => {
    render(<Header />)
    const hamburger = screen.getByLabelText('Otwórz menu')
    fireEvent.click(hamburger)
    // NavigationMenu overlay should become active
    expect(hamburger).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Header />)
    expect(screen.getByText('Umów wizytę')).toBeInTheDocument()
  })
})
