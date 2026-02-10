import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-sm text-center md:text-left">
          Aviso: Utilizamos cookies propias y de terceros para analizar sus hábitos de navegación
          y ofrecerle publicidad relacionada con sus intereses. Si continúa navegando, entendemos
          que acepta nuestra{' '}
          <a
            href="/politica-de-cookies/"
            className="underline hover:text-[#8bc34a] transition-colors"
          >
            Política de cookies
          </a>
          , para más información lea{' '}
          <a
            href="/mas-informacion-sobre-las-cookies/"
            className="underline hover:text-[#8bc34a] transition-colors"
          >
            Aquí
          </a>
        </p>
        <button
          onClick={acceptCookies}
          className="bg-[#8bc34a] hover:bg-[#7cb342] text-white px-6 py-2 rounded font-medium transition-colors whitespace-nowrap"
        >
          ACEPTAR
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
