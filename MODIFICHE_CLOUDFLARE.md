# ⚠️ IMPORTANTE: Modifiche per Cloudflare Pages

Questo file documenta le modifiche apportate per rendere il progetto compatibile con Cloudflare Pages.

## Modifiche Effettuate (2026-07-15)

### 1. ❌ Sistema Auto-Refresh Instagram Disabilitato
- **File modificato:** `src/app/api/instagram/refresh/route.ts`
- **Motivo:** Usa Vercel Cron e Vercel API (non compatibili con Cloudflare)
- **Impatto:** Token Instagram va rinnovato MANUALMENTE ogni 60 giorni
- **Codice originale:** Salvato nei commenti del file

### 2. 📦 File Vercel Backup
- **File rinominato:** `vercel.json` → `vercel.json.backup`
- **Motivo:** Cloudflare Pages non supporta Vercel cron
- **Come ripristinare:** Rinomina in `vercel.json` se torni su Vercel

### 3. 📊 Vercel Analytics Disabilitato
- **File modificato:** `src/app/layout.tsx`
- **Motivo:** @vercel/analytics funziona solo su Vercel
- **Impatto:** Nessun tracking analytics (puoi usare Cloudflare Web Analytics)
- **Codice:** Commentato, facilmente ripristinabile

## 🚨 AZIONI RICHIESTE OGNI 60 GIORNI

**IMPORTANTE:** Senza il sistema automatico, devi rinnovare manualmente il token Instagram ogni 2 mesi:

1. Vai su: https://developers.facebook.com/apps/27702697046026375/instagram-basic-display/
2. Clicca su "Generate Token" o "Refresh Token"
3. Copia il nuovo token
4. Aggiorna `INSTAGRAM_ACCESS_TOKEN` in Cloudflare Pages Dashboard:
   - Settings → Environment Variables
   - Modifica `INSTAGRAM_ACCESS_TOKEN`
   - Paste nuovo token
   - Save
5. Redeploy il sito (o aspetta prossima modifica)

**💡 TIP:** Imposta un reminder sul calendario per non dimenticare!

## Environment Variables per Cloudflare

### ✅ Necessarie:
```
INSTAGRAM_ACCESS_TOKEN=<il-tuo-token>
INSTAGRAM_APP_ID=27702697046026375
INSTAGRAM_APP_SECRET=22fb5d23f0f3e1bbc60f26749d309339
```

### ❌ NON necessarie (erano per Vercel):
```
CRON_SECRET (non serve)
VERCEL_TOKEN (non serve)
VERCEL_PROJECT_ID (non serve)
VERCEL_TEAM_ID (non serve)
```

## 🔄 Per Tornare a Vercel

Se vuoi ripristinare il sistema automatico su Vercel:

1. Rinomina `vercel.json.backup` → `vercel.json`
2. Decommenta il codice in `src/app/api/instagram/refresh/route.ts`
3. Configura tutte le env vars (incluse quelle Vercel)
4. Deploy su Vercel
5. Sistema auto-refresh riattivato! ✅

## 📚 Documentazione Completa

Vedi `CLOUDFLARE_SETUP.md` per documentazione dettagliata su:
- Setup Cloudflare Pages
- Alternative per auto-refresh
- Confronto costi Vercel vs Cloudflare
- Troubleshooting

---

**Autore:** Modifiche per compatibilità Cloudflare Pages  
**Data:** 2026-07-15
