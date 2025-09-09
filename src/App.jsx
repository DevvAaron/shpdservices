
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/Hoocks/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import Programacion from './components/ProgramarEnvio/Programacion';
import Inicio from './components/Inicio/Inicio';
import Seguimiento from './components/Seguimiento/Seguimiento';
import Ayuda from './components/Ayuda/Ayuda';
import Calculadora from './components/Calculadora/Calculadora';
import Contacto from './components/Contacto/Contacto';
import 'animate.css';
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence  mode="sync" >
      <ScrollToTop/>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Inicio />} />
        <Route path="/programacion" element={<Programacion />} />
        <Route path="/seguimiento" element={<Seguimiento />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="app-container" style={{
      width: '100%', minHeight: '100vh',
      backgroundColor: "#ffffff00"
    }}>
      <Router>
        <AnimatedRoutes/>
      </Router>
    </div >
  );
}

export default App;
