export interface Servizio {
  id: string;
  slug: string;
  titolo: string;
  categoria: string;
  descrizioneBreve: string;
  descrizioneCompleta: string;
  quandoUtile?: string;
  comeSiEsegue?: string;
  preparazione?: string;
  durata?: string;
  prenotazioneConsigliata: boolean;
  immagine?: string;
  icon?: string;
}

export interface Orario {
  giorno: string;
  orari: string;
}

export interface ContattoForm {
  nome: string;
  cognome?: string;
  telefono: string;
  email: string;
  servizio?: string;
  messaggio: string;
  privacy: boolean;
}
