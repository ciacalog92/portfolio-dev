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

## Deploy su Cloudflare Pages

### Opzione A — GitHub (consigliata)

1. Vai su [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Autorizza GitHub e seleziona il repo **ciacalog92/portfolio-dev**
3. Impostazioni build:

| Campo | Valore |
|-------|--------|
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variable | `NODE_VERSION` = `20` |

4. Clicca **Save and Deploy**. Ogni push su `main` aggiorna il sito.

URL pubblico: `https://portfolio-dev.pages.dev` (o il nome che scegli). Puoi aggiungere un dominio custom in **Custom domains**.

### Opzione B — CLI Wrangler

```bash
npm install
npx wrangler login
npm run pages:deploy
```

Il progetto Pages deve chiamarsi `portfolio-dev` (come in `wrangler.toml`).
