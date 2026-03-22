export interface Artisan {
  id: string;
  name: string;
  craft: string;
  location: string;
  experience: number;
  rating: number;
  reviews: number;
  image: string;
  story: string;
  specialties: string[];
  availableForApprentices: boolean;
  offersWorkshops: boolean;
}

export interface Workshop {
  id: string;
  title: string;
  artisanId: string;
  artisanName: string;
  craft: string;
  duration: string;
  price: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  maxParticipants: number;
  description: string;
  image: string;
  rating: number;
  reviews: number;
}

export interface Apprenticeship {
  id: string;
  artisanId: string;
  artisanName: string;
  craft: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  certification: string;
  description: string;
  requirements: string[];
  skills: string[];
}

export interface Review {
  id: string;
  userName: string;
  userType: "Tourist" | "Apprentice";
  rating: number;
  comment: string;
  date: string;
  craft: string;
}

export const artisans: Artisan[] = [
  {
    id: "1",
    name: "Hassan El Fassi",
    craft: "Leather Working",
    location: "Fez Medina",
    experience: 35,
    rating: 4.9,
    reviews: 127,
    image:
      "https://images.unsplash.com/photo-1532966404682-9d131a1071f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NhbiUyMGFydGlzYW4lMjBsZWF0aGVyJTIwY3JhZnRzbWFufGVufDF8fHx8MTc3NDE0NTkzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    story:
      "I learned the art of leather tanning from my father in the ancient tanneries of Fez. For over 35 years, I've been preserving this thousand-year-old tradition, using the same natural dyes and techniques passed down through generations.",
    specialties: [
      "Traditional Tanning",
      "Leather Dyeing",
      "Babouche Making",
    ],
    availableForApprentices: true,
    offersWorkshops: true,
  },
  {
    id: "2",
    name: "Fatima Benani",
    craft: "Zellige (Tile Mosaic)",
    location: "Fez Medina",
    experience: 28,
    rating: 4.8,
    reviews: 93,
    image:
      "https://images.pexels.com/photos/7565553/pexels-photo-7565553.jpeg",
    story:
      "As one of the few women master zellige artisans in Morocco, I've dedicated my life to creating intricate geometric patterns that tell stories of our Islamic heritage. Each tile is cut and placed by hand with precision and devotion.",
    specialties: [
      "Geometric Patterns",
      "Islamic Art",
      "Restoration Work",
    ],
    availableForApprentices: true,
    offersWorkshops: true,
  },
  {
    id: "3",
    name: "Ahmed Tazi",
    craft: "Wood Carving",
    location: "Fez Medina",
    experience: 42,
    rating: 5.0,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1606077089838-0ac4a27fc96f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NhbiUyMHdvb2RjYXJ2ZXIlMjBhcnRpc2FufGVufDF8fHx8MTc3NDE0NTkzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    story:
      "In my workshop filled with the scent of cedar and thuya wood, I create mashrabiya screens and ornate furniture using techniques unchanged for centuries. Every piece carries the soul of Moroccan craftsmanship.",
    specialties: [
      "Mashrabiya",
      "Furniture Making",
      "Cedar Carving",
    ],
    availableForApprentices: true,
    offersWorkshops: true,
  },
  {
    id: "4",
    name: "Youssef Alami",
    craft: "Pottery & Ceramics",
    location: "Safi",
    experience: 30,
    rating: 4.7,
    reviews: 84,
    image:
      "https://images.unsplash.com/photo-1760726744003-e82b5c1e32be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NhbiUyMHBvdHRlcnklMjBjZXJhbWljJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NzQxNDU5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    story:
      "From the clay hills of Safi to the kilns of tradition, I shape vessels and pottery that blend Berber symbols with contemporary design. Each piece is thrown on the wheel and painted with natural pigments.",
    specialties: [
      "Pottery Throwing",
      "Berber Designs",
      "Glazing Techniques",
    ],
    availableForApprentices: true,
    offersWorkshops: true,
  },
  {
    id: "5",
    name: "Rachid Zahiri",
    craft: "Metal Working",
    location: "Marrakech Medina",
    experience: 25,
    rating: 4.9,
    reviews: 112,
    image:
      "https://images.unsplash.com/photo-1772411534854-e00e174b596d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwdHJhZGl0aW9uYWwlMjBjcmFmdHMlMjBoYW5kc3xlbnwxfHx8fDE3NzQxNDU5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    story:
      "The rhythmic hammering of copper and brass fills my workshop as I create lanterns, trays, and decorative pieces. This metalworking tradition has been in my family for five generations.",
    specialties: [
      "Copper Working",
      "Lantern Making",
      "Engraving",
    ],
    availableForApprentices: true,
    offersWorkshops: true,
  },
  {
    id: "6",
    name: "Nadia Khalil",
    craft: "Textile Weaving",
    location: "Fez Medina",
    experience: 22,
    rating: 4.8,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1748592522302-8ba1fbeaddbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwbWVkaW5hJTIwbWFya2V0JTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzc0MTQ1OTM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    story:
      "On my traditional loom, I weave stories through colorful threads, creating textiles that honor our Berber heritage. Each pattern holds meaning passed down from my grandmother.",
    specialties: [
      "Berber Weaving",
      "Natural Dyes",
      "Traditional Patterns",
    ],
    availableForApprentices: true,
    offersWorkshops: true,
  },
];

