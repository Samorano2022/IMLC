export const CONTACT_EMAIL = 'mivmandate2010@gmail.com';
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  // { label: 'Moments', href: '#moments' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Programme', href: '#programme' },
  { label: 'Shop', href: '#resources' },
  { label: 'Testimonials', href: '#testimonials' },
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
    { src: 'assets/osibanjo.jpg', alt: 'People at an event' },
    { src: 'assets/philip.jpg', alt: 'Conference audience' },
    { src: 'assets/guitar-ministration.jpg', alt: 'Speaker on stage' },
    { src: 'assets/prayer.jpg', alt: 'People at an event' },
    { src: 'assets/minsters.jpg', alt: 'People at an event' },
    { src: 'assets/sunday-ogwuche.jpg', alt: 'People at an event' },

    { src: 'assets/newOne.jpg', alt: 'People at an event' },
  ],
  [
    { src: 'assets/kingsley.jpg', alt: 'Live worship moment' },
    { src: 'assets/olowoyo.jpg', alt: 'People at an event' },
    { src: 'assets/newThree.jpg', alt: 'Speaker on stage' },
    { src: 'assets/breakout.jpg', alt: 'People at an event' },
    { src: 'assets/newFive.jpg', alt: 'People at an event' },
    { src: 'assets/newSix.jpg', alt: 'People at an event' },
    { src: 'assets/cacpresident.jpg', alt: 'People at an event' },
    { src: 'assets/choir.jpg', alt: 'People at an event' },
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
    image: 'assets/ReV. Samson Ajetomobi.jpeg',
    tag: 'HOST',
    profile: 'samson',
  },
  {
    name: 'Rev. Mrs. Stella Ajetomobi',
    role: 'Vice President, Men of Issachar Vision Inc.',
    image: 'assets/ReV. Stella Ajetomobi.jpg',
    tag: 'CO-HOST',
  },
  {
    name: 'Rev. Steve Mensah',
    role: 'General Overseer, Charismatic Evangelistic Ministry (CEM)',
    image: 'assets/Rev. Steve Mensah.png',
    tag: 'Guest Minister',
  },
  {
    name: 'Dr. David Ogbueli',
    role: 'Senior Pastor, Dominion City Worldwide',
    image: 'assets/David Ogbueli.jpg',
    tag: 'Guest Minister',
  },
  {
    name: 'Pastor Poju Oyemade',
    role: 'Founder and Senior Pastor, The Covenant Nation',
    image: 'assets/Pst. Poju Oyemade.png',
    tag: 'Guest Minister',
  },
  {
    name: 'Rev. Sola Kolade',
    role: 'Founder and Senior Pastor of Vine Branch Ministries',
    image: 'assets/kolade.png',
    tag: 'Guest Minister',
  },
];

export const BREAKOUT_SPEAKERS: Speaker[] = [
  {
    name: 'Pastor Kingsley Okonkwo',
    role: "Lead Pastor · David's Christian Centre",
    image: 'assets/pstkingsley.jpg',
    tag: 'Relationship & Culture',
  },
  {
    name: 'Rev. Sunday Ogwuche',
    role: 'Apostolic Leader · Revival Missions',
    image: 'assets/sunday-ogwuche.jpg',
    tag: 'Missions & Prayer',
  },
  {
    name: 'Dr. David Ogbueli',
    role: 'Senior Pastor · Dominion City Worldwide',
    image: 'assets/David Ogbueli.jpg',
    tag: 'Kingdom Leadership',
  },
  {
    name: 'Rev. Steve Mensah',
    role: 'General Overseer · CEM Ghana',
    image: 'assets/Rev. Steve Mensah.png',
    tag: 'Evangelism & Missions',
  },
  {
    name: 'Pastor Poju Oyemade',
    role: 'Senior Pastor · The Covenant Nation',
    image: 'assets/Pst. Poju Oyemade.png',
    tag: 'Governance & Culture',
  },
  {
    name: 'Rev. Sola Kolade',
    role: 'Senior Minister · Kingdom Builders',
    image: 'assets/kolade.png',
    tag: 'Leadership Strategy',
  },
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
  { name: 'Revivals Polo T-Shirts', price: 'NGN 9,990.00', image: 'assets/Product mockup.png' },
  { name: 'Revivals Baseball Shirt', price: 'NGN 13,500.00', image: 'assets/Product mockupII.png' },
  { name: 'Revivals Washed/Acidic T-shirts', price: 'NGN 9,990.00', image: 'assets/ItemOne.png' },
  // NOTE: the original markup showed "President · Men of Issachar Vision Inc." here
  // (a copy-paste leftover). Replace with the real price.
  { name: 'Revivals Roundneck T-shirts', price: 'NGN 6,500.00', image: 'assets/itemTwo.jpeg' },
  { name: 'Revivals Hoodie', price: 'NGN 14,990.00', image: 'assets/itemThree.jpeg' },
  { name: 'Revivals Face Cap', price: 'NGN 3,500.00', image: 'assets/revivalcap.jpg' },
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
  photo: 'assets/ReV. Samson Ajetomobi.jpeg',
  name: 'Rev. Samson Ajetomobi',
  title: 'President',
  org: 'Men of Issachar Vision Inc.',
  bio: 'Rev. Samson Ajetomobi is the President of Men of Issachar Vision Inc., the ministry behind the International Ministers/Leadership Conference. He and Rev. Mrs Stella Ajetomobi host this interdenominational gathering, bringing Christian leaders together for kingdom-minded leadership.',
};

