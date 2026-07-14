# Istruzioni per collegare Instagram al sito web

## Cosa serve

Per mostrare gli ultimi post di Instagram sulla homepage del sito, è necessario:
- Account Instagram della farmacia (@farmacia.resta)
- Convertirlo in account **Instagram Business** (se non lo è già)
- Creare o collegare una pagina Facebook
- Generare un token di accesso

---

## Procedura completa (20-30 minuti)

### PASSO 1: Converti l'account in Business (se necessario)

1. Apri l'app Instagram sul telefono
2. Vai al profilo della farmacia
3. Tocca le tre linee in alto a destra → **Impostazioni**
4. Vai su **Account** → **Passa a un account professionale**
5. Scegli **Azienda** come categoria
6. Scegli la categoria più appropriata (es. "Servizi medici")

---

### PASSO 2: Collega l'account a Facebook

1. Nell'app Instagram, vai su **Impostazioni**
2. Tocca **Account** → **Account collegati**
3. Seleziona **Facebook**
4. Accedi con l'account Facebook che gestisce la pagina della farmacia
5. Se non hai una pagina Facebook per la farmacia, creane una nuova

---

### PASSO 3: Crea un'app Facebook Developer

1. Vai su https://developers.facebook.com/
2. Accedi con lo stesso account Facebook collegato a Instagram
3. Clicca su **Le mie app** (in alto a destra)
4. Clicca su **Crea app**
5. Scegli tipo: **Business** o **Altro**
6. Compila i dati:
   - **Nome app**: "Farmacia Resta Website" (o simile)
   - **Email di contatto**: la tua email
7. Clicca su **Crea app**

---

### PASSO 4: Aggiungi Instagram Graph API

1. Nella dashboard dell'app, cerca **Instagram Graph API**
2. Clicca su **Configura** accanto a Instagram Graph API
3. Segui la procedura guidata per collegare la pagina Facebook e l'account Instagram

---

### PASSO 5: Genera il token di accesso

1. Nella dashboard dell'app, vai su **Strumenti** nel menu laterale
2. Clicca su **Esplora API Graph** (Graph API Explorer)
3. In alto a destra, seleziona:
   - La tua app (Farmacia Resta Website)
   - L'account Instagram della farmacia
4. Nel campo **Autorizzazioni**, aggiungi:
   - `instagram_basic`
   - `pages_show_list`
   - `pages_read_engagement`
5. Clicca su **Genera token di accesso**
6. Accetta le autorizzazioni richieste
7. **COPIA IL TOKEN** (è una stringa lunga tipo: `IGQWRPa2x...`)

---

### PASSO 6: Rendi il token a lungo termine (importante!)

Il token generato scade dopo 1 ora. Per renderlo valido 60 giorni:

1. Vai su https://developers.facebook.com/tools/accesstoken/
2. Trova il tuo token
3. Clicca su **Estendi token di accesso**
4. Copia il **nuovo token esteso** (questo dura 60 giorni)

**QUESTO È IL TOKEN DA INVIARE ALLO SVILUPPATORE**

---

### PASSO 7: Invia il token allo sviluppatore

**⚠️ IMPORTANTE: Il token è come una password! Non condividerlo pubblicamente.**

Invia il token in modo sicuro:
- Via email cifrata
- Via messaggio privato su piattaforma sicura
- NON via WhatsApp o SMS se possibile

---

## Manutenzione

⏰ **Il token scade ogni 60 giorni**

Dopo 60 giorni, il sito tornerà a mostrare i placeholder. Dovrai:
1. Tornare su https://developers.facebook.com/tools/accesstoken/
2. Estendere nuovamente il token
3. Inviare il nuovo token allo sviluppatore

**Opzione alternativa**: Lo sviluppatore può impostare un rinnovo automatico del token (richiede configurazione aggiuntiva).

---

## Problemi comuni

### "Non vedo l'opzione Instagram Graph API"
- Assicurati che l'account Instagram sia Business
- Verifica di aver collegato correttamente la pagina Facebook

### "Il token non funziona"
- Assicurati di aver esteso il token (Passo 6)
- Verifica di aver dato tutte le autorizzazioni necessarie
- Prova a rigenerare il token

### "Vedo un messaggio di errore su Facebook"
- Assicurati che l'app sia in modalità "Sviluppo" o "Live"
- Controlla di essere Admin della pagina Facebook collegata

---

## Serve aiuto?

Se incontri difficoltà durante la procedura, puoi:
1. Fare screenshot del passaggio dove ti sei bloccato
2. Contattare lo sviluppatore per assistenza
3. Seguire le guide ufficiali: https://developers.facebook.com/docs/instagram-api/

---

## Note per lo sviluppatore

Una volta ricevuto il token, aggiungerlo al file `.env.local`:

```bash
INSTAGRAM_ACCESS_TOKEN=il_token_ricevuto_dal_cliente
```

Poi riavviare il server di sviluppo.
