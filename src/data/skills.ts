export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    title: "Integrazione Immediata",
    description: "Il sistema non richiede modifiche strutturali ai parcheggi esistenti. Basta il servizio per modificare i posti da remoto.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.47 4.09-3.1 7.93-7 9.15v-9.15h-7V6.39l7-3.11v8.71z"/></svg>`,
    title: "Sicurezza dei Dati",
    description: "Crittografia avanzata per proteggere informazioni personali e pagamenti, nel pieno rispetto delle normative sulla privacy.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.43c-.16.09-.33.14-.5.14s-.34-.05-.5-.14l-7.97-4.43c-.32-.17-.53-.5-.53-.88v-9c0-.38.21-.71.53-.88l7.97-4.43c.16-.09.33-.14.5-.14s.34.05.5.14l7.97 4.43c.32.17.53.5.53.88v9z"/></svg>`,
    title: "Tech Stack Moderno",
    description: "Sviluppato con Flutter, HTML, CSS e Figma; gestito tramite GitHub per garantire scalabilità e manutenzione continua.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>`,
    title: "Strategia di Crescita",
    description: "Analisi mirata dei competitor e focus su comuni e province per una penetrazione di mercato rapida e a basso costo.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    title: "Mobilità Sostenibile",
    description: "Contribuiamo a ridurre le emissioni di CO2 eliminando i chilometri percorsi inutilmente alla ricerca di un posto.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`,
    title: "Manager Panel",
    description: "Strumento dedicato ai gestori per l'aggiornamento dei posti in tempo reale e la gestione della dashboard analitica.",
  },
];

export type Skill = (typeof skills)[number];