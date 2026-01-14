import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import revoxaMobileImg from '@/assets/revoxa_mobile.png.jpeg';
import atmasakshifoundationImg from '@/assets/atmasakshifoundation.png';
import kalaravaImg from '@/assets/kalarava.png';
import hotcoffeeImg from '@/assets/hotcoffee.png';

const works = [
  {
    number: '01',
    title: 'Revoxa - Launch Your Workflow Into Orbit',
    category: 'AI / Automation',
    description:
      'Supercharge productivity with AI-powered automation and integrations built for the next generation of teams. Revoxa helps you launch your workflow into orbit.',
    color: 'bg-accent',
    textColor: 'text-accent-foreground',
    size: 'large',
    image: revoxaMobileImg,
    website: 'https://revoxa2-0.vercel.app/',
  },
  {
    number: '02',
    title: 'KALARAVA - PU 2nd Year Fest',
    category: 'Event / Education',
    description:
      'KALARAVA is an annual PU 2nd Year Science & Commerce Fest, celebrating student achievement and talent through vibrant events and competitions.',
    color: 'bg-secondary',
    textColor: 'text-secondary-foreground',
    size: 'medium',
    image: kalaravaImg,
    website: 'https://www.kalarava.xyz/',
  },
  {
    number: '03',
    title: 'Atmasakshi Foundation',
    category: 'Nonprofit / Wellness',
    description:
      'Transforming lives through meditation, education, and empowerment. Atmasakshi Foundation is dedicated to uplifting communities and fostering holistic well-being.',
    color: 'bg-foreground',
    textColor: 'text-background',
    size: 'small',
    image: atmasakshifoundationImg,
    website: 'https://www.atmasakshifoundation.org/',
  },
  {
    number: '04',
    title: 'Hot Coffee',
    category: 'Demo / Coffee Shop',
    description: 'A modern coffee shop website demo. Discover the best brews and cozy spaces.',
    color: 'bg-secondary',
    textColor: 'text-secondary-foreground',
    size: 'small',
    image: hotcoffeeImg,
    website: 'https://hotcoffee-five.vercel.app/',
  },
];

const ProjectsScrollReveal = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        headingRef.current?.children || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Bento tiles reveal
      const tiles = gridRef.current?.querySelectorAll('.bento-tile');
      if (tiles) {
        gsap.fromTo(
          tiles,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
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
      id="work"
      className="relative bg-background py-20 sm:py-28 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        {/* Heading */}
        <div ref={headingRef} className="mb-12 max-w-3xl text-center md:mb-16 md:text-left">
          <p className="mb-4 text-sm uppercase tracking-widest text-accent">
            Selected Work
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Projects that drive growth
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="grid gap-6 md:grid-cols-3 md:auto-rows-[320px]"
        >
          {/* Large Tile */}
          <Link
            to="/work"
            className="bento-tile group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl bg-accent p-8 transition-transform duration-500 hover:scale-[0.98] md:row-span-2 md:p-10"
          >
            <img
              src={works[0].image}
              alt={works[0].title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" aria-hidden />
            <span className="absolute left-8 top-8 z-10 font-display text-6xl font-bold text-white/30 md:left-10 md:top-10 md:text-8xl">
              {works[0].number}
            </span>
            <div className="relative z-10">
              <h3 className="mb-2 font-display text-3xl font-bold text-white md:text-4xl">
                {works[0].title}
              </h3>
              <p className="mb-4 text-sm uppercase tracking-widest text-white/70">
                {works[0].category}
              </p>
              <p className="max-w-sm text-sm leading-relaxed text-white/80">
                {works[0].description}
              </p>
            </div>
            <div className="absolute bottom-8 right-8 opacity-0 transition-all duration-300 group-hover:opacity-100 md:bottom-10 md:right-10">
              <svg
                className="h-8 w-8 text-white"
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
            </div>
          </Link>

          {/* Medium Tile */}
          <Link
            to="/work"
            className="bento-tile group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl bg-secondary p-8 transition-transform duration-500 hover:scale-[0.98] md:col-span-2 md:p-10"
          >
            <img
              src={works[1].image}
              alt={works[1].title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" aria-hidden />
            <span className="absolute left-8 top-8 z-10 font-display text-5xl font-bold text-white/30 md:left-10 md:top-10 md:text-6xl">
              {works[1].number}
            </span>
            <div className="relative z-10">
              <h3 className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">
                {works[1].title}
              </h3>
              <p className="mb-3 text-sm uppercase tracking-widest text-white/70">
                {works[1].category}
              </p>
              <p className="max-w-md text-sm leading-relaxed text-white/80">
                {works[1].description}
              </p>
            </div>
            <div className="absolute bottom-8 right-8 opacity-0 transition-all duration-300 group-hover:opacity-100 md:bottom-10 md:right-10">
              <svg
                className="h-6 w-6 text-white"
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
            </div>
          </Link>

          {/* Small Tiles */}
          <Link
            to="/work"
            className="bento-tile group relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-3xl bg-foreground p-8 transition-transform duration-500 hover:scale-[0.98] md:p-10"
          >
            <img
              src={works[2].image}
              alt={works[2].title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" aria-hidden />
            <span className="absolute left-8 top-6 z-10 font-display text-4xl font-bold text-white/30 md:left-10 md:top-8 md:text-5xl">
              {works[2].number}
            </span>
            <div className="relative z-10">
              <h3 className="mb-2 font-display text-xl font-bold text-white md:text-2xl">
                {works[2].title}
              </h3>
              <p className="text-xs uppercase tracking-widest text-white/70">
                {works[2].category}
              </p>
            </div>
            <div className="absolute bottom-6 right-6 opacity-0 transition-all duration-300 group-hover:opacity-100 md:bottom-8 md:right-8">
              <svg
                className="h-5 w-5 text-white"
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
            </div>
          </Link>

          <Link
            to="/work"
            className="bento-tile group relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-3xl bg-secondary p-8 transition-transform duration-500 hover:scale-[0.98] md:p-10"
          >
            <img
              src={works[3].image}
              alt={works[3].title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" aria-hidden />
            <span className="absolute left-8 top-6 z-10 font-display text-4xl font-bold text-white/30 md:left-10 md:top-8 md:text-5xl">
              {works[3].number}
            </span>
            <div className="relative z-10">
              <h3 className="mb-2 font-display text-xl font-bold text-white md:text-2xl">
                {works[3].title}
              </h3>
              <p className="text-xs uppercase tracking-widest text-white/70">
                {works[3].category}
              </p>
            </div>
            <div className="absolute bottom-6 right-6 opacity-0 transition-all duration-300 group-hover:opacity-100 md:bottom-8 md:right-8">
              <svg
                className="h-5 w-5 text-white"
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
            </div>
          </Link>
        </div>

        {/* View All Link */}
        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            to="/work"
            className="group inline-flex items-center gap-3 text-lg uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>View All Work</span>
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

export default ProjectsScrollReveal;
