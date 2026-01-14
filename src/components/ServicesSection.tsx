import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  title: string;
  description: string;
}

const services: Service[] = [
  { id: 1, title: 'Brand Strategy', description: "We define your brand's voice, positioning, and identity to stand out in the market." },
  { id: 2, title: 'Web Design', description: 'Crafting beautiful, intuitive interfaces that captivate users and drive engagement.' },
  { id: 3, title: 'Development', description: 'Building performant, scalable web applications with modern technologies.' },
  { id: 4, title: 'Digital Marketing', description: 'Strategic campaigns that amplify your reach and convert audiences into customers.' },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingLeftRef = useRef<HTMLSpanElement>(null);
  const headingRightRef = useRef<HTMLSpanElement>(null);
  const projectsListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading split animation
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

      // Services list reveal
      const serviceItems = projectsListRef.current?.children;
      if (serviceItems) {
        gsap.fromTo(
          serviceItems,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: projectsListRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Parallax on service items
      if (serviceItems) {
        Array.from(serviceItems).forEach((item, index) => {
          const speed = index % 2 === 0 ? 0.5 : 0.8;
          gsap.to(item, {
            y: -50 * speed,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-background py-32"
    >
      <div className="container mx-auto px-8 md:px-16">
        {/* Split Heading */}
        <div className="mb-24 flex items-center justify-center gap-4">
          <span
            ref={headingLeftRef}
            className="font-display text-6xl font-bold tracking-tighter text-foreground md:text-8xl lg:text-9xl"
          >
            Our
          </span>
          <span
            ref={headingRightRef}
            className="font-display text-6xl font-bold tracking-tighter text-accent md:text-8xl lg:text-9xl"
          >
            Services
          </span>
        </div>

        {/* Services List */}
        <div ref={projectsListRef} className="space-y-px">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="group relative border-t border-border py-8 md:py-12"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                {/* Service Number */}
                <span className="font-display text-sm text-muted-foreground">
                  {(index + 1).toString().padStart(2, '0')}
                </span>

                {/* Service Title */}
                <h3 className="flex-1 font-display text-3xl font-bold text-foreground transition-colors group-hover:text-accent md:text-5xl lg:text-6xl">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Contact Link */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 text-lg uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>Start a Project</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
