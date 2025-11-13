import { useEffect } from 'react'; // 👈 Volvemos a useEffect
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 🚀 Usa setTimeout para mover la ejecución al siguiente ciclo de render.
    // Esto da tiempo a Framer Motion para iniciar la transición del nuevo contenido
    // y asegura que el body esté listo para recibir el scroll.
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'instant' // 👈 Usa 'instant' para evitar animaciones lentas
      });
    }, 100); // 100ms es suficiente para resolver la mayoría de conflictos de timing

    return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta

  }, [pathname]); // Se re-ejecuta cada vez que el path cambia

  return null;
};

export default ScrollToTop;