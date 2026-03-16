# SPECIFICHE SVILUPPO - SITO FARMACIA RESTA
## Documentazione tecnica progetto web

---

## 📋 INFORMAZIONI GENERALI

**Cliente**: Farmacia Resta SRL  
**Indirizzo**: Via Resistenza 14/B, Opera (MI), 20073  
**Partita IVA**: 06778670965  
**Contatti**:
- Tel: 02 5760 4980
- WhatsApp: 376 195 0984
- Email: info@anticafarmaciadiopera.it

---

## 🎯 OBIETTIVI DEL SITO

1. Presentare la farmacia e la sua storia
2. Mostrare tutti i servizi offerti (18 servizi)
3. Permettere contatto diretto via WhatsApp e telefono
4. Integrare feed Instagram/Facebook
5. Geolocalizzazione con mappa interattiva
6. Sistema di prenotazione/contatto per servizi

---

## 🛠️ STACK TECNOLOGICO

### Framework e Librerie
- **Framework**: Next.js 14+ (App Router)
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS
- **Animazioni**: Framer Motion
- **Icone**: Lucide React o Heroicons
- **Form**: React Hook Form + Zod (validazione)
- **Mappa**: React Leaflet o Google Maps API

### Ottimizzazione Immagini
- **Formato principale**: WebP
- **Fallback**: AVIF (ottimizzazione Next.js automatica)
- **Componente**: `next/image` per lazy loading e ottimizzazione

### SEO e Performance
- **Metadata**: Next.js metadata API
- **Sitemap**: Generata automaticamente
- **Analytics**: Google Analytics 4 (da integrare)
- **Performance target**: Lighthouse score > 90

---

## 📐 STRUTTURA DEL SITO

### Pagine Principali

#### 1. HOME PAGE (`/`)
**Componenti**:
- **Hero Section**:
  - Carousel con 2 immagini:
    - Foto esterno farmacia (con luci natalizie)
    - Foto team farmacisti al lavoro
  - Overlay con orari di apertura
  - CTA: Pulsanti WhatsApp e Telefono
  
- **Orari di apertura** (visibile in hero):
  ```
  LUN: 14:30 - 19:30
  MAR-SAB: 8:30 - 12:30 | 14:30 - 19:30
  ```

- **Sezione Chi Siamo** (teaser):
  - Breve intro (2-3 righe)
  - Bottone "Scopri di più" → link a `/chi-siamo`

- **3 Box CTA principali**:
  1. "Servizi su misura per le tue esigenze" → `/servizi`
  2. "Rimani sempre informato" → Link social (Instagram + Facebook)
  3. "Prenota e ritira" → Form contatto/prenotazione

- **Feed Instagram** (barra scrollabile):
  - Ultimi 6-8 post Instagram
  - Integrazione API Instagram

- **Mappa interattiva**:
  - Google Maps con pin Farmacia Resta
  - Indirizzo: Via Resistenza 14/B, Opera (MI)

#### 2. CHI SIAMO (`/chi-siamo`)
**Contenuto**:
- Storia della farmacia (4 paragrafi dal file INTRO.md)
- Foto team
- Valori: professionalità, ascolto, dedizione
- Timeline storica (opzionale)

#### 3. SERVIZI (`/servizi`)
**Layout**:
- **Griglia servizi** (18 card):
  - Ogni card con:
    - Icona rappresentativa
    - Titolo servizio
    - Breve descrizione (1 riga)
    - Click → apre pagina dettaglio `/servizi/[slug]`

**Lista servizi**:
1. Holter Cardiaco
2. Holter Pressorio
3. Elettrocardiogramma
4. Misurazione Pressione
5. Preparazioni Galeniche
6. Tampone COVID
7. Tampone Streptococco
8. Foratura Lobi
9. Controllo dell'Udito
10. Analisi Pelle
11. Analisi Capello
12. Check Teledermatologia
13. Magnetoterapia a Noleggio
14. Noleggio Elettromedicali
15. Noleggio Inalatore
16. Noleggio Tiralatte
17. Prodotti Senza Glutine
18. Servizio Vaccinale

