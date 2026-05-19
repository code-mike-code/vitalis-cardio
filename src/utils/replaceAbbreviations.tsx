import React from 'react'

const ABBREVIATIONS: Record<string, string> = {
  NFZ: 'Narodowy Fundusz Zdrowia',
  LuxMed: 'LuxMed Medical Group',
}

const ABBR_PATTERN = new RegExp(`(${Object.keys(ABBREVIATIONS).join('|')})`, 'g')

export function replaceAbbreviations(text: string): React.ReactNode {
  const parts = text.split(ABBR_PATTERN)
  return parts.map((part, i) =>
    ABBREVIATIONS[part] ? (
      <abbr key={i} title={ABBREVIATIONS[part]}>{part}</abbr>
    ) : (
      part
    )
  )
}
