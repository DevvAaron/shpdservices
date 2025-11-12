import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Hace scroll al top cada vez que cambia la ruta
    window.scrollTo({ top: 0 }); // puedes quitar `behavior` si no quieres efecto
  }, [pathname]);

  return null;
};

export default ScrollToTop;
