import type { Language } from '@/i18n'

/** Returns language key for translation lookup; null for 'pl' (falls back to base fields). */
export function getTranslationKey(language: Language): 'en' | 'ua' | null {
  if (language === 'en' || language === 'ua') return language
  return null
}
