import { Photo } from "../types";

// Import branding
import logoImg from "./logo.jpg";
import heroImg from "./Kacper.jpg";

// Import portrety
import portrait1 from "./portrety/DSC_0335.jpg";
import portrait2 from "./portrety/DSC_1468.jpg";
import portrait3 from "./portrety/DSC_1707.jpg";
import portrait4 from "./portrety/DSC_1867.jpg";
import portrait5 from "./portrety/DSC_2092.jpg";

// Import krajobrazy
import landscape1 from "./krajobraz/photo_2026-02-16_17-22-17.jpg";
import landscape2 from "./krajobraz/photo_2026-02-16_17-22-19.jpg";
import landscape3 from "./krajobraz/photo_2026-02-16_17-22-29.jpg";
import landscape4 from "./krajobraz/photo_2026-02-16_17-22-31.jpg";
import landscape5 from "./krajobraz/photo_2026-02-16_17-22-34.jpg";
import landscape6 from "./krajobraz/photo_2026-02-16_17-22-36.jpg";
import landscape7 from "./krajobraz/photo_2026-02-16_17-22-39.jpg";

// Import eventy
import event1 from "./wydarzenia/DSC07435.JPG";
import event2 from "./wydarzenia/DSC07436.JPG";
import event3 from "./wydarzenia/DSC07544.jpg";
import event4 from "./wydarzenia/DSC07557.JPG";
import event5 from "./wydarzenia/DSC07620.JPG";
import event6 from "./wydarzenia/DSC07627.JPG";
import event7 from "./wydarzenia/DSC_1641.jpg";

export const INITIAL_PHOTOS: Photo[] = [
  // Portrety
  { id: "1", url: portrait1, title: "Portret 1", category: "Portrety" },
  { id: "2", url: portrait2, title: "Portret 2", category: "Portrety" },
  { id: "3", url: portrait3, title: "Portret 3", category: "Portrety" },
  { id: "4", url: portrait4, title: "Portret 4", category: "Portrety" },
  { id: "5", url: portrait5, title: "Portret 5", category: "Portrety" },

  // Krajobrazy
  { id: "6", url: landscape1, title: "Krajobrazy 1", category: "Krajobrazy" },
  { id: "7", url: landscape2, title: "Krajobrazy 2", category: "Krajobrazy" },
  { id: "8", url: landscape3, title: "Krajobrazy 3", category: "Krajobrazy" },
  { id: "9", url: landscape4, title: "Krajobrazy 4", category: "Krajobrazy" },
  { id: "10", url: landscape5, title: "Krajobrazy 5", category: "Krajobrazy" },
  { id: "11", url: landscape6, title: "Krajobrazy 6", category: "Krajobrazy" },
  { id: "12", url: landscape7, title: "Krajobrazy 7", category: "Krajobrazy" },

  // Eventy
  { id: "13", url: event1, title: "Event 1", category: "Eventy" },
  { id: "14", url: event2, title: "Event 2", category: "Eventy" },
  { id: "15", url: event3, title: "Event 3", category: "Eventy" },
  { id: "16", url: event4, title: "Event 4", category: "Eventy" },
  { id: "17", url: event5, title: "Event 5", category: "Eventy" },
  { id: "18", url: event6, title: "Event 6", category: "Eventy" },
  { id: "19", url: event7, title: "Event 7", category: "Eventy" },
];

export const BRANDING_IMAGES = {
  logo: logoImg,
  hero: heroImg,
};
