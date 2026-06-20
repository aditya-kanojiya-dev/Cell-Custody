import {
  Smartphone,
  Battery,
  Droplets,
  Camera,
  PlugZap,
  Mic,
  Cpu,
  Wrench,
} from "lucide-react";

/* =========================
   SERVICES
========================= */

export type Service = {
  slug: string;
  name: string;
  ticketCode: string;
  startingPrice: number;
  turnaround: string;
  description: string;
  icon: React.ElementType;
};

export const services: Service[] = [
  {
    slug: "screen-replacement",
    name: "Screen Replacement",
    ticketCode: "SCR-01",
    startingPrice: 999,
    turnaround: "45 min",
    icon: Smartphone,
    description:
      "Cracked glass, dead pixels, or unresponsive touch — replaced at your door with tested display units.",
  },
  {
    slug: "battery-replacement",
    name: "Battery Replacement",
    ticketCode: "BAT-02",
    startingPrice: 599,
    turnaround: "30 min",
    icon: Battery,
    description:
      "Phone dying by noon? Swapped with a fresh battery rated to original capacity.",
  },
  {
    slug: "charging-port-repair",
    name: "Charging Port Repair",
    ticketCode: "CHG-03",
    startingPrice: 399,
    turnaround: "30 min",
    icon: PlugZap,
    description:
      "Loose connection, slow charge, or no charge at all — cleaned or replaced on the spot.",
  },
  {
    slug: "back-glass-replacement",
    name: "Back Glass Replacement",
    ticketCode: "BGL-04",
    startingPrice: 799,
    turnaround: "40 min",
    icon: Droplets,
    description:
      "Shattered back panel replaced without disturbing your camera or wireless charging coil.",
  },
  {
    slug: "camera-repair",
    name: "Camera Repair",
    ticketCode: "CAM-05",
    startingPrice: 699,
    turnaround: "35 min",
    icon: Camera,
    description:
      "Blurry shots, black screen on camera open, or cracked lens glass — fixed at your door.",
  },
  {
    slug: "speaker-mic-repair",
    name: "Speaker & Mic Repair",
    ticketCode: "SPK-06",
    startingPrice: 449,
    turnaround: "30 min",
    icon: Mic,
    description:
      "Muffled calls, no sound, or a mic the other end can't hear — diagnosed and resolved on site.",
  },
  {
    slug: "water-damage-repair",
    name: "Water Damage Repair",
    ticketCode: "WTR-07",
    startingPrice: 499,
    turnaround: "Diagnosis on site",
    icon: Droplets,
    description:
      "Dropped in water? Don't power it on. Free diagnosis, transparent quote before any repair.",
  },
  {
    slug: "software-issues",
    name: "Software Issues",
    ticketCode: "SFT-08",
    startingPrice: 299,
    turnaround: "20 min",
    icon: Cpu,
    description:
      "Boot loops, frozen screens, slow performance, or update failures — sorted without losing your data.",
  },
];

/* =========================
   BRANDS
========================= */

export type Brand = {
  slug: string;
  name: string;
  image: string;
};

export const brands: Brand[] = [
  { slug: "apple", name: "Apple", image: "/images/brands/apple.png" },
  { slug: "samsung", name: "Samsung", image: "/images/brands/samsung.png" },
  { slug: "xiaomi", name: "Xiaomi", image: "/images/brands/xiaomi.png" },
  { slug: "oneplus", name: "OnePlus", image: "/images/brands/oneplus.png" },
  { slug: "vivo", name: "Vivo", image: "/images/brands/vivo.png" },
  { slug: "oppo", name: "Oppo", image: "/images/brands/oppo.png" },
  { slug: "realme", name: "Realme", image: "/images/brands/realme.png" },
  { slug: "motorola", name: "Motorola", image: "/images/brands/motorola.png" },
  { slug: "google", name: "Google", image: "/images/brands/google.png" },
  { slug: "nothing", name: "Nothing", image: "/images/brands/nothing.png" },
  { slug: "iqoo", name: "iQOO", image: "/images/brands/iqoo.png" },
  { slug: "asus", name: "Asus", image: "/images/brands/asus.png" },
  { slug: "nokia", name: "Nokia", image: "/images/brands/nokia.png" },
  { slug: "honor", name: "Honor", image: "/images/brands/honor.png" },
  { slug: "sony", name: "Sony", image: "/images/brands/sony.png" },
  { slug: "infinix", name: "Infinix", image: "/images/brands/infinix.png" },
  { slug: "tecno", name: "Tecno", image: "/images/brands/tecno.png" },
  { slug: "poco", name: "Poco", image: "/images/brands/poco.png" },
];

/* =========================
   PHONE MODELS
========================= */

