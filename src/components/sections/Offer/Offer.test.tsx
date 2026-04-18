import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LanguageProvider } from '@/hooks/useLanguage'
import Offer from './Offer'

function renderOffer() {
  // Set Polish as default language for tests
  localStorage.setItem('vitalis-lang', 'pl')

  return render(
    <MemoryRouter>
      <LanguageProvider>
        <Offer />
      </LanguageProvider>
    </MemoryRouter>
  )
}

describe('Offer', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders the pricing section heading', () => {
    renderOffer()
    expect(screen.getByText('CENNIK')).toBeInTheDocument()
  })

  it('renders all four service area titles', () => {
    renderOffer()
    expect(screen.getAllByText('Poradnie Specjalistyczne').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Diagnostyka USG').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Rehabilitacja').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Medycyna Estetyczna').length).toBeGreaterThanOrEqual(1)
  })

  it('renders all pricing accordion categories', () => {
    renderOffer()
    expect(screen.getByRole('button', { name: 'Kardiologia' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Pojedyncza wizyta' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Korekcja zmarszczek' })).toBeInTheDocument()
  })

  it('accordion item is collapsed by default', () => {
    renderOffer()
    expect(screen.queryByText('EKG spoczynkowe')).not.toBeInTheDocument()
  })

  it('opens accordion item on click', () => {
    renderOffer()
    const trigger = screen.getByRole('button', { name: 'Kardiologia' })
    fireEvent.click(trigger)
    expect(screen.getByText('Holter RR 1 doba')).toBeInTheDocument()
  })

  it('closes accordion item on second click', () => {
    renderOffer()
    const trigger = screen.getByRole('button', { name: 'Kardiologia' })
    fireEvent.click(trigger)
    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('multiple accordion items can be open simultaneously', () => {
    renderOffer()
    fireEvent.click(screen.getByRole('button', { name: 'Kardiologia' }))
    fireEvent.click(screen.getByRole('button', { name: 'Poradnia neurologiczna' }))
    expect(screen.getByText('Holter RR 1 doba')).toBeInTheDocument()
    expect(screen.getByText('Konsultacja neurologiczna')).toBeInTheDocument()
  })

  it('renders a booking link on a price item when section has a slug', () => {
    renderOffer()
    fireEvent.click(screen.getByRole('button', { name: /kardiologia/i }))
    const links = screen.getAllByRole('link')
    const bookingLinks = links.filter(l =>
      l.getAttribute('href')?.includes('/umow-wizyte')
    )
    expect(bookingLinks.length).toBeGreaterThan(0)
    expect(bookingLinks[0].getAttribute('href')).toBe(
      '/specjalizacje/kardiologia/umow-wizyte'
    )
  })

  it('does not render a booking link for sections without a slug', () => {
    renderOffer()
    fireEvent.click(screen.getByRole('button', { name: /pozostałe badania/i }))
    const spirometria = screen.getByText('Wykonanie badania spirometrii')
    expect(spirometria.closest('a')).toBeNull()
  })
})
