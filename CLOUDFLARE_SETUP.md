# Setup Cloudflare Pages - Modifiche Necessarie

## ⚠️ Funzionalità Disabilitate Temporaneamente

### 1. Instagram Token Auto-Refresh
**File:** `/src/app/api/instagram/refresh/route.ts`
**Status:** ❌ Disabilitato

**Motivo:** Questa funzionalità usa:
- Vercel Cron Jobs (non supportati su Cloudflare Pages)
- Vercel API per aggiornare environment variables automaticamente
- Sistema di redeploy automatico Vercel

**Impatto:**
- Il token Instagram scade dopo 60 giorni
- **Dovrai rinnovarlo manualmente** ogni 2 mesi

**Come rinnovare manualmente:**
1. Vai su https://developers.facebook.com/apps/27702697046026375/instagram-basic-display/basic-display/
2. Clicca su "Generate Token" o "Refresh Token"
3. Copia il nuovo token
4. Aggiorna la variabile `INSTAGRAM_ACCESS_TOKEN` in Cloudflare Pages Dashboard
5. Redeploy il sito

**TODO per riattivare:**
- [ ] Creare Cloudflare Worker separato con Scheduled Event
- [ ] Implementare logica refresh usando Cloudflare API (non Vercel API)
- [ ] Configurare cron trigger nel Cloudflare Dashboard
- [ ] Testare il sistema completo

---

## ✅ Funzionalità Attive

Le seguenti funzionalità continuano a funzionare normalmente:

- ✅ API `/api/instagram` - Fetch posts da Instagram
- ✅ API `/api/contact` - Form contatti
- ✅ Tutte le pagine del sito
- ✅ Image optimization (gestita da Cloudflare)
- ✅ Static generation

---

## 📋 Checklist Deploy Cloudflare

### 1. Installazione Dipendenze
```bash
npm install --save-dev @cloudflare/next-on-pages wrangler
```

### 2. Configurazione Build Script
In `package.json`:
```json
{
  "scripts": {
    "pages:build": "npx @cloudflare/next-on-pages",
    "pages:deploy": "npm run pages:build && wrangler pages deploy"
  }
}
```

### 3. Environment Variables su Cloudflare
Nel dashboard Cloudflare Pages, configura:

**Necessarie:**
- `INSTAGRAM_ACCESS_TOKEN` - Token Instagram (rinnova ogni 60 giorni)
- `INSTAGRAM_APP_ID` - 27702697046026375
- `INSTAGRAM_APP_SECRET` - 22fb5d23f0f3e1bbc60f26749d309339

**NON necessarie su Cloudflare (erano per Vercel):**
- ~~`CRON_SECRET`~~ - Non serve più
- ~~`VERCEL_TOKEN`~~ - Non serve su Cloudflare
- ~~`VERCEL_PROJECT_ID`~~ - Non serve su Cloudflare
- ~~`VERCEL_TEAM_ID`~~ - Non serve su Cloudflare

### 4. Build & Deploy
```bash
# Build
npm run pages:build

# Deploy
wrangler pages deploy .vercel/output/static
```

---

## 💡 Alternative per Auto-Refresh

### Opzione A: Cloudflare Worker (Complesso)
Creare un Worker separato che:
1. Si attiva ogni 50 giorni (Scheduled Event)
2. Chiama Instagram API per refresh
3. Usa Cloudflare API per aggiornare env var
4. Triggera redeploy

**Costo:** 6-8 ore sviluppo

### Opzione B: Servizio Esterno (Semplice)
Usare un servizio come Zapier/Make/n8n per:
1. Timer ogni 50 giorni
2. Webhook per refresh token
3. Update Cloudflare env var via API

**Costo:** €0-10/mese + 2 ore setup

### Opzione C: Manuale (Più Semplice)
1. Imposta reminder calendario ogni 50 giorni
2. Refresh manuale in 5 minuti
3. Zero costi aggiuntivi

---

## 🔄 Per Tornare a Vercel

Se decidi di tornare a Vercel:
1. Decommenta il codice in `/src/app/api/instagram/refresh/route.ts`
2. Riattiva `vercel.json` con cron job
3. Deploy su Vercel
4. Configura tutte le env vars (incluse quelle Vercel)
5. Sistema auto-refresh tornerà a funzionare automaticamente

---

## 📊 Confronto Manutenzione

| Aspetto | Vercel Pro | Cloudflare Pages |
|---------|-----------|------------------|
| **Costo** | €240/anno | €0/anno |
| **Token Refresh** | ✅ Automatico | ❌ Manuale ogni 60 giorni |
| **Tempo manutenzione** | 0 min/anno | 10 min ogni 2 mesi = 60 min/anno |
| **Complessità** | Zero | Bassa (ma serve ricordare) |

---

**Data disabilitazione:** 2026-07-15
**Prossimo refresh token necessario:** ~2 mesi dal deploy
