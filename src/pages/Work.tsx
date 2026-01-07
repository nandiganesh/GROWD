import PageLayout from '@/components/PageLayout';
import ContactSection from '@/components/ContactSection';
import { PlaceCard } from '@/components/ui/card-22';
import atmasakshifoundationImg from '@/assets/atmasakshifoundation.png';
import kalaravaImg from '@/assets/kalarava.png';
import revoxaImg from '@/assets/revoxa.png';
import hotcoffeeImg from '@/assets/hotcoffee.png';
import obsidianCoImg from '@/assets/Obsidian&Co.png';

const places = [
  {
    images: [
      atmasakshifoundationImg,
      'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1600&q=80', // Education
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80', // Empowerment
    ],
    tags: ['Nonprofit', 'Wellness'],
    rating: 5,
    title: 'Atmasakshi Foundation',
    dateRange: '2025',
    hostType: 'NGO',
    isTopRated: true,
    description:
      'Transforming lives through meditation, education, and empowerment. Atmasakshi Foundation is dedicated to uplifting communities and fostering holistic well-being.',
    pricePerNight: 1000000,
    website: 'https://www.atmasakshifoundation.org/',
  },
  {
    images: [
      kalaravaImg,
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1600&q=80', // Fest
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1600&q=80', // Students
    ],
    tags: ['Event', 'Education'],
    rating: 4.9,
    title: 'KALARAVA - PU 2nd Year Fest',
    dateRange: '2025',
    hostType: 'Science & Commerce',
    isTopRated: true,
    description:
      'KALARAVA is an annual PU 2nd Year Science & Commerce Fest, celebrating student achievement and talent through vibrant events and competitions.',
    pricePerNight: 900000,
    website: 'https://www.kalarava.xyz/',
  },
  {
    images: [
      revoxaImg,
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80', // Workflow
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1600&q=80', // Team
    ],
    tags: ['AI', 'Automation'],
    rating: 5,
    title: 'Revoxa - Launch Your Workflow Into Orbit',
    dateRange: '2025',
    hostType: 'Productivity SaaS',
    isTopRated: true,
    description:
      'Supercharge productivity with AI-powered automation and integrations built for the next generation of teams. Revoxa helps you launch your workflow into orbit.',
    pricePerNight: 1250000,
    website: 'https://revoxa2-0.vercel.app/',
  },
  {
    images: [hotcoffeeImg],
    tags: ['Demo'],
    rating: 4.5,
    title: 'Hot Coffee',
    dateRange: '2026',
    hostType: 'Demo',
    isTopRated: false,
    description: 'A modern coffee shop website demo. Discover the best brews and cozy spaces.',
    pricePerNight: 0,
    website: 'https://hotcoffee-five.vercel.app/',
    showDemoLabel: true,
  },
  {
    images: [obsidianCoImg],
    tags: ['Demo'],
    rating: 4.7,
    title: 'Obsidian & Co',
    dateRange: '2026',
    hostType: 'Demo',
    isTopRated: false,
    description: 'A stylish demo site for Obsidian & Co. Explore the brand and its digital presence.',
    pricePerNight: 0,
    website: 'https://obsidian-co.vercel.app/',
    showDemoLabel: true,
  },
];

const Work = () => (
  <PageLayout>
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        <div className="mb-12 max-w-3xl space-y-4 text-center md:mb-16 md:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Selected Work
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Hospitality stories built for conversion.
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">
            We choreograph every touchpoint—identity, spatial moments, and digital follow-through—to turn
            curious guests into devoted fans.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {places.map((place) => (
            <PlaceCard key={place.title} {...place} />
          ))}
        </div>
      </div>
    </section>
    <ContactSection />
  </PageLayout>
);

export default Work;
