import Container from '@/components/layout/container';

export default function AboutPage() {
  const info = [
    { key: 'AIMS', text: 'We aim to develop and implement state-of-the-art methodologies for contextual analysis across various industries and domains. We strive to cultivate a diverse team of experts who bring unique perspectives and specialized knowledge to our contextual solutions.' },
    { key: 'VISION', text: 'We envision a nation where organizations harness the power of contextual intelligence to drive innovation. We aim to be the global leader in providing cutting-edge contextual analysis and strategic insights, empowering businesses to navigate complex market environments.' },
    { key: 'MISSION', text: 'At our company, our mission is to revolutionize how organizations understand and leverage context in their operations and strategy. We are committed to delivering unparalleled contextual analysis, consultancy services, and training programs for our clients.' },
  ];
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900">WHO WE ARE</h1>
            <p className="mt-4 text-neutral-700 whitespace-pre-line">
{`Here is the text under the "About Our Company" section from the web page:

Context Expert Agencies Ltd Marketing Company in Nairobi is a Design, branding and print agency producing professional marketing services in Kenya. We are passionate with design, brand and print. We provide custom-built branding services for all companies in Kenya and beyond borders. Our strategic marketing planning process provides a framework for ensuring that the work we deliver for you is as valuable as possible. We apply this knowledge to our creative solutions, in whatever form they take, and then execute them precisely, with the pursuit of perfection driving the success of all our work.

We’re one of Nairobi’s oldest and most recognized digital marketing firms, with over 5 years of expertise. We have an established track record of generating results as a full-service marketing firm with a lot of experience and technological expertise. Our ultimate goal is to ensure that your company generates high-quality leads by implementing a strategic and high-impact digital solution. Digital Marketing Campaigns, Branding, Responsive Website Design, Mobile Apps Design, E-commerce Website Design, Attribution Model based Website Performance Optimization, PPC, SEO, Google Display Ads, Remarketing Campaigns, Social Media Campaigns, B2B & B2C Integrated Lead Generation Campaigns, Website Hosting and much more.`}
            </p>
            <a href="/contact" className="mt-6 inline-block rounded-lg bg-[#004AAD] px-4 py-2 text-white shadow hover:bg-[#003a84]">Talk to us</a>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 h-80 md:h-[420px]">
            <img src="/images/services/about-company.png" alt="About our company" className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 items-stretch">
          {info.map((i) => (
            <div key={i.key} className="group rounded-2xl border border-neutral-200 bg-white p-8 md:p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-lg h-full">
              <div className="h-12 w-12 rounded-lg bg-[#004AAD]/10 text-[#004AAD] grid place-items-center mb-4 transition group-hover:bg-[#004AAD] group-hover:text-white">★</div>
              <h2 className="text-2xl font-bold text-neutral-900">{i.key}</h2>
              <p className="mt-3 text-neutral-700 text-base font-medium leading-relaxed">{i.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
