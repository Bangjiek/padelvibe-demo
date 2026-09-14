export const siteConfig = {
  brand: {
    name: 'Padelvibe Indonesia',
    tagline: 'Your Game. Your Vibe.',
    description:
      'Premium padel club in Tangerang. Play padel, meet your community, and find your vibe.',
    location: 'Tangerang, Indonesia',
    positioning: 'Premium Sports & Lifestyle Experience',
  },
  contact: {
    address:
      'Jl. Raya Legok - Karawaci, Desa Carang Pulang KM 6, RT 05 RW 06, Medang, Kecamatan Pagedangan, Kabupaten Tangerang, Banten 15334',
    addressShort: 'Pagedangan, Tangerang, Banten',
    phone: '0856-9392-1613',
    phoneIntl: '6285693921613',
    whatsapp: '6285693921613',
    instagram: '@padelvibe.id',
    instagramUrl: 'https://instagram.com/padelvibe.id',
    email: 'hello@padelvibe.id',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Padelvibe+Indonesia+Tangerang',
    mapsEmbed:
      'https://www.google.com/maps?q=Pagedangan%2C%20Tangerang%2C%20Banten&output=embed',
  },
  operatingHours: [
    { day: 'Monday — Friday', hours: '08:00 — 23:00' },
    { day: 'Saturday — Sunday', hours: '07:00 — 23:00' },
  ],
  booking: {
    whatsappNumber: '6285693921613',
    bookingUrl: '',
    note: 'Booking is directed to WhatsApp. Connect a booking system URL when ready.',
  },
  social: [
    { label: 'Instagram', url: 'https://instagram.com/padelvibe.id' },
  ],
  nav: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Courts & Facilities', path: '/courts' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Community', path: '/community' },
    { label: 'Contact', path: '/contact' },
  ],
};

export const stats = [
  { label: 'Courts', value: '[X]', note: 'Premium glass courts' },
  { label: 'Players', value: '[X]', note: 'Active members' },
  { label: 'Community Events', value: '[X]', note: 'Monthly events' },
  { label: 'Operating Hours', value: '16+', note: 'Hours daily' },
];

export const benefits = [
  {
    icon: 'Trophy',
    title: 'Premium Courts',
    description:
      'Glass-walled, tournament-grade padel courts built to international standards.',
  },
  {
    icon: 'Sparkles',
    title: 'Great Atmosphere',
    description:
      'Modern clubhouse, dramatic lighting, and a vibe that makes every session feel like an event.',
  },
  {
    icon: 'Users',
    title: 'Welcoming Community',
    description:
      'From first-timers to seasoned players, everyone finds their place at Padelvibe.',
  },
  {
    icon: 'CalendarCheck',
    title: 'Easy Booking',
    description:
      'Reserve your court in seconds through WhatsApp or our booking system.',
  },
];

export const facilities = [
  {
    name: 'Padel Courts',
    description: 'Glass-walled premium courts with professional-grade surfaces and lighting.',
    image: 'https://images.pexels.com/photos/38155778/pexels-photo-38155778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'Available',
  },
  {
    name: 'Clubhouse & Reception',
    description: 'A modern reception area where your Padelvibe experience begins.',
    image: 'https://images.pexels.com/photos/30689705/pexels-photo-30689705.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'Available',
  },
  {
    name: 'Waiting Area',
    description: 'Comfortable lounge spaces to relax before and after your game.',
    image: 'https://images.pexels.com/photos/28450649/pexels-photo-28450649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'Available',
  },
  {
    name: 'Parking',
    description: 'Ample on-site parking for members and guests.',
    image: 'https://images.pexels.com/photos/37709375/pexels-photo-37709375.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'Available',
  },
  {
    name: 'Changing Room',
    description: 'Clean, private changing rooms with shower facilities.',
    image: 'https://images.pexels.com/photos/37709375/pexels-photo-37709375.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'Coming Soon',
  },
  {
    name: 'F&B / Cafe',
    description: 'Refreshments and light meals to fuel your game.',
    image: 'https://images.pexels.com/photos/28450649/pexels-photo-28450649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'Coming Soon',
  },
  {
    name: 'Equipment Rental',
    description: 'Padel rackets and balls available for rent at the reception.',
    image: 'https://images.pexels.com/photos/32896996/pexels-photo-32896996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'Coming Soon',
  },
];

export const courts = [
  {
    id: 'court-1',
    name: 'Court 1',
    type: 'Indoor Glass',
    surface: 'Premium Artificial Grass',
    image: 'https://images.pexels.com/photos/38155778/pexels-photo-38155778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Glass walls', 'Professional lighting', 'Panoramic view'],
  },
  {
    id: 'court-2',
    name: 'Court 2',
    type: 'Indoor Glass',
    surface: 'Premium Artificial Grass',
    image: 'https://images.pexels.com/photos/32474981/pexels-photo-32474981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Glass walls', 'Professional lighting', 'Panoramic view'],
  },
  {
    id: 'court-3',
    name: 'Court 3',
    type: 'Indoor Glass',
    surface: 'Premium Artificial Grass',
    image: 'https://images.pexels.com/photos/38155778/pexels-photo-38155778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Glass walls', 'Professional lighting', 'Panoramic view'],
  },
];

