// src/components/Header/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CalculateIcon from '@mui/icons-material/Calculate';
import { motion, AnimatePresence, hover } from 'framer-motion'; // 👈 al inicio del archivo


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
    { to: '/', label: 'Principal' },// Antes era Funcionamiento
    { to: '/programacion', label: 'Programación' }, // Ya no estara operativo
    { to: '/seguimiento', label: 'Acerca de' },
    { to: '/seguimiento', label: 'Seguimiento' },
    {
      to: '/ayuda',
      label: <HelpOutlineIcon sx={{ fontSize: '3rem' }} />
    },
    {
      to: '/calculadora',
      label: <CalculateIcon sx={{ fontSize: '3rem' }} />
    },
    { to: '/contacto', label: 'Contacto' },
    { to: '/zonaClientes', label: 'Zona de Clientes' }
  ];

  return (
    <Box className="animated-navbar"
      sx={{
        width: '100%',
        backgroundColor: '#ffffff00',
        opacity: 0,
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
      <NavLink to="/" sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ marginLeft: '1.5rem', height: '3.5rem', cursor: 'pointer' }} />
      </NavLink >

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
            <Box
              key={to}
              component={NavLink}
              to={to}
              sx={({ isActive }) => ({
                textDecoration: 'none',
                color: '#fff',
                padding: '0.1rem 0.2rem',
                transition: '0.3s',
                backgroundColor: '#13B5EA',
                borderTopLeftRadius: '5px',
                borderTopRightRadius: '5px',
                fontWeight: isActive || to === '/contacto' ? 'bold' : 'normal',
                '&:hover': {
                  borderBottom: '4px solid white',
                },
              })}
            >
              {label}
            </Box>
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
