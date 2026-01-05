import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: 'Web Design & Development',
    description: 'Custom websites built with cutting-edge technology to elevate your digital presence and performance.',
    bullets: ['Responsive Design', 'Interactive UI', 'Performance Tuning', 'Custom CMS Integration'],
  },
  {
    id: 2,
    title: 'E-Commerce Solutions',
    description: 'Powerful online stores that scale seamlessly and provide frictionless shopping experiences.',
    bullets: ['Payment Gateway Integration', 'Inventory Management', 'Product Catalog Optimization', 'Analytics & Reporting'],
  },
  {
    id: 3,
    title: 'Branding & UI Design',
    description: 'Signature visual identities and interfaces that captivate audiences and retain attention.',
    bullets: ['Logo & Brand Identity', 'Design Systems', 'Visual Guidelines', 'Brand Collateral'],
  },
  {
    id: 4,
    title: 'AI & Automation Tools',
    description: 'Intelligent chatbots, workflow automation, and insight platforms that proactively accelerate growth.',
    bullets: ['Chatbot Experiences', 'Process Automation', 'Predictive Dashboards', 'Data Pipelines'],
  },
];

const expertise = [
  {
    title: 'Mobile App Development',
    description: 'Native and hybrid apps engineered for performance, usability, and scale.',
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, SEM, and social media strategies that drive awareness and conversion.',
  },
  {
    title: 'Performance Optimization',
    description: 'Speed, stability, and efficiency improvements for mission-critical platforms.',
  },
  {
    title: 'Security & Maintenance',
    description: 'Ongoing monitoring, updates, and support to keep your systems resilient.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'We dive deep to understand your business, goals, and target audience.',
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description: 'Creative wireframes and high-fidelity designs that align with your vision.',
  },
  {
    number: '03',
    title: 'Development & Testing',
    description: 'Building robust solutions with clean code and rigorous quality assurance.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Deploying your product and providing ongoing maintenance and optimization.',
  },
];

const ServicesPageContent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingLeftRef = useRef<HTMLSpanElement>(null);
  const headingRightRef = useRef<HTMLSpanElement>(null);
  const projectsListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headingTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
      });

      headingTl
        .fromTo(
          headingLeftRef.current,
          { x: 0, opacity: 0.3 },
          { x: -50, opacity: 1 }
        )
        .fromTo(
          headingRightRef.current,
          { x: 0, opacity: 0.3 },
          { x: 50, opacity: 1 },
          0
        );

      const cards = projectsListRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: projectsListRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background py-20 sm:py-28 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        <h1 className="mb-10 text-center font-display text-4xl font-bold tracking-normal text-foreground sm:mb-16 sm:text-6xl md:text-7xl">
          <span ref={headingLeftRef} className="inline">Our</span><span ref={headingRightRef} className="inline text-accent">Services</span>
        </h1>
        <p className="mx-auto mb-16 max-w-3xl text-center text-base text-muted-foreground sm:text-lg">
          Comprehensive digital solutions engineered to transform your business and drive measurable results.
        </p>

        <div ref={projectsListRef} className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative flex h-full flex-col gap-4 rounded-3xl border border-border/80 bg-card/60 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur sm:p-8"
            >
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                <span className="h-px flex-1 bg-border" />
                Core Offering
                <span className="h-px flex-1 bg-border" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-base text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                {service.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-center gap-2 rounded-xl border border-transparent bg-background/70 px-4 py-2 text-foreground shadow-inner shadow-black/5"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {bullet}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Additional Expertise</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/70 bg-secondary/60 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur"
              >
                <h4 className="font-display text-xl font-semibold text-foreground">{item.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">How We Work</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-border/80 bg-card/60 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur"
              >
                <div className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                  <span className="text-2xl font-display text-foreground">{step.number}</span>
                  {step.title}
                </div>
                <p className="text-base text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 p-8 text-center text-background shadow-[0_30px_80px_rgba(0,0,0,0.2)] sm:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-background/80">Let’s Build Something Extraordinary</p>
          <h3 className="mt-4 font-display text-3xl font-bold leading-tight">
            Ready to transform your digital presence?
          </h3>
          <p className="mt-3 text-base text-background/80">
            Get in touch and let’s discuss how we can bring your next initiative to life.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-background px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-foreground transition hover:bg-background/90"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesPageContent;
