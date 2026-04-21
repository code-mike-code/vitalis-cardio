import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const HEADER_H = 67

export function scrollToHash(id: string) {
  const el = document.getElementById(id)
  if (!el) return false

  const main = document.querySelector('main')

  // Walk up to find the direct child of <main> (the sticky section ancestor)
  let sectionEl: HTMLElement = el
  while (sectionEl.parentElement && sectionEl.parentElement !== main) {
    sectionEl = sectionEl.parentElement
  }

  if (!main || sectionEl.parentElement !== main) {
    window.scrollTo({ top: Math.max(0, el.offsetTop - HEADER_H), behavior: 'smooth' })
    return true
  }

  // Section's natural doc top via preceding sibling offsetHeight sum.
  // offsetHeight is reliable for sticky elements; offsetTop is not.
  let sectionTop = 0
  for (const child of Array.from(main.children)) {
    if (child === sectionEl) break
    sectionTop += (child as HTMLElement).offsetHeight
  }

  if (sectionEl === el) {
    window.scrollTo({ top: Math.max(0, sectionTop - HEADER_H), behavior: 'smooth' })
    return true
  }

  // Target is nested inside the section.
  // Use getBoundingClientRect difference for the relative offset — reliable because
  // el and sectionEl move together (sticky or not), so the difference is always the
  // natural layout offset of el from the section top.
  const relTop = el.getBoundingClientRect().top - sectionEl.getBoundingClientRect().top

  window.scrollTo({ top: Math.max(0, sectionTop + relTop - HEADER_H), behavior: 'smooth' })
  return true
}

function ScrollToHash() {
  const { hash, pathname, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = hash.slice(1)

    const tryScroll = (attempts: number) => {
      if (!scrollToHash(id) && attempts < 20) {
        setTimeout(() => tryScroll(attempts + 1), 50)
      }
    }

    tryScroll(0)
  }, [hash, pathname, key])

  return null
}

export default ScrollToHash
