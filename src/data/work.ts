import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "La Soluzione al Caos Urbano",
    company: "Problema & Vision",
    region: "Smart Mobility",
    description:
      "Il 30% del traffico cittadino è causato dalla ricerca di parcheggio. Hold my Spot elimina lo stress, il consumo inutile di carburante e la perdita di tempo permettendo di prenotare il posto auto direttamente dal divano.",
    technologies: [
      "Riduzione Stress",
      "Sostenibilità",
      "Efficienza",
      "Mobilità 4.0"
    ],
  },
  {
    title: "User Experience Immediata",
    company: "Per l'Automobilista",
    region: "App & Web",
    description:
      "Tre semplici step: Trova il parcheggio inserendo la città, scegli il metodo di pagamento e acquista. Una volta arrivati, basta sbloccare il posto col telefono: niente attese, solo la certezza del posto assicurato.",
    technologies: [
      "Flutter",
      "Sistemi di Pagamento",
      "Geolocalizzazione",
      "Real-time Booking"
    ],
  },
  {
    title: "Digitalizzazione Zero Costi",
    company: "Per il Gestore",
    region: "Business Integration",
    description:
      "Rendiamo l'adesione semplicissima: nessun hardware costoso richiesto. Al gestore basta inserire dati e coordinate per digitalizzare l'offerta immediatamente e senza rischi, ricevendo pagamenti diretti.",
    technologies: [
      "Manager Panel",
      "Nessun Hardware",
      "Zero Investimenti",
      "Gestione Dati Sicura"
    ],
  },
  {
    title: "Scalabilità e Profitto",
    company: "Modello di Business",
    region: "Analisi Finanziaria",
    description:
      "Focus sulle province e città medie, spesso trascurate dai grandi competitor. Il nostro guadagno deriva da una commissione di 1€ + 20% sul prezzo del parcheggio. Prevediamo il break-even point al terzo anno con un profitto netto di 138.500€.",
    technologies: [
      "Commission-based",
      "Focus Province",
      "Target Professional",
      "Revenue Growth"
    ],
  },
];

export type WorkItem = (typeof work)[number];