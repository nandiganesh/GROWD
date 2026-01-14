import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import logo from '@/assets/favicon_image.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftWordRef = useRef<HTMLDivElement>(null);
  const rightWordRef = useRef<HTMLDivElement>(null);
  const centerImageRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Lock scroll during loading
    document.body.classList.add('scroll-locked');

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          document.body.classList.remove('scroll-locked');
          onComplete();
        }
      });

      // Counter animation
      const counterObj = { value: 0 };
      gsap.to(counterObj, {
        value: 100,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          setCounter(Math.round(counterObj.value));
        }
      });

      // Initial state
      gsap.set([leftWordRef.current, rightWordRef.current], {
        y: 100,
        opacity: 0
      });
      gsap.set(centerImageRef.current, {
        scale: 0,
        opacity: 0
      });

      // Animation sequence
      tl.to([leftWordRef.current, rightWordRef.current], {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        delay: 0.3
      })
      .to(centerImageRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.8
      }, '-=0.4')
      .to(centerImageRef.current, {
        width: '100vw',
        height: '100vh',
        duration: 1.2,
        ease: 'power4.inOut'
      }, '+=0.5')
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.3');

    }, containerRef);

    return () => {
      ctx.revert();
      document.body.classList.remove('scroll-locked');
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      {/* Counter */}
      <div
        ref={counterRef}
        className="absolute bottom-8 right-8 font-display text-8xl font-bold text-muted-foreground/20"
      >
        {counter.toString().padStart(3, '0')}
      </div>

      {/* Split Wordmark */}
      <div className="relative flex items-center justify-center gap-8">
        <div
          ref={leftWordRef}
          className="font-display text-6xl font-bold tracking-tighter text-foreground md:text-8xl lg:text-9xl"
        >
          GRO
        </div>

        {/* Center Image Container */}
        <div
          ref={centerImageRef}
          className="relative h-28 w-28 overflow-hidden bg-secondary md:h-40 md:w-40"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
          {/* <img
            src={logo}
            alt="GROWD emblem"
            className="relative z-10 h-full w-full object-cover"
          /> */}
        </div>

        <div
          ref={rightWordRef}
          className="font-display text-6xl font-bold tracking-tighter text-foreground md:text-8xl lg:text-9xl"
        >
        WD
        </div>
      </div>

      {/* Tagline */}
      <div className="absolute bottom-8 left-8">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Creative Agency
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
