import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingScreen from '@/components/LoadingScreen';
import HamburgerMenu from '@/components/HamburgerMenu';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  children: ReactNode;
  showLoading?: boolean;
}

const PageLayout = ({ children, showLoading = false }: PageLayoutProps) => {
  const [isLoading, setIsLoading] = useState(showLoading);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {showLoading && isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      <HamburgerMenu
        isOpen={menuOpen}
        onToggle={() => setMenuOpen(!menuOpen)}
      />

      <header className="fixed left-4 top-4 z-40 sm:left-6 sm:top-6">
        <Link
          to="/"
          className="font-display text-lg font-bold tracking-tighter text-foreground transition-colors hover:text-accent sm:text-xl"
        >
          GROWD
        </Link>
      </header>

      <main className="pt-12 sm:pt-16">{children}</main>

      <Footer />
    </>
  );
};

export default PageLayout;
