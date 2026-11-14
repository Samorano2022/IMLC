export const CONTACT_EMAIL = 'mivmandate2010@gmail.com';
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Moments', href: '#moments' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Programme', href: '#programme' },
  { label: 'Shop', href: '#resources' },
];

export interface GalleryImage {
  src: string;
  alt: string;
}

const UNSPLASH =
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=85';

export const GALLERY_ROWS: GalleryImage[][] = [
  [
    { src: 'assets/daddyy.jpg', alt: 'Live worship moment' },
    { src: 'assets/philip.jpg', alt: 'Conference audience' },
    { src: 'assets/guitar-ministration.jpg', alt: 'Speaker on stage' },
    { src: 'assets/prayer.jpg', alt: 'People at an event' },
    { src: 'assets/minsters.jpg', alt: 'People at an event' },
    { src: 'assets/sunday-ogwuche.jpg', alt: 'People at an event' },
    { src: 'assets/auditorium-backview.jpg', alt: 'People at an event' },
    { src: 'assets/newOne.jpg', alt: 'People at an event' },
  ],
  [
    { src: 'assets/kingsley.jpg', alt: 'Live worship moment' },
    { src: 'assets/newTwo.jpg', alt: 'People at an event' },
    { src: 'assets/newThree.jpg', alt: 'Speaker on stage' },
    { src: 'assets/newFour.jpg', alt: 'People at an event' },
    { src: 'assets/newFive.jpg', alt: 'People at an event' },
    { src: 'assets/newSix.jpg', alt: 'People at an event' },
    { src: 'assets/auditorium-backview.jpg', alt: 'People at an event' },
    { src: 'assets/auditorium-backview.jpg', alt: 'People at an event' },
  ],
];

export interface Speaker {
  name: string;
  role: string;
  image: string;
  /** Label used in the "details coming soon" toast. */
  tag: string;
  /** When set, the button opens the full profile dialog. */
  profile?: 'samson';
}

export const SPEAKERS: Speaker[] = [
  {
    name: 'Rev. Samson Ajetomobi',
    role: 'President · Men of Issachar Vision Inc.',
    image: 'assets/Rev. Samson Ajetomobi.png',
    tag: 'Minister & Teacher',
    profile: 'samson',
  },
  {
    name: 'Rev. Mrs. Stella Ajetomobi',
    role: 'Vice President, Men of Issachar Vision Inc.',
    image: 'assets/stella.png',
    tag: 'Minister & Teacher',
  },
  {
    name: 'Rev. Steve Mensah',
    role: 'General Overseer, Charismatic Evangelistic Ministry (CEM)',
    image: 'assets/steve.png',
    tag: 'Pastor & Author',
  },
  {
    name: 'Dr. David Ogbueli',
    role: 'Senior Pastor, Dominion City Worldwide',
    image: 'assets/ogbueli.png',
    tag: 'Guest Minister',
  },
  {
    name: 'Pastor Poju Oyemade',
    role: 'Founder and Senior Pastor, The Covenant Nation',
    image: 'assets/poju.png',
    tag: 'Pastor & Mentor',
  },
  { name: 'Guess', role: 'Guess', image: 'assets/placeholder.avif', tag: 'Minister & Coach' },
  { name: 'Guess', role: 'Guess', image: 'assets/placeholder.avif', tag: 'Leadership Voice' },
  { name: 'Guess', role: 'Guess', image: 'assets/placeholder.avif', tag: 'Guest Speaker' },
];

export interface WhyItem {
  number: string;
  title: string;
  body: string;
}

export const WHY_ITEMS: WhyItem[] = [
  {
    number: '01',
    title: 'Meaningful Global Connections',
    body: 'Build relationships that extend beyond the conference. Connect with ministers, entrepreneurs, policymakers, industry leaders, and emerging visionaries from different backgrounds. Exchange perspectives, explore opportunities, and establish relationships that create lasting value.',
  },
  {
    number: '02',
    title: 'Insights from Distinguished Leaders',
    body: 'Learn from respected voices with proven experience in ministry, governance, business, and leadership. Gain practical wisdom, fresh perspectives, and biblical insights to navigate complex challenges and lead with greater clarity, conviction, and excellence.',
  },
  {
    number: '03',
    title: 'Transformative Spiritual Encounters',
    body: "Experience powerful moments of worship, prayer, and life-changing biblical teachings. Be refreshed in God's presence, strengthened in your faith, and inspired to walk more fully in your divine assignment.",
  },
];

export interface ShopItem {
  name: string;
  price: string;
  image: string;
}

export const SHOP_ITEMS: ShopItem[] = [
  { name: 'Revival Polo', price: 'NGN 13,000.00', image: 'assets/Product mockup.png' },
  { name: 'Revival baseball shirt', price: 'NGN 16,000.00', image: 'assets/Product mockupII.png' },
  { name: 'Revival T-shirt', price: 'NGN 13,000.00', image: 'assets/ItemOne.png' },
  // NOTE: the original markup showed "President · Men of Issachar Vision Inc." here
  // (a copy-paste leftover). Replace with the real price.
  { name: 'Revival hoodie', price: 'Price to be announced', image: 'assets/itemTwo.jpeg' },
  { name: 'Revival hoodie', price: 'NGN 20,000.00', image: 'assets/itemThree.jpeg' },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'Who is the conference for?',
    answer:
      'Ministers, church leaders, ministry teams and anyone seeking to grow in faith and leadership.',
  },
  {
    question: 'How do I register?',
    answer: 'Use the registration button on this page and complete the short registration form.',
  },
  {
    question: 'Will there be accommodation information?',
    answer: 'Venue and accommodation details will be shared with registered attendees.',
  },
  {
    question: 'Can I attend with my team?',
    answer: 'Absolutely. We encourage you to invite your ministry team and fellow leaders.',
  },
  {
    question: 'How can I get more information?',
    answer: `Send a message to ${CONTACT_EMAIL} or call +234 808 085 4818 and our team will get back to you.`,
  },
];

export const SAMSON_PROFILE = {
  photo: 'assets/rev-samson-ajetomobi.png',
  name: 'Rev. Samson Ajetomobi',
  title: 'President',
  org: 'Men of Issachar Vision Inc.',
  bio: 'Rev. Samson Ajetomobi is the President of Men of Issachar Vision Inc., the ministry behind the International Ministers/Leadership Conference. He and Rev. Mrs Stella Ajetomobi host this interdenominational gathering, bringing Christian leaders together for kingdom-minded leadership.',
};