export interface Testimonial {
  id: string;
  badge: string;
  category: string;
  quote: string;
  body: string;
  author: string;
  role: string;
  organization: string;
  location: string;
  experience: string;
  image: string;
  imageAlt: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'stella',
    badge: '06.10.2025',
    category: 'Spiritual Renewal & Leadership',
    quote:
      'Having known and been affiliated with this ministry for a couple of years now, our ministry has experienced significant positive changes. The annual International Ministers and Leadership Conference has tutored us overtime on the rudiments of mission and ministry. our practice of all that has been learnt has yielded great results including huge significant increase numerically. We eagerly look forward to the forthcoming conference.',
    body: 'I have been in ministry for a couple of years now, our ministry has experienced significant positive changes. The annual International Ministers and Leadership Conference has tutored us overtime on the rudiments of mission and ministry. our practice of all that has been learnt has yielded great results including huge significant increase numerically. We eagerly look forward to the forthcoming conference.',
    author: 'Bishop Dr Momo Francis',
    role: 'Presiding Bishop',
    organization: 'Great Commission Ministry of Christ International',
    location: 'Liberia',
    experience: 'Convener & Intercessor',
    image: 'assets/momo.png',
    imageAlt: 'Bishop Dr Momo Francis',
  },
  {
    id: 'ogbueli',
    badge: '14.08.2025',
    category: 'Kingdom Governance & Strategy',
    quote:
      'International Ministers and Leadership Conference is one conference I always eagerly look forward to since 2010, as it has always been a time of hearing God clearly through teachings and personal encounters. An example out of many, was during the 2022 edition where I clearly heard the Lord say "start looking for an abandoned property. Prior to that time, we had prayed, searched and struggled to find a land for the church without any success. Today, we own a property in the heart of the community God sent us to and we are building a prestigious place of worship for Jesus. Amen.',
    body: 'The depth of biblical scholarship and practical ministry strategy shared at IMLC is rare. It equips pastors not just to gather crowds, but to build lasting disciples who carry real-world influence.',
    author: 'Pastor Paul Oni',
    role: 'Lead Pastor',
    organization: 'Christ Redemption Grace Ministry',
    location: 'Nigeria',
    experience: '12-Year Conference Partner',
    image: 'assets/pauloni.png',
    imageAlt: 'Pastor Paul Oni',
  },

  {
    id: 'kingsley',
    badge: '22.09.2025',
    category: 'Next-Gen Ministry & Culture',
    quote:
      "The International Ministers and Leadership Conference has always been a home away from home in the midst of God's servants across the globe, It has broadened my calling at a global scale and taught me to run the race with focus, determination and passion. The previous edition was an eye-opener to desire more of God, walk with Him and take more nations in Europe with the gospel of Christ. We look forward to another facet of impartation!",
    body: "The International Minister's and Leadership Conference has always been a home away from home in the midst of God's servants across the globe, It has broadened my calling at a global scale and taught me to run the race with focus, determination and passion. The previous edition was an eye-opener to desire more of God, walk with Him and take more nations in Europe with the gospel of Christ. We look forward to another facet of impartation!",
    author: 'Pastor Tony',
    role: 'Pastor',
    organization: 'Men of Issachar Vision Inc. EUROPE',
    location: 'Germany',
    experience: 'Conference Keynote & Mentor',
    image: 'assets/tony.png',
    imageAlt: 'Pastor Kingsley Okonkwo',
  },
];