export const workshops: Workshop[] = [
  {
    id: "w1",
    title: "Traditional Leather Crafting Experience",
    artisanId: "1",
    artisanName: "Hassan El Fassi",
    craft: "Leather Working",
    duration: "2 hours",
    price: 350,
    difficulty: "Beginner",
    maxParticipants: 6,
    description:
      "Learn the ancient art of leather working in the heart of Fez. Create your own leather pouch using traditional tools and natural dyes.",
    image:
      "https://images.unsplash.com/photo-1532966404682-9d131a1071f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NhbiUyMGFydGlzYW4lMjBsZWF0aGVyJTIwY3JhZnRzbWFufGVufDF8fHx8MTc3NDE0NTkzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 87,
  },
  {
    id: "w2",
    title: "Zellige Mosaic Initiation",
    artisanId: "2",
    artisanName: "Fatima Benani",
    craft: "Zellige",
    duration: "3 hours",
    price: 450,
    difficulty: "Intermediate",
    maxParticipants: 4,
    description:
      "Discover the mesmerizing art of zellige tile-cutting and create your own geometric pattern to take home.",
    image:
      "https://images.pexels.com/photos/7565553/pexels-photo-7565553.jpeg",
    rating: 4.8,
    reviews: 64,
  },
  {
    id: "w3",
    title: "Wood Carving Masterclass",
    artisanId: "3",
    artisanName: "Ahmed Tazi",
    craft: "Wood Carving",
    duration: "4 hours",
    price: 550,
    difficulty: "Intermediate",
    maxParticipants: 5,
    description:
      "Work with master craftsman Ahmed to carve traditional Moroccan patterns into cedar wood using ancient tools.",
    image:
      "https://images.unsplash.com/photo-1606077089838-0ac4a27fc96f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NhbiUyMHdvb2RjYXJ2ZXIlMjBhcnRpc2FufGVufDF8fHx8MTc3NDE0NTkzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5.0,
    reviews: 92,
  },
  {
    id: "w4",
    title: "Pottery Making Workshop",
    artisanId: "4",
    artisanName: "Youssef Alami",
    craft: "Pottery",
    duration: "2.5 hours",
    price: 400,
    difficulty: "Beginner",
    maxParticipants: 8,
    description:
      "Throw your own pottery on a traditional wheel and decorate it with authentic Berber patterns.",
    image:
      "https://images.unsplash.com/photo-1760726744003-e82b5c1e32be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NhbiUyMHBvdHRlcnklMjBjZXJhbWljJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NzQxNDU5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 56,
  },
  {
    id: "w5",
    title: "Copper Lantern Making",
    artisanId: "5",
    artisanName: "Rachid Zahiri",
    craft: "Metal Working",
    duration: "3 hours",
    price: 500,
    difficulty: "Intermediate",
    maxParticipants: 4,
    description:
      "Craft your own Moroccan lantern using traditional metalworking techniques and decorative patterns.",
    image:
      "https://images.unsplash.com/photo-1772411534854-e00e174b596d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwdHJhZGl0aW9uYWwlMjBjcmFmdHMlMjBoYW5kc3xlbnwxfHx8fDE3NzQxNDU5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 73,
  },
  {
    id: "w6",
    title: "Berber Weaving Experience",
    artisanId: "6",
    artisanName: "Nadia Khalil",
    craft: "Textile Weaving",
    duration: "2 hours",
    price: 380,
    difficulty: "Beginner",
    maxParticipants: 6,
    description:
      "Learn traditional Berber weaving patterns and create a small textile piece on an authentic loom.",
    image:
      "https://images.unsplash.com/photo-1748592522302-8ba1fbeaddbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwbWVkaW5hJTIwbWFya2V0JTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzc0MTQ1OTM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 49,
  },
];

