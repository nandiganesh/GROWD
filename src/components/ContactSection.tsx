import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-secondary py-20 sm:py-28 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <p className="mb-4 text-sm uppercase tracking-widest text-accent">
              Let's Talk
            </p>
            <h2
              ref={headingRef}
              className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Ready to start your next project?
            </h2>
          </div>

          {/* Right Column */}
          <div ref={contentRef} className="flex flex-col justify-center gap-8 text-center md:text-left">
            <div>
              <p className="mb-2 text-sm uppercase tracking-widest text-muted-foreground">
                Email
              </p>
              <a
                href="mailto:hello@growd.agency"
                className="text-2xl font-display font-bold text-foreground transition-colors hover:text-accent md:text-3xl"
              >
                hello@growd.agency
              </a>
            </div>

            <div>
              <p className="mb-2 text-sm uppercase tracking-widest text-muted-foreground">
                Location
              </p>
              <p className="text-lg text-foreground md:text-xl">
                New York / London / Tokyo
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-2 md:justify-start">
              {['Instagram', 'LinkedIn', 'Twitter', 'Dribbble'].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {social}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
