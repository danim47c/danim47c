export const languages = {
  en: 'English',
  es: 'Español',
} as const

export type Language = keyof typeof languages

export const defaultLang: Language = 'en'

export const translations = {
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'profile.name': 'Daniel Mateos',
    'profile.title': 'FullStack Developer',
    'section.contact': 'Contact',
    'section.stacks': 'Stacks',
    'meta.description': 'Daniel Mateos Carballares - FullStack Developer',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'profile.name': 'Daniel Mateos',
    'profile.title': 'Desarrollador FullStack',
    'section.contact': 'Contacto',
    'section.stacks': 'Tecnologías',
    'meta.description': 'Daniel Mateos Carballares - Desarrollador FullStack',
  },
} as const

export function t(lang: Language, key: keyof typeof translations['en']): string {
  return translations[lang][key] || translations[defaultLang][key]
}

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/')
  if (lang in languages) return lang as Language
  return defaultLang
}
