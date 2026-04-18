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
  it('renders the pricing section heading', () => {
    renderOffer()
    expect(screen.getByText('CENNIK')).toBeInTheDocument()
  })

  it('renders all four service area titles', () => {
    renderOffer()
    expect(screen.getByText('Poradnie Specjalistyczne')).toBeInTheDocument()
    expect(screen.getByText('Diagnostyka USG')).toBeInTheDocument()
    expect(screen.getByText('Rehabilitacja')).toBeInTheDocument()
    expect(screen.getByText('Medycyna Estetyczna')).toBeInTheDocument()
  })

  it('renders all pricing accordion categories', () => {
    renderOffer()
    expect(screen.getByText('Kardiologia')).toBeInTheDocument()
    expect(screen.getByText('Rehabilitacja i Fizjoterapia')).toBeInTheDocument()
    expect(screen.getByText('Medycyna Estetyczna')).toBeInTheDocument()
  })

  it('accordion item is collapsed by default', () => {
    renderOffer()
    expect(screen.queryByText('EKG spoczynkowe')).not.toBeInTheDocument()
  })

  it('opens accordion item on click', () => {
    renderOffer()
    const trigger = screen.getByRole('button', { name: /kardiologia/i })
    fireEvent.click(trigger)
    expect(screen.getByText('EKG spoczynkowe')).toBeInTheDocument()
  })

  it('closes accordion item on second click', () => {
    renderOffer()
    const trigger = screen.getByRole('button', { name: /kardiologia/i })
    fireEvent.click(trigger)
    fireEvent.click(trigger)
    expect(screen.queryByText('EKG spoczynkowe')).not.toBeInTheDocument()
  })

  it('multiple accordion items can be open simultaneously', () => {
    renderOffer()
    fireEvent.click(screen.getByRole('button', { name: /kardiologia/i }))
    fireEvent.click(screen.getByRole('button', { name: /neurologia/i }))
    expect(screen.getByText('EKG spoczynkowe')).toBeInTheDocument()
    expect(screen.getByText('EEG')).toBeInTheDocument()
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
