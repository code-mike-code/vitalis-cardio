import { render, screen } from '@testing-library/react'
import SectionHeader from './SectionHeader'

describe('SectionHeader', () => {
  it('renders title', () => {
    render(<SectionHeader title="Test Title" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders subtitle when provided', () => {
    render(<SectionHeader title="Title" subtitle="Subtitle text" />)
    expect(screen.getByText('Subtitle text')).toBeInTheDocument()
  })

  it('does not render subtitle when not provided', () => {
    render(<SectionHeader title="Title" />)
    expect(screen.queryByText('Subtitle text')).not.toBeInTheDocument()
  })
})
