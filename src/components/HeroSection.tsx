import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroVideo from '@/assets/herosection_video.mp4';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 2.8, // Wait for loading screen
      });

      // Split headline into words for animation
      const words = headlineRef.current?.querySelectorAll('.word');

      tl.fromTo(
        words || [],
        { y: 120, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1 }
      )
        .fromTo(
          sublineRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          '-=0.2'
        );

      // Parallax on scroll
      gsap.to(headlineRef.current, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative -mt-24 flex min-h-[80vh] items-center justify-center overflow-hidden bg-background px-4 pt-28 sm:-mt-24 sm:min-h-screen sm:px-8 md:-mt-28 md:px-12 md:pt-32"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-background/30" />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />

      <div className="container relative z-10 mx-auto px-4 sm:px-8 md:px-16">
        <div className="max-w-5xl text-center md:text-left">
          {/* Headline */}
          <h1
            ref={headlineRef}
            className="mb-6 font-display text-3xl font-bold leading-tight tracking-tighter text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="word inline-block overflow-hidden">
              <span className="inline-block">We</span>
            </span>{' '}
            <span className="word inline-block overflow-hidden">
              <span className="inline-block">craft</span>
            </span>{' '}
            <span className="word inline-block overflow-hidden">
              <span className="inline-block text-accent">digital</span>
            </span>
            <br />
            <span className="word inline-block overflow-hidden">
              <span className="inline-block">experiences</span>
            </span>{' '}
            <span className="word inline-block overflow-hidden">
              <span className="inline-block">that</span>
            </span>
            <br />
            <span className="word inline-block overflow-hidden">
              <span className="inline-block text-accent">resonate</span>
            </span>
          </h1>

          {/* Subline */}
          <p
            ref={sublineRef}
            className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:mx-0"
          >
            GROWD is a creative agency specializing in brand strategy, digital
            design, and immersive web experiences that drive growth.
          </p>

          {/* CTA */}
          <div ref={ctaRef} className="flex flex-wrap justify-center gap-3 md:justify-start">
            <Link
              to="/work"
              className="group inline-flex items-center gap-3 bg-foreground px-6 py-3 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-accent"
            >
              <span>Explore Work</span>
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
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-border px-6 py-3 text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:bg-secondary"
            >
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        {/* <div className="flex flex-col items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <div className="relative h-16 w-px bg-border">
            <div className="absolute left-0 top-0 h-8 w-full animate-pulse bg-accent" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
