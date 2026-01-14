import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import logo from '@/assets/favicon_image.png';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

interface HamburgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const HamburgerMenu = ({ isOpen, onToggle }: HamburgerMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const lineTopRef = useRef<HTMLSpanElement>(null);
  const lineBottomRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      timelineRef.current = gsap.timeline({
        paused: true,
        defaults: { ease: 'power3.inOut' },
        onStart: () => setIsAnimating(true),
        onComplete: () => setIsAnimating(false),
        onReverseComplete: () => setIsAnimating(false),
      });

      // Menu reveal via clipPath
      timelineRef.current
        .set(menuRef.current, { visibility: 'visible' })
        .fromTo(
          menuRef.current,
          { clipPath: 'inset(0 0 100% 0)' },
          { clipPath: 'inset(0 0 0% 0)', duration: 0.8 }
        )
        // Hamburger morphs to X
        .to(
          lineTopRef.current,
          { rotation: 45, y: 4, duration: 0.4 },
          0.2
        )
        .to(
          lineBottomRef.current,
          { rotation: -45, y: -4, duration: 0.4 },
          0.2
        )
        // Navigation links stagger in
        .fromTo(
          linksRef.current?.children || [],
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
          0.4
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      if (isOpen) {
        timelineRef.current.play();
      } else {
        timelineRef.current.reverse();
      }
    }
  }, [isOpen]);

  const handleToggle = () => {
    if (!isAnimating) {
      onToggle();
    }
  };

  return (
    <>
      {/* Glass Navbar */}
      <nav className="fixed left-1/2 top-4 z-[60] flex w-[min(90vw,420px)] -translate-x-1/2 items-center justify-between rounded-full border border-black/10 bg-white/70 px-5 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-3xl">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="GROWD logo"
            className="h-8 w-8 rounded-full border border-black/5 bg-white object-cover shadow-inner shadow-white/70"
          />
          <span className="font-display text-base font-semibold tracking-tight text-zinc-900">
            GROWD
          </span>
        </Link>

        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-full border border-black/10 bg-white/60 text-zinc-900 transition-all hover:bg-white"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            ref={lineTopRef}
            className="block h-0.5 w-6 origin-center bg-zinc-900"
          />
          <span
            ref={lineBottomRef}
            className="block h-0.5 w-6 origin-center bg-zinc-900"
          />
        </button>
      </nav>

      {/* Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-50 invisible bg-background"
        style={{ clipPath: 'inset(0 0 100% 0)' }}
      >
        <div className="flex h-full flex-col justify-between bg-white px-8 py-24 text-zinc-900 md:px-16 lg:px-24">
          {/* Navigation Links */}
          <nav ref={linksRef} className="mt-12 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={handleToggle}
                className="group relative block text-left"
              >
                <span className="font-display text-4xl font-bold text-zinc-900 transition-colors group-hover:text-accent md:text-6xl lg:text-7xl">
                  {link.label}
                </span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-zinc-900 transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Footer Info */}
          <div className="flex flex-col gap-8 border-t border-zinc-200 pt-8 text-zinc-700 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                Get in touch
              </p>
              <a
                href="mailto:hello@growd.agency"
                className="text-lg text-zinc-900 transition-colors hover:text-accent"
              >
                hello@growd.agency
              </a>
            </div>
            <div className="flex gap-6">
              {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
