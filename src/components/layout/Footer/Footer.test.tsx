import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getAllByText(/Klinika Vitalis/i).length).toBeGreaterThan(0)
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText(/Medyczna/)).toBeInTheDocument()
  })

  it('renders current year in copyright', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
