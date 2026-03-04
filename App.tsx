
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Vision from './components/Vision';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import PasswordModal from './components/PasswordModal';
import { DEFAULT_IMAGES } from './constants';

type Page = 'home' | 'privacidade';

const pathToPage = (pathname: string): Page => {
  if (pathname === '/privacidade') return 'privacidade';
  return 'home';
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    () => sessionStorage.getItem('cabeceira_auth') === 'true'
  );
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [images] = useState<Record<string, string>>(DEFAULT_IMAGES);
  const [currentPage, setCurrentPage] = useState<Page>(() => pathToPage(window.location.pathname));

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Sync URL → state when user navigates with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(pathToPage(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const navigateTo = (page: Page | string) => {
    const newPath = page === 'privacidade' ? '/privacidade' : '/';
    window.history.pushState({}, '', newPath);
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = () => navigateTo('home');

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('cabeceira_auth', 'true');
  };

  if (!isAuthenticated) {
    return <PasswordModal onSuccess={handleAuthSuccess} />;
  }

  if (currentPage === 'privacidade') {
    return (
      <PrivacyPolicyPage
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        images={images}
        onNavigateHome={navigateHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} images={images} />
      <main>
        <About id="quem-somos" images={images} />
        <Services id="nossos-servicos" images={images} />
        <Vision images={images} />
        <Testimonials images={images} />
        <CTA id="contato" images={images} />
      </main>
      <Footer images={images} onNavigate={navigateTo} />
      <ScrollToTop />
    </div>
  );
};

export default App;
