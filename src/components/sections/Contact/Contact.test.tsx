import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe('Contact', () => {
  it('renders section title', () => {
    render(<Contact />)
    expect(screen.getByText('Umów wizytę')).toBeInTheDocument()
  })

  it('renders contact form', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Imię i nazwisko')).toBeInTheDocument()
    expect(screen.getByLabelText('Wybierz poradnię')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Contact />)
    expect(screen.getByText(/Medyczna/)).toBeInTheDocument()
  })
})
