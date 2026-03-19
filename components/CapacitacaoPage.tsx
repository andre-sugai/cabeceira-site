import React from 'react';
import CapacitacaoHero from './capacitacao/CapacitacaoHero';
import CapacitacaoSchedule from './capacitacao/CapacitacaoSchedule';
import CapacitacaoLocations from './capacitacao/CapacitacaoLocations';
import CapacitacaoTips from './capacitacao/CapacitacaoTips';
import BemViverFooter from './bemviver/BemViverFooter';
import ScrollToTop from './ScrollToTop';

interface CapacitacaoPageProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
  images: Record<string, string>;
  onNavigateHome: () => void;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Programação', href: '#programacao' },
  { label: 'Locais', href: '#locais' },
  { label: 'Informações Práticas', href: '#dicas' },
];

const CapacitacaoPage: React.FC<CapacitacaoPageProps> = ({
  toggleDarkMode,
  isDarkMode,
  images,
  onNavigateHome,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300 flex flex-col">

      {/* Custom standalone header */}
      <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={onNavigateHome}
            >
              <img alt="Cabeceira Logo" className="h-10 w-auto rounded-lg" src={images.LOGO} />
              <span className="text-xl font-extrabold tracking-tight text-primary dark:text-accent">Cabeceira</span>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary dark:hover:text-accent font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? (
                  <span className="material-icons-round text-accent">light_mode</span>
                ) : (
                  <span className="material-icons-round">dark_mode</span>
                )}
              </button>
            </div>

            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? (
                  <span className="material-icons-round text-accent">light_mode</span>
                ) : (
                  <span className="material-icons-round">dark_mode</span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle menu"
              >
                <span className="material-icons-round">{isMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-lg font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1">
        <CapacitacaoHero />
        <CapacitacaoSchedule />
        <CapacitacaoLocations />
        <CapacitacaoTips />
      </main>

      <BemViverFooter images={images} onNavigate={() => {}} />
      <ScrollToTop />
    </div>
  );
};

export default CapacitacaoPage;

