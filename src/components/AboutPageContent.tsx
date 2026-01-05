const processSteps = [
  {
    number: '01',
    title: 'Strategy',
    description: 'Mapping a comprehensive digital strategy informed by research.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Shaping your brand identity with expressive UI design.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Building reliable, performant products with clean code.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Orchestrating rollout, optimization, and support.',
  },
];

const techStack = [
  'React',
  'Node.js',
  'MongoDB',
  'Express',
  'Tailwind CSS',
  'TypeScript',
];

const values = [
  {
    title: 'Innovation First',
    description: 'We stay ahead of the curve, implementing the latest technologies and practices.',
  },
  {
    title: 'Client-Centric',
    description: 'Your success is our success. We collaborate closely at every step.',
  },
  {
    title: 'Quality Driven',
    description: 'Every project is crafted with precision, care, and measurable outcomes.',
  },
];

const AboutPageContent = () => (
  <section className="bg-background py-14 sm:py-20 lg:py-24">
    <div className="container mx-auto px-4 sm:px-8 md:px-16 space-y-16">
      {/* Hero */}
      <div className="text-center space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Meet GROWD
        </div>
        <div className="space-y-3">
          <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            The Voice of Digital Revolution
          </h1>
          <p className="text-lg text-muted-foreground">
            At GROWD, we craft experiences that inspire, engage, and convert. We believe every business deserves a powerful digital presence.
          </p>
        </div>
        <div className="rounded-3xl border border-border/60 bg-card/70 p-6 text-base text-muted-foreground">
          We’re not just building websites — we’re creating narratives that move audiences across every touchpoint.
        </div>
      </div>

      {/* Process */}
      <div className="space-y-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Our Process</p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.number} className="rounded-3xl border border-border/70 bg-card/60 p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-display text-accent">
                {step.number}
              </div>
              <h3 className="font-display text-xl text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Our Tech Stack</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech) => (
            <span key={tech} className="rounded-full border border-border px-6 py-2 text-sm font-semibold text-foreground">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Why Choose */}
      <div className="space-y-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Why Choose GROWD?</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-3xl border border-border/80 bg-card/60 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <h4 className="font-display text-xl text-foreground">{value.title}</h4>
              <p className="mt-3 text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutPageContent;
