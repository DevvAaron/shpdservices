
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './hoocks/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import Programacion from './components/ProgramarEnvio/Programacion';
import Inicio from './pages/PageInicio';
import Seguimiento from './components/Seguimiento/Seguimiento';
import ZonaClientes from './pages/PageZonaClientes';

import AcercaDe from './pages/PageAcercaDe';
import ServiciosPage from './pages/PageServicio';
import 'animate.css';
import ContactoPage from './components/Contacto/ContactoPage';
import ResultadoSeg from './components/Seguimiento/ResultadoSeg';
import DistribucionPage from './pages/PageDistribucion';
import MensajeriaPage from './pages/PageMensajeria';
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync" >
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Inicio />} />
        <Route path="/acercaDe" element={<AcercaDe />} />
        <Route path="/programacion" element={<Programacion />} />
        <Route path="/seguimiento" element={<Seguimiento />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path='/servicios' element={<ServiciosPage />} />
        <Route path='/servicios/distribucion' element={<DistribucionPage />} />
        <Route path='/servicios/mensajeria' element={<MensajeriaPage />} />
        <Route path="/zonaClientes" element={<ZonaClientes />} />
        <Route path='/terminos' element={<Programacion />} />
        <Route path='/brouchers' element={<Programacion />} />
        <Route path='/politica' element={<Programacion />} />
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
