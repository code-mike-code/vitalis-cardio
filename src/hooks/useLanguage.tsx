import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  ReactNode,
} from 'react'
import { Language, Translations, translations } from '@/i18n'

const STORAGE_KEY = 'vitalis-lang'

function getInitialLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null
  if (stored && stored in translations) return stored
  const browser = navigator.language.slice(0, 2).toLowerCase()
  if (browser === 'uk') return 'ua'
  if (browser === 'en') return 'en'
  return 'pl'
}

function createT(dict: Translations) {
  return function t(path: string): string {
    const keys = path.split('.')
    let node: unknown = dict
    for (const key of keys) {
      node = (node as Record<string, unknown>)?.[key]
    }
    return typeof node === 'string' ? node : path
  }
}

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: (path: string) => string
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'pl',
  setLanguage: () => {},
  t: (path) => path,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem(STORAGE_KEY, lang)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const t = useMemo(() => createT(translations[language]), [language])

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext)
}
