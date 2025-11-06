export type TestimonialData = {
  name: string;
  role: string;
  company: string;
  photo?: string;
  challenge: string;
  solution: string;
  result: string;
  rating?: number;
};

export const testimonials: TestimonialData[] = [
  {
    name: 'Mary Karaba',
    role: 'Marketing Lead',
    company: 'Thika Institute of Business Studies',
    challenge:
      'Our website was buried on the third page of Google and inbound leads were inconsistent.',
    solution:
      'Context Expert Agencies executed a targeted SEO roadmap: technical fixes, content revamp, and high-quality local citations.',
    result:
      'Reached first-page rankings in 4 months and achieved a 45% increase in organic leads.',
    rating: 5,
  },
  {
    name: 'Jane Wanjiku',
    role: 'Marketing Director',
    company: 'Zetech University',
    challenge:
      'Paid campaigns were expensive and underperforming with low conversion rates.',
    solution:
      'They restructured our ad accounts, refined audience targeting, and optimized our landing pages for CRO.',
    result:
      'Cost per lead dropped by 38% and qualified inquiries increased significantly.',
    rating: 5,
  },
  {
    name: 'Peter Njoroge',
    role: 'CEO',
    company: 'Nairobi Retail Co.',
    challenge:
      'We needed a faster website and a stronger brand presence across social channels.',
    solution:
      'Delivered a responsive Next.js site and a social content plan aligned to seasonal offers.',
    result:
      'Site speed improved 2.5× and social engagement rose to 6% average.',
    rating: 5,
  },
  {
    name: 'Amina Odhiambo',
    role: 'Head of Growth',
    company: 'Mombasa Logistics Ltd.',
    challenge:
      'Lead quality was low and our organic traffic had plateaued.',
    solution:
      'Introduced content hubs, local SEO for coastal markets, and lead scoring with analytics.',
    result:
      'Qualified leads up 2.1× and organic sessions up 62% in one quarter.',
    rating: 5,
  },
  {
    name: 'Samuel K.',
    role: 'Owner',
    company: 'Juja Auto Spares',
    challenge:
      'We relied on walk-ins and word of mouth with no digital presence.',
    solution:
      'Launched a lightweight ecommerce catalog, GMB optimization, and boosted posts for promos.',
    result:
      'Phone inquiries tripled and weekend sales increased by 35%.',
    rating: 5,
  },
  {
    name: 'Dr. Nancy Wairimu',
    role: 'Director',
    company: 'Nairobi Health Clinic',
    challenge:
      'Appointment bookings were inconsistent and paid ads were expensive.',
    solution:
      'Built SEO landing pages per service, added online booking, and remarketing for warm audiences.',
    result:
      'New patient bookings grew 58% while CPL dropped by 29%.',
    rating: 5,
  },
  {
    name: 'Brian Ochieng',
    role: 'Founder',
    company: 'Eldoret Eats',
    challenge:
      'Low brand awareness in new estates and poor retention.',
    solution:
      'Geo-targeted social ads, influencer sampling, and lifecycle email flows.',
    result:
      'Monthly orders up 74% and repeat purchase rate improved to 33%.',
    rating: 5,
  },
  {
    name: 'Lucy Mwangi',
    role: 'Marketing Manager',
    company: 'Rift Valley Tours',
    challenge:
      'Seasonal demand swings made revenue unpredictable.',
    solution:
      'Content-led SEO for destination keywords and bundle offers via PPC.',
    result:
      'Off-peak bookings increased 41% and ROAS stabilized above 3×.',
    rating: 5,
  },
];
