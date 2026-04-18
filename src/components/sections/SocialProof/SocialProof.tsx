import {
  useRef,
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { reviews } from '@/data/review-data'
import styles from './SocialProof.module.scss'
import CtaButton from '@components/common/CtaButton/CtaButton'
import { waveSpans } from '@/utils/waveSpans'

// ── Helpers ───────────────────────────────────────────────────────

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={styles.starSvg}>
      <path
        d="M10 1.5l2.47 5.01 5.53.81-4 3.9.94 5.49L10 14.27l-4.94 2.44.94-5.49-4-3.9 5.53-.81L10 1.5z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const LOCALE_MAP: Record<string, string> = { pl: 'pl-PL', en: 'en-GB', ua: 'uk-UA' }

function formatDate(iso: string, lang: string): string {
  const [year, month] = iso.split('-')
  const locale = LOCALE_MAP[lang] ?? 'pl-PL'
  return new Date(Number(year), parseInt(month, 10) - 1, 1)
    .toLocaleDateString(locale, { month: 'short', year: 'numeric' })
}

// ── Carousel constants ────────────────────────────────────────────
// Infinity loop: [last_clone, ...reviews, first_clone]
// index 0       → clone of last  → teleport to TOTAL
// index TOTAL+1 → clone of first → teleport to 1

const TOTAL = reviews.length
const SLIDES = [reviews[TOTAL - 1], ...reviews, reviews[0]]
const TRANSITION_MS = 500
const DRAG_THRESHOLD_RATIO = 0.18 // 18% of slide width triggers navigation
const GOOGLE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${import.meta.env.VITE_GOOGLE_PLACE_ID ?? 'PLACE_ID_DO_UZUPELNIENIA'}`

function getRealIndex(index: number): number {
  if (index === 0) return TOTAL - 1
  if (index === TOTAL + 1) return 0
  return index - 1
}

// ── Component ─────────────────────────────────────────────────────

export default function SocialProof() {
  const { t, language } = useLanguage()
  const isMobile = useMediaQuery('(max-width: 768px)')

  // ── Wideo / viewport / heading refs ──────────────────────────
  const sectionRef  = useRef<HTMLElement>(null)
  const videoRef    = useRef<HTMLVideoElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal<HTMLDivElement>(0.3)

  // ── Karuzela: index ────────────────────────────────────────────
  const [index,    setIndex]    = useState(1)    // 1 = pierwszy prawdziwy slajd
  const [animated, setAnimated] = useState(true)

  // paused = true at start — auto-advance activates only when section enters viewport
  const [paused,   setPaused]   = useState(true)

  // Real index for dots (0-based, no clones)
  const realIndex = getRealIndex(index)

  // ── Szerokość slajdu — viewport.offsetWidth ───────────────────
  const [slideW, setSlideW] = useState(0)

  useLayoutEffect(() => {
    function measure() {
      if (viewportRef.current) setSlideW(viewportRef.current.offsetWidth)
    }
    measure()
    let timer: ReturnType<typeof setTimeout>
    function onResize() {
      clearTimeout(timer)
      timer = setTimeout(measure, 100)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      clearTimeout(timer)
    }
  }, [])

  // ── Drag / swipe (Pointer Events — mysz + dotyk) ──────────────
  const dragStartX   = useRef(0)
  const dragActive   = useRef(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  // ── Nawigacja ─────────────────────────────────────────────────
  const goNext = useCallback(() => {
    setAnimated(true)
    setIndex(i => i + 1)
  }, [])

  const goPrev = useCallback(() => {
    setAnimated(true)
    setIndex(i => i - 1)
  }, [])

  const goTo = useCallback((dot: number) => {
    setAnimated(true)
    setIndex(dot + 1)
  }, [])

  // ── TransitionEnd: teleport przy klonie ───────────────────────
  const handleTransitionEnd = useCallback(() => {
    if (index === 0) {
      setAnimated(false)
      setIndex(TOTAL)
    } else if (index === TOTAL + 1) {
      setAnimated(false)
      setIndex(1)
    }
  }, [index])

  // Restore animation after teleport (double-rAF)
  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimated(true))
      )
      return () => cancelAnimationFrame(id)
    }
  }, [animated])

  // ── Auto-advance ──────────────────────────────────────────────
  useEffect(() => {
    if (paused) return
    const id = setInterval(goNext, 6000)
    return () => clearInterval(id)
  }, [paused, goNext])

  // ── Lazy-load wideo + pauza/wznawianie auto-advance ──────────
  useEffect(() => {
    const section = sectionRef.current
    const video   = videoRef.current
    if (!section) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPaused(false)
          if (video && !videoLoaded) {
            video.load()
            video.play().catch(() => {/* autoplay blocked — poster is visible */})
            setVideoLoaded(true)
          } else if (video && videoLoaded) {
            video.play().catch(() => {})
          }
        } else {
          setPaused(true)
          if (video) video.pause()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(section)
    return () => obs.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoLoaded])

  // ── Keyboard ──────────────────────────────────────────────────
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft')  goPrev()
    if (e.key === 'ArrowRight') goNext()
  }, [goNext, goPrev])

  // ── Pointer Events (drag + swipe) ─────────────────────────────
  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    // Ignore right mouse button
    if (e.pointerType === 'mouse' && e.button !== 0) return
    dragActive.current = true
    dragStartX.current = e.clientX
    setIsDragging(true)
    setPaused(true)
    // Capture pointer to track movement outside the element
    ;(e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragActive.current) return
    setDragOffset(e.clientX - dragStartX.current)
  }, [])

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragActive.current) return
    dragActive.current = false
    setIsDragging(false)
    const delta = e.clientX - dragStartX.current
    const threshold = slideW * DRAG_THRESHOLD_RATIO
    setDragOffset(0)
    if (delta < -threshold)  goNext()
    else if (delta > threshold) goPrev()
    // Resume on release (section still in viewport)
    setPaused(false)
  }, [slideW, goNext, goPrev])

  const onPointerCancel = useCallback(() => {
    dragActive.current = false
    setIsDragging(false)
    setDragOffset(0)
    setPaused(false)
  }, [])

  // ── Oblicz transformację ──────────────────────────────────────
  const translateX = slideW > 0 ? -(index * slideW) + dragOffset : undefined

  return (
    <section
      className={styles.section}
      id="reviews"
      ref={sectionRef}
      aria-label={t('socialProof.label')}
    >
      {/* ── Video background ─────────────────────────────────────── */}
      <video
        ref={videoRef}
        className={styles.videoBg}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
      >
        {/*
          Video files to provide:
            /public/video/socialproof-mobile.mp4   — ≤768px, max 720p
            /public/video/socialproof-desktop.mp4  — >768px, max 1080p
        */}
        {isMobile
          ? <source src="/video/socialproof-mobile.mp4"  type="video/mp4" />
          : <source src="/video/socialproof-desktop.mp4" type="video/mp4" />
        }
      </video>
      <div className={styles.overlay} aria-hidden="true" />

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className={styles.inner}>

        {/* Heading with wave animation */}
        <div className={styles.headerWrap} ref={headingRef}>
          <span className={styles.label}>{t('socialProof.label')}</span>
          <h2 className={styles.heading} aria-label={`${t('socialProof.headingLine1')} ${t('socialProof.headingLine2')}`}>
            <span className={styles.headingLine}>
              {headingVisible && waveSpans(t('socialProof.headingLine1'), 0, styles.waveChar, styles.waveWrap)}
            </span>
            <span className={styles.headingLine}>
              {headingVisible && waveSpans(t('socialProof.headingLine2'), 0.08, styles.waveChar, styles.waveWrap)}
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          className={styles.carouselWrap}
          onKeyDown={handleKeyDown}
          role="region"
          aria-roledescription="karuzela"
          aria-label={t('socialProof.label')}
          tabIndex={0}
        >
          {/* Left arrow */}
          <button
            className={`${styles.arrow} ${styles.arrowPrev}`}
            onClick={goPrev}
            aria-label={t('socialProof.prev')}
          >
            <span className={styles.arrowIcon} aria-hidden="true">→</span>
          </button>

          {/* Viewport — overflow hidden, measures slideW */}
          <div
            ref={viewportRef}
            className={`${styles.viewport} ${isDragging ? styles.viewportDragging : ''}`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
            // Hover: pause auto-advance but do NOT block drag
            onMouseEnter={() => { if (!dragActive.current) setPaused(true)  }}
            onMouseLeave={() => { if (!dragActive.current) setPaused(false) }}
          >
            <div
              className={styles.track}
              style={{
                transform:  translateX !== undefined ? `translateX(${translateX}px)` : undefined,
                transition: (animated && !isDragging)
                  ? `transform ${TRANSITION_MS}ms cubic-bezier(0.25, 1, 0.5, 1)`
                  : 'none',
                width: slideW > 0 ? `${SLIDES.length * slideW}px` : undefined,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {SLIDES.map((review, i) => {
                const isActive = i === index
                return (
                  <div
                    key={`${review.id}-${i}`}
                    className={`${styles.slide} ${isActive ? styles.slideActive : styles.slideInactive}`}
                    style={{ width: slideW > 0 ? `${slideW}px` : undefined }}
                    aria-hidden={!isActive}
                  >
                    <div className={styles.card}>
                      <span className={styles.quoteIcon} aria-hidden="true">"</span>

                      <blockquote className={styles.text}>
                        {review.text}
                      </blockquote>

                      <div className={styles.cardFooter}>
                        <div className={styles.avatar} aria-hidden="true">
                          {review.photo
                            ? <img src={review.photo} alt={review.author} className={styles.avatarImg} />
                            : <span className={styles.avatarInitials}>{review.initials}</span>
                          }
                        </div>

                        <div className={styles.authorInfo}>
                          <span className={styles.authorName}>{review.author}</span>
                          <span className={styles.authorDate}>{formatDate(review.date, language)}</span>
                        </div>

                        <div
                          className={styles.stars}
                          aria-label={`${review.rating} ${t('socialProof.stars')}`}
                        >
                          {Array.from({ length: 5 }, (_, si) => (
                            <StarIcon key={si} filled={si < review.rating} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right arrow */}
          <button
            className={`${styles.arrow} ${styles.arrowNext}`}
            onClick={goNext}
            aria-label={t('socialProof.next')}
          >
            <span className={styles.arrowIcon} aria-hidden="true">→</span>
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots} role="tablist" aria-label={t('socialProof.label')}>
          {reviews.map((_, di) => (
            <button
              key={di}
              role="tab"
              aria-selected={di === realIndex}
              aria-label={`${t('socialProof.goTo')} ${di + 1}`}
              className={`${styles.dot} ${di === realIndex ? styles.dotActive : ''}`}
              onClick={() => goTo(di)}
            />
          ))}
        </div>

        {/* Google review CTA */}
        <CtaButton href={GOOGLE_REVIEW_URL} variant="outline" size="md" className={styles.reviewBtn}>
          {t('socialProof.addReview')}
        </CtaButton>

      </div>
    </section>
  )
}
