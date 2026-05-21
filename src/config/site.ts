/** Prefisso internazionale senza + né spazi (Italia: 39 + numero) */
export const WHATSAPP_NUMBER = '393312997797'

export const SITE_EMAIL = 'hello@calogerociaccio.dev'

export const whatsappMessages = {
  it: 'Ciao Calogero, ho visitato il tuo portfolio e vorrei informazioni su un progetto.',
  en: 'Hi Calogero, I visited your portfolio and would like info about a project.',
} as const

export function whatsappUrl(locale: keyof typeof whatsappMessages): string {
  const text = encodeURIComponent(whatsappMessages[locale])
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
