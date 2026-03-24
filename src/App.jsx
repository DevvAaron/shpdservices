
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './hoocks/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import React, { lazy, Suspense } from 'react';
import 'animate.css';
const ContactoPage = lazy(() => import('./pages/PageContacto'));
const InicioPage = lazy(() => import('./pages/PageInicio'));
const SeguimientoPage = lazy(() => import('./pages/PageSeguimiento'));
const ZonaClientesPage = lazy(() => import('./pages/PageZonaClientes'));
const AcercaDePage = lazy(() => import('./pages/PageAcercaDe'));
const ServicioPage = lazy(() => import('./pages/PageServicio'));
const ResultadoSegPage = lazy(() => import('./pages/PageResultadoSeg'));
const DistribucionPage = lazy(() => import('./pages/PageDistribucion'));
const MensajeriaPage = lazy(() => import('./pages/PageMensajeria'));
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <AnimatePresence mode="sync">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<InicioPage />} />
          <Route path="/acercaDe" element={<AcercaDePage />} />
          <Route path="/seguimiento" element={<SeguimientoPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path='/servicios' element={<ServicioPage />} />
          <Route path='/servicios/distribucion' element={<DistribucionPage />} />
          <Route path='/servicios/mensajeria' element={<MensajeriaPage />} />
          <Route path="/zonaClientes" element={<ZonaClientesPage />} />
          <Route path="/seguimiento/:trackingID" element={<ResultadoSegPage />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

function App() {
  return (
    <div className="app-container" id="main-scroll-container" style={{
      width: '100%', minHeight: '100vh',
      backgroundColor: "#ffffff00"
    }}>
      <Router basename="/shpdservices/">
        <ScrollToTop />
        <AnimatedRoutes />
      </Router>
    </div >
  );
}

export default App;
