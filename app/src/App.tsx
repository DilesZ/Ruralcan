import { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import PineBorder from './components/PineBorder';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import HotelCanino from './pages/HotelCanino';
import Adiestramiento from './pages/Adiestramiento';
import Tarifas from './pages/Tarifas';
import Contacto from './pages/Contacto';
import ReservaOnline from './pages/ReservaOnline';
import Recuperacion from './pages/Recuperacion';
import Charlas from './pages/Charlas';
import Prensa from './pages/Prensa';
import QueLlevar from './pages/QueLlevar';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import PoliticaCookies from './pages/PoliticaCookies';
import MasInfoCookies from './pages/MasInfoCookies';

// Hash-based router for static hosting
function App() {
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Parse hash on load
    const hash = window.location.hash.slice(1) || '/';
    setCurrentPath(hash);

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1) || '/';
      setCurrentPath(newHash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update all links to use hash-based navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith('//')) {
          e.preventDefault();
          window.location.hash = href;
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
      case '/index.html':
        return <Home />;
      case '/quienes-somos/':
        return <QuienesSomos />;
      case '/residencia/':
        return <HotelCanino />;
      case '/adiestramiento/':
        return <Adiestramiento />;
      case '/tarifas/':
        return <Tarifas />;
      case '/contacto/':
        return <Contacto />;
      case '/reserva-online/':
        return <ReservaOnline />;
      case '/recuperacion-y-cuidados-especiales/':
        return <Recuperacion />;
      case '/charlas/':
        return <Charlas />;
      case '/video-tv-enguera/':
        return <Prensa />;
      case '/que-necesito-llevar-a-ruralcan/':
        return <QueLlevar />;
      case '/politica-privacidad/':
        return <PoliticaPrivacidad />;
      case '/politica-de-cookies/':
        return <PoliticaCookies />;
      case '/mas-informacion-sobre-las-cookies/':
        return <MasInfoCookies />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f3feb9] flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#4a7c59] text-white px-4 py-2 rounded z-50">
        Ir al contenido
      </a>
      <Header />
      <Navbar currentPath={currentPath} />
      <PineBorder />
      <main id="main-content" className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <CookieBanner />
      <ScrollToTop />
    </div>
  );
}

export default App;
