export type TestimonialData = {
  name: string;
  role: string;
  company: string;
  photo?: string;
  blurb?: string;
  videoUrl?: string;
  // Optional structured format (unused for alumni list)
  challenge?: string;
  solution?: string;
  result?: string;
  rating?: number;
};

export const testimonials: TestimonialData[] = [
  { name: 'Milliecent Sang', role: 'Alumni of Zetech University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Spoke positively about mentorship and hands-on experience with SEO and campaigns.' },
  { name: 'Karen', role: "Alumni of Kiriri Women's University", company: 'Former employee at Context Experts Agencies Limited', blurb: 'Praised the supportive team culture and practical skills gained.' },
  { name: 'Mary Karaba', role: 'Alumni of Thika Institute of Business Studies', company: 'Former employee at Context Experts', blurb: 'Shared how collaboration and training improved her digital strategy skills.' },
  { name: 'Beatrice Kinyua', role: "Alumni of Kiriri Women's University", company: 'Former employee at Context Experts Agencies Limited', blurb: 'Appreciated growth opportunities and client exposure.' },
  { name: 'Dinah Ayitso', role: 'Alumni of Zetech University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Valued the high standards and measurable results culture.' },
  { name: 'Paul Karanja', role: 'Alumni of Zetech University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Highlighted strong mentorship from senior strategists.' },
  { name: 'Vivian Wanjiru', role: "Alumni of Kiriri Women's University", company: 'Former employee at Context Experts Agencies Limited', blurb: 'Gained confidence in campaign planning and reporting.' },
  { name: 'Cyrus Mwaura', role: 'Alumni of Jomo Kenyatta University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Praised technical depth in web and SEO projects.' },
  { name: 'Debra Wacheke', role: "Alumni of Kiriri Women's University", company: 'Former employee at Context Experts Agencies', blurb: 'Enjoyed creative collaboration and client communications.' },
  { name: "John Kamau", role: "Alumni of Murang'a University", company: 'Former employee at Context Experts Agencies Limited', blurb: 'Said the team environment accelerated his professional growth.' },
  { name: 'Purity Wambui', role: 'Alumni of Thika Institute of Business Studies', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Appreciated performance-driven processes and tools.' },
  { name: 'Claire Nkatha', role: 'Alumni of Jomo Kenyatta University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Learned effective keyword research and on-page optimization.' },
  { name: 'Maureen Mwangi', role: "Alumni of Kiriri Women's University", company: 'Former employee at Context Experts Agencies', blurb: 'Spoke highly of the company culture and leadership.' },
  { name: 'Joseph Kamau', role: 'Alumni of Zetech University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Grew in analytics and reporting for campaigns.' },
  { name: 'Victor Kamau', role: 'Alumni of Meru University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Appreciated the structured learning path.' },
  { name: 'Martin Mwangi', role: 'Alumni of Zetech University', company: 'Former employee at Context Experts', blurb: 'Valued real projects and client impact focus.' },
  { name: 'Violin Kinya', role: "Alumni of Kiriri Women's University", company: 'Former employee at Context Experts Agencies Limited', blurb: 'Shared positive teamwork experiences.' },
  { name: 'Angel Mercy', role: 'Alumni of Thika Institute of Business Studies', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Loved the supportive environment and growth.' },
  { name: 'Kiema Nathan', role: 'Alumni of Makeni University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Described transformative learning journey.', videoUrl: 'https://www.youtube.com/watch?v=7ln-j1eUuIc' },
  { name: 'Milliecent Paul', role: 'Alumni of Zetech University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Recommended the firm for career starters.', videoUrl: 'https://www.youtube.com/watch?v=Ni34jS16M6o' },
  { name: 'Anthony Momanyi', role: 'Alumni of Zetech University', company: 'Former employee at Content Expert', blurb: 'Shared solid foundations in content and SEO.', videoUrl: 'https://www.youtube.com/watch?v=z1v3cJfinYU&t=19s' },
  { name: 'John Karuri', role: 'Alumni of Zetech University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Emphasized leadership support and direction.', videoUrl: 'https://www.youtube.com/watch?v=ESk9Gca8UV0' },
  { name: 'Ziporrah Warui', role: 'Alumni of Kiriri University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Praised real-world exposure to campaigns.', videoUrl: 'https://www.youtube.com/watch?v=Yhno3vwdHig' },
  { name: 'Mary Wanjiku', role: "Alumni of Kiriri Women's University", company: 'Former employee at Context Experts Agencies', blurb: 'Thankful for mentorship and opportunities.', videoUrl: 'https://www.youtube.com/watch?v=EZ9h_zcxD9Y' },
  { name: 'Stellah Wanjiru', role: "Alumni of Kiriri Women's University", company: 'Former employee at Context Experts Agencies', blurb: 'Highlighted skills gained across channels.', videoUrl: 'https://www.youtube.com/watch?v=FmY1lA24LBo' },
  { name: 'Oketch Seth', role: 'Alumni of Zetech University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Talked about result-driven culture.', videoUrl: 'https://www.youtube.com/watch?v=uJllN1Nb8Gw' },
  { name: 'Stephen Kyalo', role: 'Alumni of Meru University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Learned to connect strategy to impact.' },
  { name: 'Victoria Muasya', role: 'Alumni of Zetech University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Valued continuous feedback and learning.' },
  { name: 'Loise Ouko', role: 'Alumni of Kiriri University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Enjoyed collaborative project delivery.' },
  { name: 'Japheth Ngugi', role: 'Alumni of Zetech University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Noted growth in analytics and SEO.' },
  { name: 'Kiprono Dickson', role: 'Alumni of Zetech University', company: 'Former employee at Context Experts Agencies', blurb: 'Praised structured onboarding and training.' },
  { name: 'Mutua Purity', role: 'Alumni of Kiriri University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Felt supported throughout projects.' },
  { name: 'Denis Kioko', role: 'Alumni of Zetech University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Learned SEO and campaign operations.' },
  { name: 'Kipchirchir Arap Rono', role: 'Alumni of Zetech University', company: 'Former employee at Context Experts', blurb: 'Spoke about practical, measurable work.' },
  { name: 'Francis Melita', role: 'Alumni of Mt Kenya University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Praised data-driven decision-making.' },
  { name: 'Emmanuel', role: 'Alumni of Zetech University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Gained confidence in delivery and reporting.' },
  { name: 'James Senteu', role: 'Alumni of Mt Kenya University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Commended leadership and clarity.' },
  { name: 'Bernard Okoth', role: 'Alumni of Zetech University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Enjoyed cross-functional collaboration.' },
  { name: 'Faith Mucheo', role: 'Alumni of Kiriri University', company: 'Former employee at Context Experts', blurb: 'Loved the mentorship and process.' },
  { name: 'Albert Thairu', role: 'Alumni of KCA University', company: 'Former employee at Context Experts', blurb: 'Shared how execution standards helped him.' },
  { name: 'Caleb Karugu', role: 'Alumni of Dedan Kimathi University', company: 'Former employee at Context Experts Agencies', blurb: 'Learned modern SEO and CRO practices.' },
  { name: 'Boniface Mureithi', role: 'Alumni of Meru University', company: 'Former employee at Context Experts Agencies', blurb: 'Appreciated real-world learning pace.' },
  { name: 'Kennedy Mutia', role: 'Alumni of Meru University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Praised structured workflows and reviews.' },
  { name: 'Lily Wanjiku Karanja', role: 'Alumni of Meru University', company: 'Former employee at Context Experts Agencies', blurb: 'Spoke positively about teamwork.' },
  { name: 'Mary Wambua', role: 'Alumni of Zetech University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Thankful for fast growth in skills.' },
  { name: 'Joy Gacheri', role: 'Alumni of Zetech University', company: 'Former employee at Context Experts Agencies Limited', blurb: 'Recognized strong culture and support.' },
];
