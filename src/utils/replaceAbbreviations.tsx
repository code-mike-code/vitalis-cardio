import React from 'react'

const ABBREVIATIONS: Record<string, string> = {
  NFZ: 'Narodowy Fundusz Zdrowia',
  LuxMed: 'LuxMed Medical Group',
  USG: 'Ultrasonografia',
  EKG: 'Elektrokardiogram',
  ECG: 'Electrocardiogram',
  EEG: 'Elektroencefalogram',
  EMG: 'Elektromiografia',
  UKG: 'Echokardiografia',
  KTG: 'Kardiotokografia',
  MRI: 'Rezonans Magnetyczny',
  CT: 'Tomografia Komputerowa',
}

const ABBR_PATTERN = new RegExp(`\\b(${Object.keys(ABBREVIATIONS).join('|')})\\b`, 'g')

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