export const pricing = [
  {
    category: 'Weekday',
    icon: 'Calendar',
    rates: [
      { label: 'Off-Peak', duration: '90 min', price: '[PRICE]' },
      { label: 'Peak Hour', duration: '90 min', price: '[PRICE]' },
    ],
  },
  {
    category: 'Weekend',
    icon: 'CalendarDays',
    rates: [
      { label: 'Off-Peak', duration: '90 min', price: '[PRICE]' },
      { label: 'Peak Hour', duration: '90 min', price: '[PRICE]' },
    ],
  },
  {
    category: 'Membership',
    icon: 'Crown',
    rates: [
      { label: 'Monthly', duration: 'recurring', price: '[PRICE]' },
      { label: 'Annual', duration: 'recurring', price: '[PRICE]' },
    ],
  },
  {
    category: 'Equipment Rental',
    icon: 'CircleDot',
    rates: [
      { label: 'Racket', duration: 'per session', price: '[PRICE]' },
      { label: 'Ball Set', duration: 'per session', price: '[PRICE]' },
    ],
  },
];

export const pricingNote =
  'Prices and availability may change at the venue\u2019s discretion. Contact us for the latest rates.';

export const communityPrograms = [
  {
    title: 'Open Play',
    description: 'Drop in, mix in, and play with whoever is on court. No partner needed.',
    icon: 'Play',
  },
  {
    title: 'Social Matches',
    description: 'Friendly competitive games organized by skill level.',
    icon: 'Swords',
  },
  {
    title: 'Beginner Sessions',
    description: 'New to padel? Learn the basics in a relaxed, supportive environment.',
    icon: 'GraduationCap',
  },
  {
    title: 'Community Events',
    description: 'Social gatherings, themed nights, and player meetups.',
    icon: 'PartyPopper',
  },
  {
    title: 'Tournaments',
    description: 'Compete in organized tournaments and climb the leaderboard.',
    icon: 'Trophy',
  },
];

export const events: EventItem[] = [];

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  tag: string;
}

export const galleryImages = [
  { src: 'https://images.pexels.com/photos/38155778/pexels-photo-38155778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Indoor padel courts with blue surfaces', span: 'lg' },
  { src: 'https://images.pexels.com/photos/36227708/pexels-photo-36227708.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Player hitting padel ball indoors', span: 'sm' },
  { src: 'https://images.pexels.com/photos/32896996/pexels-photo-32896996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Padel racket and balls on blue court', span: 'sm' },
  { src: 'https://images.pexels.com/photos/35248286/pexels-photo-35248286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Woman playing padel indoors', span: 'md' },
  { src: 'https://images.pexels.com/photos/38254515/pexels-photo-38254515.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Padel player hitting ball at night', span: 'sm' },
  { src: 'https://images.pexels.com/photos/32474981/pexels-photo-32474981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Spacious indoor padel court', span: 'md' },
  { src: 'https://images.pexels.com/photos/35248239/pexels-photo-35248239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Woman with padel racket under artificial lighting', span: 'sm' },
  { src: 'https://images.pexels.com/photos/13106810/pexels-photo-13106810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Group of people in a modern gym setting', span: 'lg' },
];

export const heroImage =
  'https://images.pexels.com/photos/38155778/pexels-photo-38155778.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920';

export const aboutImages = {
  main: 'https://images.pexels.com/photos/38155778/pexels-photo-38155778.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  secondary: 'https://images.pexels.com/photos/36227708/pexels-photo-36227708.jpeg?auto=compress&cs=tinysrgb&h=800&w=600',
  tertiary: 'https://images.pexels.com/photos/32896996/pexels-photo-32896996.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
};

export const communityImages = {
  main: 'https://images.pexels.com/photos/13106810/pexels-photo-13106810.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  secondary: 'https://images.pexels.com/photos/35248286/pexels-photo-35248286.jpeg?auto=compress&cs=tinysrgb&h=800&w=600',
  tertiary: 'https://images.pexels.com/photos/35248468/pexels-photo-35248468.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
};

export const faqs = [
  {
    question: 'Do I need to have a partner to play?',
    answer:
      'Not at all. Join our Open Play sessions and we will match you with players at your level.',
  },
  {
    question: 'Do I need my own equipment?',
    answer:
      'No. Rackets and balls are available for rent at the reception. Just bring yourself and comfortable sportswear.',
  },
  {
    question: 'I have never played padel before. Can I still join?',
    answer:
      'Absolutely. Our Beginner Sessions are designed for first-timers. Our community is welcoming to all levels.',
  },
  {
    question: 'How do I book a court?',
    answer:
      'Tap the BOOK A COURT button anywhere on the site. You will be guided through a quick booking flow and connected via WhatsApp to confirm.',
  },
  {
    question: 'What are your operating hours?',
    answer:
      'We are open Monday to Friday 08:00 — 23:00 and Saturday to Sunday 07:00 — 23:00. Hours may vary on holidays.',
  },
];

export function buildWhatsAppLink(message: string): string {
  const num = siteConfig.booking.whatsappNumber;
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}