#### 4. SERVIZIO DETTAGLIO (`/servizi/[slug]`)
**Layout**:
- Breadcrumb: Home > Servizi > [Nome Servizio]
- Titolo servizio
- Gallery foto (se disponibili)
- Descrizione completa (da INTRO.md)
- Sezioni:
  - "Quando è utile eseguirlo?"
  - "Come si esegue?"
  - "Preparazione necessaria"
  - "Costi e disponibilità"
- **CTA Form contatto**:
  - "Per conoscere le disponibilità e i costi contattaci qui"
  - Form con:
    - Nome
    - Telefono
    - Email
    - Messaggio
    - Checkbox privacy GDPR
  - Invio → Email alla farmacia

#### 5. CONTATTI (`/contatti`)
**Contenuto**:
- Form contatto completo
- Informazioni:
  - Telefono (link tel:)
  - WhatsApp (link wa.me)
  - Email (link mailto:)
  - Indirizzo
- Mappa interattiva
- Orari apertura
- Link social

---

## 🎨 DESIGN E UX

### Palette Colori Suggerita
- **Primario**: Verde farmacia (#00A86B o simile)
- **Secondario**: Blu scuro (#1E3A8A)
- **Accento**: Arancione/Rosso per CTA (#FF6B35)
- **Neutri**: Grigio chiaro, bianco, grigio scuro
- **Sfondo**: Bianco / Grigio chiaro (#F9FAFB)

### Typography
- **Heading**: Inter, Poppins o Montserrat (bold)
- **Body**: Inter o Open Sans (regular, medium)
- **Size scale**: Tailwind default (text-sm, text-base, text-lg, etc.)

### Layout
- **Desktop**: Max-width 1280px (container)
- **Mobile-first**: Responsive da 320px
- **Breakpoints**: Tailwind default (sm, md, lg, xl, 2xl)

### Componenti UI
- **Navbar**:
  - Logo Farmacia Resta
  - Menu: Home | Chi Siamo | Servizi | Contatti
  - Icone social (Instagram, Facebook)
  - Bottone WhatsApp fisso
  - Hamburger menu mobile

- **Footer**:
  - 3 colonne:
    1. Info farmacia (indirizzo, P.IVA)
    2. Link rapidi (Chi siamo, Servizi, Privacy)
    3. Contatti e social
  - Copyright
  - Link Privacy Policy e Cookie Policy

- **Floating WhatsApp Button**:
  - Fisso in basso a destra
  - Icona WhatsApp verde
  - Link diretto: `https://wa.me/393761950984`

### Animazioni
- **Scroll animations**: Fade in, slide up (Framer Motion)
- **Hover effects**: Scale, shadow su card
- **Page transitions**: Smooth fade tra pagine
- **Loading**: Skeleton loader per immagini

---

## 📱 FUNZIONALITÀ

### 1. Form Contatto/Prenotazione
**Campi**:
- Nome* (required)
- Cognome
- Telefono* (required, validazione numero italiano)
- Email* (required, validazione email)
- Servizio interessato (select dropdown)
- Messaggio
- Checkbox Privacy* (required)

**Invio**:
- Validazione lato client (Zod)
- Invio email alla farmacia: `info@anticafarmaciadiopera.it`
- Messaggio conferma utente
- Opzionale: Integrazione con servizio email (SendGrid, Resend, Nodemailer)

### 2. Integrazione Social
**Instagram**:
- Feed ultimi post (6-8 post)
- API Instagram Basic Display o servizio terze parti
- Barra scrollabile orizzontale in home

**Facebook**:
- Link diretto alla pagina (da aggiornare)

**WhatsApp**:
- Bottone fisso floating
- Link CTA in varie sezioni
- Formato: `https://wa.me/393761950984?text=Ciao,%20vorrei%20informazioni%20su...`

### 3. Mappa Interattiva
**Integrazione**:
- Google Maps Embed o React Leaflet
- Coordinate: Via Resistenza 14/B, Opera (MI)
- Marker custom (logo farmacia)
- Bottone "Ottieni indicazioni" → Google Maps app

### 4. SEO
**Meta tags per ogni pagina**:
- Title
- Description
- Open Graph (Facebook)
- Twitter Card
- Canonical URL

**Structured Data (JSON-LD)**:
- LocalBusiness schema per farmacia
- Service schema per ogni servizio
- Organization schema

**Keywords focus**:
- Farmacia Opera
- Farmacia Resta
- Servizi farmaceutici Opera
- Holter cardiaco Milano
- Elettrocardiogramma Opera
- etc.

### 5. Performance
**Ottimizzazioni**:
- Image lazy loading (next/image)
- Code splitting automatico (Next.js)
- Preload fonts
- Minimize CSS/JS
- Caching statico
- CDN per assets (Vercel automatico)

**Target**:
- Lighthouse Performance: > 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

---

## 📂 STRUTTURA FILE PROGETTO

```
farmacia-resta/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   │   ├── esterno-farmacia.webp
│   │   │   └── team-farmacisti.webp
│   │   ├── servizi/
│   │   │   ├── holter-cardiaco.webp
│   │   │   ├── elettrocardiogramma.webp
│   │   │   └── ... (tutti i servizi)
│   │   ├── chi-siamo/
│   │   │   └── team-foto.webp
│   │   ├── icons/
│   │   │   └── ... (icone SVG servizi)
│   │   └── logo/
│   │       └── farmacia-resta-logo.svg
│   └── fonts/ (opzionale)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx (root layout)
│   │   ├── page.tsx (home page)
│   │   ├── chi-siamo/
│   │   │   └── page.tsx
│   │   ├── servizi/
│   │   │   ├── page.tsx (lista servizi)
│   │   │   └── [slug]/
│   │   │       └── page.tsx (dettaglio servizio)
│   │   ├── contatti/
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts (API form contatto)
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Select.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── FloatingWhatsApp.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CtaBoxes.tsx
│   │   │   ├── InstagramFeed.tsx
│   │   │   └── MapSection.tsx
│   │   ├── servizi/
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── ServiceGrid.tsx
│   │   │   └── ServiceDetail.tsx
│   │   └── forms/
│   │       └── ContactForm.tsx
│   │
│   ├── lib/
│   │   ├── data/
│   │   │   ├── servizi.ts (dati servizi)
│   │   │   └── orari.ts
│   │   ├── utils.ts
│   │   └── validations.ts (schemi Zod)
│   │
│   ├── types/
│   │   └── index.ts (TypeScript types)
│   │
│   └── styles/
│       └── globals.css
│
├── .env.local (variabili ambiente)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🔧 CONFIGURAZIONE

### Environment Variables (.env.local)
```env
# Email Service
EMAIL_SERVICE_API_KEY=xxxxx
EMAIL_TO=info@anticafarmaciadiopera.it

# Instagram API (opzionale)
INSTAGRAM_ACCESS_TOKEN=xxxxx

# Google Maps API
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=xxxxx

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### next.config.js
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['instagram.com', 'cdninstagram.com'], // per feed Instagram
  },
  // Altre configurazioni
}

module.exports = nextConfig
```

---

## 📊 DATI STRUTTURATI

### Esempio LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  "name": "Farmacia Resta SRL",
  "image": "https://www.farmaciavera.it/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Resistenza 14/B",
    "addressLocality": "Opera",
    "addressRegion": "MI",
    "postalCode": "20073",
    "addressCountry": "IT"
  },
  "telephone": "+390257604980",
  "email": "info@anticafarmaciadiopera.it",
  "openingHours": [
    "Mo 14:30-19:30",
    "Tu-Sa 08:30-12:30,14:30-19:30"
  ],
  "priceRange": "€€",
  "vatID": "06778670965"
}
```

---

## 🚀 DEPLOYMENT

### Piattaforma Consigliata
**Vercel** (nativa per Next.js):
- Deploy automatico da Git
- CDN globale
- SSL automatico
- Ottimizzazioni Next.js native
- Free tier sufficiente per questo progetto

### Alternative
- **Netlify**
- **Cloudflare Pages**

### Dominio
- Da registrare/configurare
- Suggerimento: `farmaciaaresta.it` o simile

---

## ✅ CHECKLIST SVILUPPO

### Fase 1: Setup Progetto
- [ ] Inizializzare progetto Next.js con TypeScript
- [ ] Configurare Tailwind CSS
- [ ] Installare dipendenze (Framer Motion, React Hook Form, Zod, etc.)
- [ ] Creare struttura cartelle
- [ ] Configurare ESLint e Prettier

### Fase 2: Layout e Componenti Base
- [ ] Creare Layout principale
- [ ] Sviluppare Navbar responsive
- [ ] Sviluppare Footer
- [ ] Creare componenti UI base (Button, Card, Input, etc.)
- [ ] Implementare FloatingWhatsApp button

### Fase 3: Home Page
- [ ] Hero Section con carousel immagini
- [ ] Sezione orari
- [ ] Box CTA (3 box)
- [ ] Teaser "Chi Siamo"
- [ ] Instagram Feed (mockup iniziale)
- [ ] Mappa interattiva

### Fase 4: Pagine Contenuto
- [ ] Pagina Chi Siamo
- [ ] Pagina Servizi (griglia)
- [ ] Template pagina dettaglio servizio
- [ ] Creare 18 pagine servizi con contenuti
- [ ] Pagina Contatti

### Fase 5: Funzionalità
- [ ] Form contatto con validazione
- [ ] API route per invio email
- [ ] Integrazione Instagram API
- [ ] Integrazione Google Maps
- [ ] Link WhatsApp funzionanti

### Fase 6: SEO e Performance
- [ ] Meta tags tutte le pagine
- [ ] Structured data (JSON-LD)
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Ottimizzazione immagini
- [ ] Test Lighthouse (>90)

### Fase 7: Testing e Deploy
- [ ] Test responsive (mobile, tablet, desktop)
- [ ] Test cross-browser
- [ ] Test form e link
- [ ] Deploy su Vercel
- [ ] Configurare dominio
- [ ] Setup Google Analytics

### Fase 8: Post-Launch
- [ ] Monitorare Analytics
- [ ] Raccogliere feedback cliente
- [ ] Eventuali fix e ottimizzazioni

---

## 📞 CONTATTI SVILUPPO

**Cliente**: Farmacia Resta SRL  
**Email progetto**: info@anticafarmaciadiopera.it  
**Tel**: 02 5760 4980  
**WhatsApp**: 376 195 0984

---

## 📝 NOTE AGGIUNTIVE

### Aggiornamenti Futuri
- Link Instagram e Facebook da aggiornare quando disponibili
- Contenuto foto da inserire quando disponibili dal fotografo
- Privacy Policy e Cookie Policy da redigere (consulenza legale)
- Eventuale area riservata per prenotazioni online (fase 2)

### Accessibilità
- Rispettare WCAG 2.1 AA
- Testi leggibili (contrasto colori)
- Alt text su tutte le immagini
- Navigazione da tastiera
- Screen reader friendly

### GDPR
- Form con checkbox consenso privacy obbligatorio
- Link a Privacy Policy
- Cookie banner (se necessario)
- Informativa trattamento dati

---

**Data creazione**: Novembre 2025  
**Versione**: 1.0  
**Ultimo aggiornamento**: Novembre 2025
