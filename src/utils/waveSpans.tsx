import type { ReactNode } from 'react'

export function waveSpans(
  text: string,
  baseDelay: number,
  charCls: string,
  wrapCls: string,
  charDelay = 0.04,
): ReactNode[] {
  return text.split('').map((char, i) => (
    <span key={i} className={wrapCls}>
      <span
        className={charCls}
        style={{ animationDelay: `${(baseDelay + i * charDelay).toFixed(2)}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    </span>
  ))
}
