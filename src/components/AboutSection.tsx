import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '12', label: 'Years Experience' },
  { value: '40+', label: 'Global Clients' },
  { value: '98%', label: 'Client Retention' },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
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

      // Text reveal
      gsap.fromTo(
        textRef.current?.children || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats reveal
      gsap.fromTo(
        statsRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
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
      id="about"
      className="relative bg-secondary py-20 sm:py-28 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Column */}
          <div>
            <p className="mb-6 text-sm uppercase tracking-widest text-accent">
              About Us
            </p>
            <h2
              ref={headingRef}
              className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              We believe in the power of thoughtful design
            </h2>
          </div>

          {/* Right Column */}
          <div ref={textRef} className="space-y-6 pt-2 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              GROWD has grown from a small design studio into
              a full-service creative agency. We partner with ambitious brands
              to create meaningful digital experiences that connect with
              audiences and drive measurable results.
            </p>
            <p>
              Our multidisciplinary team combines strategic thinking with
              creative excellence, bringing together brand strategists,
              designers, developers, and storytellers who share a passion for
              craft and innovation.
            </p>
          </div>
        </div>

        {/* Stats */}
        {/* <div
          ref={statsRef}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-12 sm:mt-20 sm:pt-16 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="mb-2 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                {stat.value}
              </div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
