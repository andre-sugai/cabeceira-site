
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Vision from './components/Vision';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import BemViverPage from './components/BemViverPage';
import CapacitacaoPage from './components/CapacitacaoPage';
import PasswordModal from './components/PasswordModal';

import { DEFAULT_IMAGES } from './constants';

type Page = 'home' | 'privacidade' | 'bemviver' | 'capacitacao';

const pathToPage = (pathname: string): Page => {
  if (pathname === '/privacidade') return 'privacidade';
  if (pathname === '/bemviver') return 'bemviver';
  if (pathname === '/capacitacao') return 'capacitacao';
  return 'home';
};

const App: React.FC = () => {

  const [isBemViverAuthenticated, setIsBemViverAuthenticated] = useState<boolean>(
    () => sessionStorage.getItem('bemviver_auth') === 'true'
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
      // Ignore hash-only changes (anchor links) — let the browser scroll naturally
      if (window.location.hash) return;
      setCurrentPage(pathToPage(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const navigateTo = (page: Page | string) => {
    let newPath = '/';
    if (page === 'privacidade') newPath = '/privacidade';
    else if (page === 'bemviver') newPath = '/bemviver';
    else if (page === 'capacitacao') newPath = '/capacitacao';
    window.history.pushState({}, '', newPath);
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = () => navigateTo('home');



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

  if (currentPage === 'bemviver') {
    if (!isBemViverAuthenticated) {
      return (
        <PasswordModal
          onSuccess={() => {
            setIsBemViverAuthenticated(true);
            sessionStorage.setItem('bemviver_auth', 'true');
          }}
        />
      );
    }
    return (
      <BemViverPage
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        images={images}
        onNavigateHome={navigateHome}
        onNavigate={navigateTo}
      />
    );
  }

  if (currentPage === 'capacitacao') {
    return (
      <CapacitacaoPage
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        images={images}
        onNavigateHome={navigateHome}
        onNavigate={navigateTo}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} images={images} onNavigate={navigateTo} />
      <main>
        <About id="quem-somos" images={images} />
        <Services id="nossos-servicos" images={images} />
        <Vision images={images} />
        <Testimonials images={images} />
      </main>
      <Footer images={images} onNavigate={navigateTo} />
      <ScrollToTop />
    </div>
  );
};

export default App;
