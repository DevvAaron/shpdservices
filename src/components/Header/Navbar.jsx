// src/components/Header/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HelpIcon from '../../assets/ayuda.png';
import CalcIcon from '../../assets/calculadora.png';
import { motion, AnimatePresence } from 'framer-motion'; // 👈 al inicio del archivo


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigationLinks = [
    { to: '/', label: 'Funcionamiento' },
    { to: '/programacion', label: 'Programación' },
    { to: '/seguimiento', label: 'Seguimiento' },
    {
      to: '/ayuda',
      label: <img src={HelpIcon} alt="Ayuda" style={{ height: '1.7rem' }} />
    },
    {
      to: '/calculadora',
      label: <img src={CalcIcon} alt="Calculadora" style={{ height: '1.7rem' }} />
    },
    { to: '/contacto', label: 'Contacto' },
    { to: '/zonaClientes', label: 'Zona de Clientes'}
  ];

  return (
    <Box className="animated-navbar"
      sx={{
        width: '100%',
        backgroundColor: '#13B5EA',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        height: '80px',
      }}
    >
      {/* Logo */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ marginLeft: '1.5rem', height: '3.5rem' }} />
      </Box>

      {/* Botón de menú (solo en móvil) */}
      {isMobile && (
        <IconButton onClick={() => setMenuOpen(!menuOpen)} sx={{ color: 'white' }}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      )}

      {/* Navegación */}
      {/* Navegación: Desktop */}
      {!isMobile && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 3,
            paddingRight: '2rem',
            alignItems: 'center'
          }}
        >
          {navigationLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => {
                const isContacto = to === '/contacto';
                return {
                  textDecoration: 'none',
                  color: '#fff',
                  padding: '0.4rem 0.8rem',
                  transition: '0.3s',
                  border: isContacto
                    ? '2px solid white' // Siempre borde blanco
                    : isActive
                      ? '2px solid white' // Borde blanco si está activo
                      : '2px solid transparent',
                  borderRadius: isContacto ? '5px' : '0px',
                  fontWeight: isActive || isContacto ? 'bold' : 'normal',
                };
              }}
            >
              {label}
            </NavLink>
          ))}

        </Box>
      )}

      {/* Navegación: Mobile animado */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'absolute',
              top: '80px',
              right: 0,
              width: '8rem',
              backgroundColor: '#13B5EA',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              zIndex: 999,
              boxShadow: '-2px 0 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            {navigationLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  borderBottom: isActive ? '2px solid white' : '2px solid transparent',
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: '#fff',
                  paddingBottom: '0.3rem',
                  transition: '0.3s',
                  width: '100%',
                  display: 'block',
                  textAlign: 'right',
                })}
              >
                {label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </Box>
  );
};

export default Navbar;
