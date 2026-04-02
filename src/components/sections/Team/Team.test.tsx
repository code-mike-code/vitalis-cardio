import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LanguageProvider } from '@/hooks/useLanguage'
import Team from './Team'

function renderTeam() {
  return render(
    <MemoryRouter>
      <LanguageProvider>
        <Team />
      </LanguageProvider>
    </MemoryRouter>
  )
}

describe('Team', () => {
  it('renders section label', () => {
    renderTeam()
    expect(screen.getByText('Poznaj nasz zespół')).toBeInTheDocument()
  })

  it('renders all 5 team members', () => {
    renderTeam()
    expect(screen.getByText(/Żurakowski/)).toBeInTheDocument()
    expect(screen.getByText(/Jacek Nowak/)).toBeInTheDocument()
    expect(screen.getByText(/Malinowska/)).toBeInTheDocument()
    expect(screen.getByText(/Kowalczyk/)).toBeInTheDocument()
    expect(screen.getByText(/Zielińska/)).toBeInTheDocument()
  })

  it('renders ordinal numbers 01–05', () => {
    renderTeam()
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('05')).toBeInTheDocument()
  })

  it('renders specialization badges', () => {
    renderTeam()
    expect(screen.getAllByText('Kardiolog')).toHaveLength(2)
    expect(screen.getByText('Neurolog')).toBeInTheDocument()
    expect(screen.getByText('Ortopeda')).toBeInTheDocument()
    expect(screen.getByText('Fizjoterapeutka')).toBeInTheDocument()
  })

  it('renders CTA link to /specjalizacje', () => {
    renderTeam()
    expect(screen.getByRole('link', { name: /wszyscy specjaliści/i })).toBeInTheDocument()
  })
})
