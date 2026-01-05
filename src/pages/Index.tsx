import HeroSection from '@/components/HeroSection';
import ProjectsScrollReveal from '@/components/ProjectsScrollReveal';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import PageLayout from '@/components/PageLayout';

const Index = () => (
  <PageLayout showLoading>
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ProjectsScrollReveal />
    <ContactSection />
  </PageLayout>
);

export default Index;

