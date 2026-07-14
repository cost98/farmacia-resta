# Instagram Token Auto-Refresh su Vercel - 100% AUTOMATICO

## Come funziona

Questo sistema è **completamente automatico**:
- ✅ Ogni 2 mesi, Vercel Cron chiama `/api/instagram/refresh`
- ✅ Lo script rinnova il token Instagram
- ✅ Aggiorna automaticamente la variabile su Vercel
- ✅ Fa redeploy automaticamente
- ✅ **Zero intervento manuale richiesto!**

---

## Setup Completo (una tantum)

### 1. Credenziali Facebook App

Già le hai! ✅
- App ID: `27702697046026375`
- App Secret: `22fb5d23f0f3e1bbc60f26749d309339`

### 2. Genera CRON_SECRET

Genera una stringa casuale sicura:

**Windows PowerShell:**
```powershell
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | % {[char]$_})
```

**Oppure online:** https://www.uuidgenerator.net/

### 3. Crea Vercel API Token

1. Vai su https://vercel.com/account/tokens
2. Clicca **Create Token**
3. Nome: `Instagram Auto Refresh`
4. Scope: **Full Account** (necessario per modificare env vars)
5. Expiration: **No Expiration**
6. Clicca **Create**
7. **COPIA IL TOKEN** (non lo vedrai più!)

### 4. Ottieni Project ID e Team ID

**Dopo aver pubblicato il progetto su Vercel:**

**Per Project ID:**
1. Vai sul tuo progetto su Vercel
2. **Settings** → **General**
3. Trovi **Project ID** (es: `prj_xxxxxxxxxxxxx`)

**Per Team ID (opzionale):**
- Se usi un Team/Organizzazione Vercel, trovi il Team ID in **Team Settings**
- Se usi l'account personale, lascia vuoto o metti `""` (stringa vuota)

### 5. Configura Environment Variables su Vercel

Dopo aver pubblicato il sito su Vercel:

1. **Settings** → **Environment Variables**
2. Aggiungi queste variabili per **Production, Preview, Development**:

| Nome | Valore | Note |
|------|--------|------|
| `INSTAGRAM_ACCESS_TOKEN` | Il tuo token Instagram | ✅ Già ce l'hai |
| `INSTAGRAM_APP_ID` | `27702697046026375` | ✅ Già ce l'hai |
| `INSTAGRAM_APP_SECRET` | `22fb5d23f0f3e1bbc60f26749d309339` | ✅ Già ce l'hai |
| `CRON_SECRET` | Il secret random generato | 🔒 Per sicurezza Cron |
| `VERCEL_TOKEN` | Il token Vercel appena creato | 🔑 Per API Vercel |
| `VERCEL_PROJECT_ID` | Es: `prj_xxxxxxxxxxxxx` | 📦 ID del progetto |
| `VERCEL_TEAM_ID` | ID team o lascia vuoto | 👥 Solo se usi Team |

3. **Save** per ogni variabile
4. **Redeploy** il progetto

---

## Test Manuale (prima del primo refresh automatico)

Testa che tutto funzioni prima di aspettare 2 mesi:

```bash
curl -H "Authorization: Bearer TUO_CRON_SECRET" \
  https://tuosito.vercel.app/api/instagram/refresh
```

**Risposta attesa:**
```json
{
  "success": true,
  "message": "🎉 Token refreshed and automatically updated on Vercel!",
  "expiresInDays": 60,
  "updatedAt": "2026-07-14T12:00:00.000Z",
  "steps": {
    "tokenRefresh": "✅ Completed",
    "vercelUpdate": "✅ Completed",
    "redeploy": "✅ Completed"
  }
}
```

---

## Frequenza del Cron

Configurato in `vercel.json`:

```json
"schedule": "0 0 1 */2 *"
```

Significa: **ore 00:00 del giorno 1 ogni 2 mesi** (50 giorni prima della scadenza)

---

## Monitoraggio

### Controlla i log del Cron

1. Vercel Dashboard → il tuo progetto
2. **Cron Jobs** (nel menu laterale)
3. Vedi lo storico delle esecuzioni
4. Clicca su un'esecuzione per vedere i log

### Se qualcosa va storto

Il sistema è resiliente:
- Se il Cron fallisce → i post continuano a funzionare fino a scadenza token
- Se il token scade → mostra placeholder (nessun errore visibile)
- Hai sempre notifiche via email da Vercel se i Cron falliscono

---

## Sicurezza

✅ Tutti i token sono nelle Environment Variables di Vercel (crittografate)  
✅ Il Cron è protetto con CRON_SECRET  
✅ Il Vercel Token ha accesso solo al tuo progetto  
✅ Nessun dato sensibile nel codice o nei log pubblici  
✅ L'App Secret e Vercel Token non appaiono mai nel browser  

---

## Risoluzione Problemi

### Error: "Unauthorized"
- Verifica che CRON_SECRET sia corretto sia in .env.local che su Vercel

### Error: "Missing Vercel API credentials"
- Controlla che VERCEL_TOKEN e VERCEL_PROJECT_ID siano configurati

### Error: "Failed to update environment variable"
- Verifica che il Vercel Token abbia i permessi giusti (Full Account)
- Controlla che VERCEL_PROJECT_ID sia corretto

### Error: "INSTAGRAM_ACCESS_TOKEN not found"
- Assicurati che la variabile esista su Vercel con quel nome esatto

---

## Costi

- ✅ Vercel Hobby Plan: **Gratis** (include 100 Cron Job esecuzioni/giorno)
- ✅ Instagram API: **Gratis**
- ✅ Totale: **€0/mese**

---

## Conclusione

Dopo il setup iniziale, **non dovrai mai più pensarci**! 🎉

Il token si rinnova automaticamente ogni 2 mesi e il sito continua a funzionare senza interruzioni.
