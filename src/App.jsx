
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/Hoocks/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import Programacion from './components/ProgramarEnvio/Programacion';
import Inicio from './components/Inicio/Inicio';
import Seguimiento from './components/Seguimiento/Seguimiento';
import Ayuda from './components/Ayuda/PageAyuda';
import Calculadora from './components/Calculadora/PageCalculadora';
import Contacto from './components/Contacto/PageContacto';
import ZonaClientes from './components/ZonaClientes/ZonaClientes';

import AcercaDe from './components/Acercade/Acerca';
import ServiciosPage from './components/Servicios/ServicioPage';
import 'animate.css';
import ContactoPage from './components/Contacto/ContactoPage';
import ResultadoSeg from './components/Seguimiento/ResultadoSeg';
import DistribucionPage from './components/Servicios/DistribucionPage';
import MensajeriaPage from './components/Servicios/MensajeriaPage';
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync" >
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Inicio />} />
        <Route path="/programacion" element={<Programacion />} />
        <Route path="/seguimiento" element={<Seguimiento />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/acercaDe" element={<AcercaDe />} />
        <Route path='/servicios' element={<ServiciosPage />} />
        <Route path='/servicios/distribucion' element={<DistribucionPage />} />
        <Route path='/servicios/mensajeria' element={<MensajeriaPage />} />
        <Route path="/zonaClientes" element={<ZonaClientes />} />
        <Route path='/nosotros' element={<Programacion />} />
        <Route path='/contacto' element={<Programacion />} />
        <Route path='/terminos' element={<Programacion />} />
        <Route path='/brouchers' element={<Programacion />} />
        <Route path='/politica' element={<Programacion />} />
        <Route path='/programacion' element={<Programacion />} />
        <Route path="/seguimiento/:trackingID" element={<ResultadoSeg />} />
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
      <Router basename="/">
        <AnimatedRoutes />
      </Router>
    </div >
  );
}

export default App;
