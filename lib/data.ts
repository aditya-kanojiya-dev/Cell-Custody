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

export type FAQ = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  ticketCode: string;
  startingPrice: number;
  turnaround: string;
  description: string;
  icon: React.ElementType;
  details: string;
  faq: FAQ[];
  applicableBrands?: string[];
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
    details:
      "A damaged screen is the most common phone issue we fix. Whether it's cracked glass, a dead display, unresponsive touch, or display lines — we carry tested LCD and OLED panels for most popular models. The technician inspects your device, confirms the correct part is available, and replaces it on-site. You can watch the entire process and test the screen before payment.",
    faq: [
      {
        question: "Do you use original or third-party screens?",
        answer:
          "We use high-quality tested panels. Original-grade OLED screens are available for select models at a higher price point. Your technician will confirm options before starting.",
      },
      {
        question: "Will my data be safe during screen replacement?",
        answer:
          "Screen replacement does not affect your data. Everything on your phone stays as-is.",
      },
      {
        question: "What if only the glass is cracked but the display still works?",
        answer:
          "In some cases, only the outer glass needs replacement, which is more affordable. The technician will assess and let you know the best option.",
      },
      {
        question: "How long does a screen replacement take?",
        answer:
          "Most screen replacements are completed within 30–45 minutes depending on the device model.",
      },
    ],
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
    details:
      "Battery health degrades over time. If your phone shuts down unexpectedly, drains fast, or takes forever to charge, a battery swap usually fixes it. We use high-capacity batteries tested to match original performance. The technician replaces the battery on-site and helps you verify the improvement before you pay.",
    faq: [
      {
        question: "How do I know if my battery needs replacing?",
        answer:
          "Signs include rapid draining, unexpected shutdowns, swollen back panel, or the phone only works while plugged in. You can also check battery health in your phone's settings.",
      },
      {
        question: "Will replacing the battery void my warranty?",
        answer:
          "For phones outside the manufacturer's warranty period, there's no impact. For phones under warranty, check with the manufacturer first.",
      },
      {
        question: "Do you test the new battery before leaving?",
        answer:
          "Yes. After replacement, we run a quick charge cycle and show you the battery health reading so you can see the improvement.",
      },
    ],
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
    details:
      "Charging port issues are usually caused by dust accumulation, bent pins, or wear from daily use. The technician first tries cleaning and re-seating the connector. If the port is physically damaged, we replace it with a compatible unit. You test charging on your own charger before confirming the repair.",
    faq: [
      {
        question: "My phone charges slowly — is it the port or the cable?",
        answer:
          "It could be either. The technician will diagnose the actual cause — cleaning the port fixes it in many cases, and you avoid unnecessary part replacement.",
      },
      {
        question: "Can you fix wireless charging issues too?",
        answer:
          "Wireless charging problems are often hardware-related and may need a different approach. Contact us with your model details and we'll let you know.",
      },
      {
        question: "Do I need to leave my phone for the repair?",
        answer:
          "No. Charging port repair is done on-site, typically within 30 minutes. You keep your phone the entire time.",
      },
    ],
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
    details:
      "A cracked back panel can let in dust and moisture, and it looks bad. We replace the back glass while carefully preserving the camera module, wireless charging coil, and internal components. The technician uses the correct adhesive and alignment tools to ensure a clean finish.",
    faq: [
      {
        question: "Is back glass replacement purely cosmetic?",
        answer:
          "Mostly yes, but a cracked back can let in dust and moisture over time. Replacing it protects the internals and restores the phone's original look.",
      },
      {
        question: "Will wireless charging still work after replacement?",
        answer:
          "Yes. We take care to preserve the wireless charging coil during the replacement process.",
      },
      {
        question: "Do you match the original colour?",
        answer:
          "We carry back panels in the most common colours. If your exact colour isn't available, we'll confirm before proceeding.",
      },
    ],
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
    details:
      "Camera issues can range from a scratched lens cover to a faulty camera module. The technician diagnoses whether it's the lens glass (cheaper fix) or the full module that needs replacing. For multi-camera phones, we check each camera individually so you only pay for what needs fixing.",
    faq: [
      {
        question: "How do I know if it's the lens or the camera module?",
        answer:
          "A scratched or cracked lens glass is usually visible from the outside and is a simpler fix. If the camera app shows a black screen or blurry image despite clean glass, it's likely the module.",
      },
      {
        question: "Will the camera quality be the same after repair?",
        answer:
          "Yes. We use tested camera modules that match the original specifications. Photo quality is not affected.",
      },
      {
        question: "Can you fix the front camera too?",
        answer:
          "Yes. We repair both front and rear cameras for most phone models.",
      },
    ],
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
    details:
      "Speaker and microphone problems affect calls, media playback, and voice recordings. The technician runs audio tests to pinpoint the issue — it could be a blocked speaker grille, a faulty module, or a connection problem. Most speaker and mic repairs are completed in under 30 minutes.",
    faq: [
      {
        question: "The call volume is low — is it the speaker or software?",
        answer:
          "The technician will test both. If it's a blocked grille, a quick cleaning fixes it. If the speaker module is faulty, we replace it on the spot.",
      },
      {
        question: "Can you fix the earpiece speaker too?",
        answer:
          "Yes. We repair earpiece speakers, bottom speakers, and microphones for most phone models.",
      },
    ],
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
    details:
      "Water damage is time-sensitive. If your phone has been exposed to water, switch it off immediately and bring it to us — or better, we come to you. The technician performs an initial diagnosis on-site to assess the extent of damage. A detailed cleaning and component-level repair follows if the device is recoverable. We explain the cost before proceeding.",
    faq: [
      {
        question: "Should I try turning my phone on after water exposure?",
        answer:
          "No. Turning it on can cause a short circuit and more damage. Switch it off, keep it dry, and contact us immediately.",
      },
      {
        question: "Can all water-damaged phones be fixed?",
        answer:
          "Not always. Recovery depends on how long the device was exposed, the type of liquid, and how quickly you act. The technician will give you an honest assessment.",
      },
      {
        question: "Is the diagnosis really free?",
        answer:
          "Yes. The initial on-site diagnosis is free. You only pay if you approve the repair quote.",
      },
    ],
  },
  {
    slug: "software-issues",
    name: "Software Repair",
    ticketCode: "SFT-08",
    startingPrice: 299,
    turnaround: "20 min",
    icon: Cpu,
    description:
      "Boot loops, frozen screens, slow performance, or update failures — sorted without losing your data.",
    details:
      "Software issues are often fixable without opening the phone. We handle boot loops, frozen screens, app crashes, slow performance, failed updates, and general software glitches. The technician runs diagnostics, applies the right fix, and preserves your data wherever possible. For more involved issues like virus removal or OS reinstallation, we explain the process and confirm before proceeding.",
    faq: [
      {
        question: "Will I lose my data during a software fix?",
        answer:
          "In most cases, no. We try to preserve your data first. If a factory reset is required, we'll explain that upfront and back up what we can.",
      },
      {
        question: "Do you remove viruses and malware?",
        answer:
          "Yes. We run malware scans, remove suspicious apps, and clean up the system to restore performance.",
      },
      {
        question: "Can you fix phones stuck on the logo screen?",
        answer:
          "Yes. Boot loop and stuck-on-logo issues are common and usually fixable on-site. The technician diagnoses the cause and applies the appropriate fix.",
      },
    ],
  },
  {
    slug: "icloud-activation-lock",
    name: "iCloud & Activation Lock",
    ticketCode: "APL-09",
    startingPrice: 999,
    turnaround: "Same day",
    icon: Smartphone,
    description:
      "Locked out of your iPhone due to iCloud Lock or Activation Lock? We help with verification-based unlocking for Apple devices.",
    details:
      "We provide assistance with iCloud Lock, Activation Lock, and Owner Lock issues specifically for Apple devices. This service requires verification of device ownership before any work begins. Bring or have ready your active mobile number linked to the Apple Account, the original purchase bill or invoice, and the original device box. Services are provided only after verifying device ownership and the required documents. We do not bypass locks on stolen or unverified devices.",
    applicableBrands: ["apple"],
    faq: [
      {
        question: "What documents do I need for iCloud Lock removal?",
        answer:
          "You need three things: an active mobile number linked to the Apple Account, the original purchase bill or invoice, and the original device box.",
      },
      {
        question: "Can you unlock a phone I bought second-hand?",
        answer:
          "Only if you can prove legitimate ownership with the original purchase documents. We do not unlock devices without verified ownership.",
      },
      {
        question: "How long does the unlocking process take?",
        answer:
          "It typically takes the same day, depending on verification speed and Apple's processing time.",
      },
      {
        question: "Will this erase my data?",
        answer:
          "The process may restore the device to factory settings. If possible, we help you back up data before proceeding.",
      },
    ],
  },
  {
    slug: "data-transfer",
    name: "Data Transfer",
    ticketCode: "DTR-10",
    startingPrice: 499,
    turnaround: "30–60 min",
    icon: Smartphone,
    description:
      "Securely transfer your important data between devices — Android to iPhone, iPhone to Android, or same platform.",
    details:
      "Moving to a new phone? We help you transfer contacts, photos, videos, documents, and other supported data between devices. We handle cross-platform transfers including Android to iPhone (iOS), iPhone to Android, and same-platform transfers. The technician ensures your data is moved securely and you can verify everything on the new device before we leave.",
    applicableBrands: ["apple"],
    faq: [
      {
        question: "Can you transfer data from Android to iPhone?",
        answer:
          "Yes. We handle Android to iPhone (iOS) transfers including contacts, photos, videos, and documents.",
      },
      {
        question: "Will I lose any data during the transfer?",
        answer:
          "No. We ensure all your data is copied to the new device. You can verify everything before we leave.",
      },
      {
        question: "What types of data can be transferred?",
        answer:
          "Contacts, photos, videos, documents, messages (where supported), and app data. The exact list depends on the platforms involved.",
      },
    ],
  },
  {
    slug: "iphone-flashing",
    name: "iPhone Flashing & Restoration",
    ticketCode: "APL-11",
    startingPrice: 699,
    turnaround: "30–45 min",
    icon: Cpu,
    description:
      "iPhone software flashing and restoration using official Apple software and supported procedures.",
    details:
      "We provide iPhone software flashing and restoration using official Apple software and supported procedures. This includes iOS software restoration, official software installation and updates, and software troubleshooting for iPhones stuck in recovery mode, boot loops, or experiencing persistent software errors. The technician uses verified tools and ensures your device runs the latest compatible iOS version after the process.",
    applicableBrands: ["apple"],
    faq: [
      {
        question: "Will flashing erase my iPhone data?",
        answer:
          "A full restore typically erases data. If you have a backup, we can help restore it after the process. We recommend backing up before the appointment.",
      },
      {
        question: "Do you use official Apple tools?",
        answer:
          "Yes. We use official Apple software and supported procedures for all iPhone flashing and restoration work.",
      },
      {
        question: "Can you fix an iPhone stuck on the Apple logo?",
        answer:
          "Yes. Recovery mode restores and firmware updates can resolve most stuck-on-logo issues. The technician diagnoses and fixes this on-site.",
      },
    ],
  },
  {
    slug: "iphone-storage-upgrade",
    name: "iPhone Storage Upgrade",
    ticketCode: "APL-12",
    startingPrice: 1499,
    turnaround: "2–3 hours",
    icon: Cpu,
    description:
      "Increase your iPhone's storage capacity with a professional storage upgrade. Only available for compatible iOS devices.",
    details:
      "We provide storage upgrades for iOS devices, subject to device compatibility and technical feasibility. This is a hardware-level upgrade that increases your iPhone's internal storage capacity. The process involves backing up your data, replacing the storage module, restoring iOS, and verifying the upgrade. We test the device thoroughly after the upgrade to ensure everything works correctly. Only available for compatible iPhone models — the technician will confirm compatibility before booking.",
    applicableBrands: ["apple"],
    faq: [
      {
        question: "Which iPhone models support storage upgrades?",
        answer:
          "Storage upgrades are not available for all models. Contact us with your iPhone model and we'll confirm whether it's technically feasible.",
      },
      {
        question: "Will I lose my data during the upgrade?",
        answer:
          "The process involves a full backup and restore. We back up your data before starting and restore it after the upgrade is complete.",
      },
      {
        question: "How long does the storage upgrade take?",
        answer:
          "It typically takes 2–3 days because it involves backup, hardware work, iOS restoration, and thorough testing.",
      },
      {
        question: "Is the upgrade permanent and safe?",
        answer:
          "Yes. Once upgraded, the storage behaves exactly like the original. We test the device before confirming the repair.",
      },
    ],
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
  addressLine: "Apartment No 202, second floor, near Basket Ball ground, opposite Mini Punjab, Dharampeth, Nagpur",
};