import React from 'react';
import PageLayout from '@/components/PageLayout';
import ContactSection from '@/components/ContactSection';
import { Button } from '@/components/ui/button';

const Contact = () => (
  <PageLayout>

    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        <div className="mb-10 max-w-2xl space-y-4 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Project Inquiry
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Tell us about your business.
          </h2>
          <p className="text-base text-muted-foreground">
            Share a few details about your brand, timelines, and goals. Our team will follow up within two business days.
          </p>
        </div>

        <form
          className="grid gap-6 md:grid-cols-2"
          onSubmit={(event) => event.preventDefault()}
        >
          <FormField label="Full Name">
            <input type="text" name="name" placeholder="Jordan Patel" required />
          </FormField>
          <FormField label="Company / Brand">
            <input type="text" name="company" placeholder="Luminary" required />
          </FormField>
          <FormField label="Work Email">
            <input type="email" name="email" placeholder="you@company.com" required />
          </FormField>
          <FormField label="Phone Number">
            <input type="tel" name="phone" placeholder="+91 98765 43210" required />
          </FormField>
          
          <FormField label="Estimated Budget">
            <select name="budget" required>
              <option value="">Select a range</option>
              <option value="25-50k">$25k – $50k</option>
              <option value="50-100k">$50k – $100k</option>
              <option value="100-250k">$100k – $250k</option>
              <option value="250k+">$250k+</option>
            </select>
          </FormField>
          <FormField label="Ideal Launch Timing">
            <select name="timeline">
              <option value="">Select timing</option>
              <option value="1-2m">1 – 2 months</option>
              <option value="3-4m">3 – 4 months</option>
              <option value="5-6m">5 – 6 months</option>
              <option value="6m+">6+ months</option>
            </select>
          </FormField>
          <FormField label="Website / Product URL (Optional)">
            <input type="url" name="website" placeholder="https://yourdomain.com" />
          </FormField>
          <FormField label="Project Overview (Optional)" className="md:col-span-2">
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about the challenge, audience, success metrics…"
              required
            />
          </FormField>
          <div className="flex flex-col items-start gap-3 md:col-span-2 md:flex-row md:items-center md:gap-4">
            <Button type="submit" className="w-full px-8 md:w-auto">
              Submit details
            </Button>
            <p className="text-sm text-muted-foreground">
              We typically reply within 48 hours.
            </p>
          </div>
        </form>
      </div>
    </section>
<ContactSection />
  </PageLayout>
);

const FormField = ({
  label,
  children,
  className = '',
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <label className={`flex flex-col gap-2 ${className}`}>
    <span className="text-sm font-semibold text-foreground">{label}</span>
    {React.cloneElement(children as React.ReactElement, {
      className:
        'w-full rounded-xl border border-border bg-white/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20',
    })}
  </label>
);

export default Contact;