export const apprenticeships: Apprenticeship[] = [
  {
    id: "a1",
    artisanId: "1",
    artisanName: "Hassan El Fassi",
    craft: "Leather Working",
    duration: "6 months",
    level: "Beginner",
    certification: "Certified Leather Artisan - Level 1",
    description:
      "Comprehensive training in traditional leather tanning, dyeing, and product creation. Learn the complete process from raw hide to finished goods.",
    requirements: [
      "Age 16-30",
      "Commitment to full program",
      "Basic hand-eye coordination",
    ],
    skills: [
      "Traditional Tanning",
      "Natural Dyeing",
      "Leather Cutting",
      "Babouche Making",
      "Quality Control",
    ],
  },
  {
    id: "a2",
    artisanId: "2",
    artisanName: "Fatima Benani",
    craft: "Zellige (Tile Mosaic)",
    duration: "8 months",
    level: "Intermediate",
    certification: "Master Zellige Artisan Certification",
    description:
      "Advanced training in geometric pattern design and precise tile-cutting techniques. Master the mathematics of Islamic geometric art.",
    requirements: [
      "Basic geometry knowledge",
      "Patience and precision",
      "Previous craft experience preferred",
    ],
    skills: [
      "Geometric Design",
      "Tile Cutting",
      "Pattern Assembly",
      "Color Theory",
      "Restoration Techniques",
    ],
  },
  {
    id: "a3",
    artisanId: "3",
    artisanName: "Ahmed Tazi",
    craft: "Wood Carving",
    duration: "12 months",
    level: "Beginner",
    certification: "Professional Wood Carver Certificate",
    description:
      "Full apprenticeship in traditional Moroccan wood carving, from basic techniques to complex mashrabiya screens.",
    requirements: [
      "Physical stamina",
      "Attention to detail",
      "Willingness to learn",
    ],
    skills: [
      "Tool Mastery",
      "Cedar & Thuya Working",
      "Mashrabiya Design",
      "Furniture Making",
      "Wood Finishing",
    ],
  },
  {
    id: "a4",
    artisanId: "4",
    artisanName: "Youssef Alami",
    craft: "Pottery & Ceramics",
    duration: "9 months",
    level: "Beginner",
    certification: "Ceramic Arts Professional",
    description:
      "Master the potter's wheel and traditional glazing techniques. Create functional and decorative ceramics using time-honored methods.",
    requirements: [
      "Creative mindset",
      "Physical coordination",
      "Commitment to practice",
    ],
    skills: [
      "Wheel Throwing",
      "Hand Building",
      "Glazing",
      "Kiln Operation",
      "Berber Pattern Design",
    ],
  },
  {
    id: "a5",
    artisanId: "5",
    artisanName: "Rachid Zahiri",
    craft: "Metal Working",
    duration: "10 months",
    level: "Intermediate",
    certification: "Master Metalsmith Certification",
    description:
      "Learn the art of traditional metalworking including copper hammering, engraving, and lantern construction.",
    requirements: [
      "Physical strength",
      "Previous metalworking basics",
      "Safety consciousness",
    ],
    skills: [
      "Copper Hammering",
      "Brass Working",
      "Engraving",
      "Lantern Making",
      "Metal Finishing",
    ],
  },
  {
    id: "a6",
    artisanId: "6",
    artisanName: "Nadia Khalil",
    craft: "Textile Weaving",
    duration: "7 months",
    level: "Beginner",
    certification: "Traditional Weaver Certificate",
    description:
      "Complete training in Berber weaving traditions, natural dyeing, and loom operation.",
    requirements: [
      "Patience",
      "Color sensitivity",
      "Cultural appreciation",
    ],
    skills: [
      "Loom Operation",
      "Pattern Reading",
      "Natural Dyeing",
      "Berber Symbolism",
      "Textile Design",
    ],
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    userName: "Sophie Laurent",
    userType: "Tourist",
    rating: 5,
    comment:
      "Hassan's leather workshop was the highlight of my trip to Fez! I learned so much about the traditional tanning process and made my own leather pouch. Absolutely authentic experience.",
    date: "2026-03-15",
    craft: "Leather Working",
  },
  {
    id: "r2",
    userName: "Karim Bennani",
    userType: "Apprentice",
    rating: 5,
    comment:
      "Three months into my apprenticeship with Fatima and I'm already creating complex zellige patterns. She's an incredible teacher who truly cares about preserving this art form.",
    date: "2026-03-10",
    craft: "Zellige",
  },
  {
    id: "r3",
    userName: "Marco Rossi",
    userType: "Tourist",
    rating: 5,
    comment:
      "Ahmed's wood carving workshop was magical. Four hours flew by as I learned to carve cedar wood. He's a true master with amazing stories to share.",
    date: "2026-03-08",
    craft: "Wood Carving",
  },
  {
    id: "r4",
    userName: "Amina El Idrissi",
    userType: "Apprentice",
    rating: 5,
    comment:
      "As a young woman learning pottery from Youssef, I've found not just a craft but a career path. The certification program is well-structured and the skills are marketable.",
    date: "2026-03-05",
    craft: "Pottery",
  },
  {
    id: "r5",
    userName: "James Wilson",
    userType: "Tourist",
    rating: 5,
    comment:
      "Making my own Moroccan lantern with Rachid was unforgettable. The attention to detail and traditional techniques were fascinating. Highly recommend!",
    date: "2026-03-01",
    craft: "Metal Working",
  },
  {
    id: "r6",
    userName: "Sara Mokhtar",
    userType: "Apprentice",
    rating: 5,
    comment:
      "Learning Berber weaving from Nadia has connected me to my heritage in ways I never imagined. She's passionate about passing this knowledge to the next generation.",
    date: "2026-02-28",
    craft: "Textile Weaving",
  },
];

export const impactStats = {
  artisansSupported: 52,
  youthTrained: 127,
  workshopsCompleted: 318,
  craftsPreserved: 12,
  revenueGenerated: 1250000,
  certificationsAwarded: 43,
};