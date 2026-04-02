import { pl } from './pl'
import { en } from './en'
import { ua } from './ua'

export type Language = 'pl' | 'en' | 'ua'

export type Translations = typeof pl

export const translations: Record<Language, Translations> = { pl, en, ua }

export { pl, en, ua }
