# Instagram Token Auto-Refresh Setup

## Sistema Implementato

Il sito ora ha un sistema **completamente automatico** per refreshare il token Instagram ogni 50 giorni.

### Come Funziona

1. **Cloudflare Cron Trigger** esegue automaticamente ogni 50 giorni
2. Chiama l'endpoint `/api/instagram/refresh`
3. Ottiene un nuovo token da Instagram API
4. Salva il nuovo token in **Cloudflare KV** (storage persistente)
5. Il sito legge sempre il token aggiornato da KV

### Setup Iniziale (Una Volta Sola)

#### 1. Creare KV Namespace su Cloudflare

```bash
# Dalla tua macchina locale
npx wrangler kv:namespace create INSTAGRAM_KV
```

Questo comando restituirà un ID simile a:
```
✨ Success! Created KV namespace "INSTAGRAM_KV"
📋 ID: abc123def456ghi789
```

#### 2. Aggiornare wrangler.toml

Copia l'ID e sostituiscilo in `wrangler.toml`:

```toml
[[kv_namespaces]]
binding = "INSTAGRAM_KV"
id = "abc123def456ghi789"  # ← Sostituisci con il tuo ID
```

#### 3. Inizializzare il Token in KV

Salva il token iniziale in KV (solo la prima volta):

```bash
npx wrangler kv:key put --namespace-id=abc123def456ghi789 access_token "IL_TUO_TOKEN_INSTAGRAM"
npx wrangler kv:key put --namespace-id=abc123def456ghi789 last_refresh "$(date -u +%Y-%m-%dT%H:%M:%S.000Z)"
```

#### 4. Configurare Cron Secret (Opzionale ma Raccomandato)

Per sicurezza extra, aggiungi un secret per proteggere l'endpoint:

**Dashboard Cloudflare:**
- Settings → Environment Variables
- Aggiungi: `CRON_SECRET` = `una-stringa-random-molto-lunga`

**O da CLI:**
```bash
npx wrangler secret put CRON_SECRET
# Inserisci il secret quando richiesto
```

#### 5. Deploy

```bash
git add .
git commit -m "Add Instagram token auto-refresh"
git push
```

Cloudflare farà automaticamente il deploy con le nuove configurazioni.

---

## Verifica Funzionamento

### Test Manuale del Refresh

Puoi testare manualmente il refresh chiamando:

```bash
curl -H "Authorization: Bearer TUO_CRON_SECRET" \
  https://farmacia-resta.costdev2022.workers.dev/api/instagram/refresh
```

Risposta attesa:
```json
{
  "success": true,
  "message": "Token refreshed successfully",
  "expiresInDays": 60,
  "nextRefresh": "50 days"
}
```

### Monitorare i Cron Logs

**Dashboard Cloudflare:**
1. Vai su **Workers & Pages** → **farmacia-resta**
2. Tab **Logs** → filtra per "cron"
3. Vedrai l'esecuzione automatica ogni 50 giorni

---

## Vantaggi

✅ **Completamente automatico** - non devi più pensare al token  
✅ **Mai scaduto** - refresh ogni 50 giorni (10 giorni di margine)  
✅ **Persistente** - token salvato in KV, sopravvive ai redeploy  
✅ **Sicuro** - token mai esposto, tutto server-side  
✅ **Gratis** - Cloudflare KV gratuito fino a 100k reads/day

---

## Troubleshooting

### Il token non si aggiorna?

1. **Verifica che il KV namespace sia stato creato:**
   ```bash
   npx wrangler kv:namespace list
   ```

2. **Controlla i logs del cron:**
   Dashboard → Logs → cerca "Refreshing Instagram token"

3. **Test manuale:**
   Chiama `/api/instagram/refresh` con curl (vedi sopra)

### Errore "No Instagram token found"

Il token iniziale non è stato salvato in KV. Ripeti lo step 3 del setup.

### Errore "Failed to refresh token"

Il token attuale è scaduto o invalido. Genera un nuovo token long-lived da:
https://developers.facebook.com/apps/27702697046026375/instagram-basic-display/basic-display/

---

## Note Importanti

- **Prima configurazione**: Dopo il deploy, il primo refresh sarà tra 50 giorni
- **Token attuale**: Continua a funzionare da env var fino al primo refresh
- **Compatibilità**: Sistema funziona sia localmente (`.dev.vars`) che in produzione (KV)
- **Fallback**: Se KV non disponibile, usa token da env var
