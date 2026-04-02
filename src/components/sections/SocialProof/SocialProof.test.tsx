import { render, screen, fireEvent, act } from '@testing-library/react'
import { LanguageProvider } from '@/hooks/useLanguage'
import SocialProof from './SocialProof'

function renderSocialProof() {
  return render(
    <LanguageProvider>
      <SocialProof />
    </LanguageProvider>
  )
}

describe('SocialProof', () => {
  it('renders section label', () => {
    renderSocialProof()
    expect(screen.getByText('Opinie pacjentów')).toBeInTheDocument()
  })

  it('renders navigation arrows', () => {
    renderSocialProof()
    expect(screen.getByRole('button', { name: /poprzednia opinia/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /następna opinia/i })).toBeInTheDocument()
  })

  it('renders dot indicators for each review', () => {
    renderSocialProof()
    const dots = screen.getAllByRole('tab')
    expect(dots).toHaveLength(8)
  })

  it('first dot is active on init', () => {
    renderSocialProof()
    const dots = screen.getAllByRole('tab')
    expect(dots[0]).toHaveAttribute('aria-selected', 'true')
    expect(dots[1]).toHaveAttribute('aria-selected', 'false')
  })

  it('next arrow advances to second review', () => {
    renderSocialProof()
    const nextBtn = screen.getByRole('button', { name: /następna opinia/i })
    act(() => { fireEvent.click(nextBtn) })
    const dots = screen.getAllByRole('tab')
    expect(dots[1]).toHaveAttribute('aria-selected', 'true')
  })

  it('prev arrow wraps to last review from first', () => {
    renderSocialProof()
    const prevBtn = screen.getByRole('button', { name: /poprzednia opinia/i })
    act(() => { fireEvent.click(prevBtn) })
    const dots = screen.getAllByRole('tab')
    // After click prev from index 1 → index 0 (clone of last) → teleport to 8
    // realIndex = 7 (last)
    expect(dots[7]).toHaveAttribute('aria-selected', 'true')
  })

  it('clicking a dot navigates to that review', () => {
    renderSocialProof()
    const dots = screen.getAllByRole('tab')
    act(() => { fireEvent.click(dots[4]) })
    expect(dots[4]).toHaveAttribute('aria-selected', 'true')
  })

  it('renders star ratings', () => {
    renderSocialProof()
    // At least one star rating label visible
    const starLabels = screen.getAllByLabelText(/gwiazdek na 5/i)
    expect(starLabels.length).toBeGreaterThan(0)
  })
})