export const phoneModels: Record<string, string[]> = {
Apple: [
"iPhone 16 Pro Max",
"iPhone 16 Pro",
"iPhone 16 Plus",
"iPhone 16",
"iPhone 15 Pro Max",
"iPhone 15 Pro",
"iPhone 15 Plus",
"iPhone 15",
"iPhone 14 Pro",
"iPhone 14",
"iPhone 13",
"iPhone 12",
"iPhone 11",
"Other",
],

Samsung: [
"Galaxy S25 Ultra",
"Galaxy S25+",
"Galaxy S25",
"Galaxy S24 Ultra",
"Galaxy S24",
"Galaxy S23",
"Galaxy A56",
"Galaxy A55",
"Galaxy M56",
"Galaxy M55",
"Other",
],

Xiaomi: [
"Xiaomi 15 Ultra",
"Xiaomi 15",
"Xiaomi 14",
"Redmi Note 14 Pro+",
"Redmi Note 14 Pro",
"Redmi Note 14",
"Other",
],

OnePlus: [
"OnePlus 13",
"OnePlus 12",
"OnePlus 11",
"Nord 5",
"Nord 4",
"Nord CE 4",
"Other",
],

Vivo: [
"X200 Pro",
"X100",
"V50",
"V40",
"T4",
"Y200",
"Other",
],

Oppo: [
"Find X8 Pro",
"Find X8",
"Reno 14 Pro",
"Reno 14",
"A5",
"Other",
],

Realme: [
"GT 7",
"GT 6",
"Realme 14 Pro+",
"Realme 14 Pro",
"Narzo 80",
"Other",
],

Motorola: [
"Edge 60 Pro",
"Edge 50 Ultra",
"Moto G85",
"Moto G64",
"Other",
],

Google: [
"Pixel 9 Pro XL",
"Pixel 9 Pro",
"Pixel 9",
"Pixel 8 Pro",
"Pixel 8",
"Pixel 7",
"Other",
],

Nothing: [
"Phone (3)",
"Phone (2a)",
"Phone (2)",
"CMF Phone 2 Pro",
"CMF Phone 1",
"Other",
],

iQOO: [
"iQOO 13",
"Neo 10",
"Neo 9",
"Z9",
"Other",
],

Asus: [
"ROG Phone 9",
"ROG Phone 8",
"Zenfone 11",
"Other",
],

Nokia: [
"XR21",
"G60",
"G42",
"Other",
],

Honor: [
"Magic 7 Pro",
"Magic 6 Pro",
"Honor 200",
"Honor X9c",
"Other",
],

Sony: [
"Xperia 1 VI",
"Xperia 5 V",
"Xperia 10 VI",
"Other",
],

Infinix: [
"GT 30 Pro",
"Note 50",
"Hot 50",
"Zero 40",
"Other",
],

Tecno: [
"Camon 40",
"Camon 30",
"Pova 7",
"Spark 30",
"Other",
],

Poco: [
"Poco F7 Ultra",
"Poco F7",
"Poco X7 Pro",
"Poco X7",
"Poco M7",
"Other",
],
};


/* =========================
   AREAS
========================= */

export type Area = {
  slug: string;
  name: string;
};

export const areas: Area[] = [
  {
    slug: "dharampeth",
    name: "Dharampeth",
  },
  {
    slug: "sadar",
    name: "Sadar",
  },
  {
    slug: "civil-lines",
    name: "Civil Lines",
  },
  {
    slug: "pratap-nagar",
    name: "Pratap Nagar",
  },
  {
    slug: "manish-nagar",
    name: "Manish Nagar",
  },
  {
    slug: "wardha-road",
    name: "Wardha Road",
  },
  {
    slug: "sitabuldi",
    name: "Sitabuldi",
  },
  {
    slug: "ramdaspeth",
    name: "Ramdaspeth",
  },
  {
    slug: "dhantoli",
    name: "Dhantoli",
  },
  {
    slug: "trimurti-nagar",
    name: "Trimurti Nagar",
  },
  {
    slug: "bajaj-nagar",
    name: "Bajaj Nagar",
  },
  {
    slug: "shankar-nagar",
    name: "Shankar Nagar",
  },
  {
    slug: "mankapur",
    name: "Mankapur",
  },
  {
    slug: "ajni",
    name: "Ajni",
  },
  {
    slug: "gandhibagh",
    name: "Gandhibagh",
  },
  {
    slug: "seminary-hills",
    name: "Seminary Hills",
  },
  {
    slug: "gokulpeth",
    name: "Gokulpeth",
  },
  {
    slug: "jaitala",
    name: "Jaitala",
  },
  {
    slug: "jaripatka",
    name: "Jaripatka",
  },
  {
    slug: "nandanvan",
    name: "Nandanvan",
  },
];

/* =========================
   CONTACT
========================= */

export const contact = {
  phoneDisplay: "+91 89834 18850",
  phoneHref: "tel:+918983418850",
  whatsappHref: "https://wa.me/918983418850",
  email: "book@cellcustody.in",
  addressLine: "Cabin No 3, Apartment No 202, second floor, near Basket Ball ground, opposite Mini Punjab, Dharampeth, Nagpur",
};