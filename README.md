# Portfolio — Calogero Ciaccio

Portfolio professionale per sviluppatore web: gestionali aziendali e siti web su misura. Stack **Vite + React + TypeScript**, contenuti in **italiano** e **inglese** (toggle in header).

## Avvio locale

```bash
npm install
npm run dev
```

Apri [http://localhost:5173](http://localhost:5173).

## Build produzione

```bash
npm run build
npm run preview
```

## Chatbot e WhatsApp

- **Chatbot** (pulsante `</>` in basso a destra): domande frequenti con risposte automatiche, in IT/EN.
- **WhatsApp** (pulsante verde): apre una chat con messaggio precompilato.

Numero WhatsApp in `src/config/site.ts` (formato internazionale: `39` + numero).

## Personalizzazione

| File | Cosa modificare |
|------|-----------------|
| `src/i18n/translations.ts` | Testi IT/EN, progetti, statistiche |
| `src/components/Contact.tsx` | Email |
| `src/config/site.ts` | Email e numero WhatsApp |
| `index.html` | Titolo e meta description |
| `src/components/Header.tsx` | Nome nel logo |

## Deploy

Output in `dist/`. Compatibile con Vercel, Netlify, GitHub Pages (con `base` in `vite.config.ts` se serve sottopath).
