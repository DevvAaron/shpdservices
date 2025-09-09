// src/components/Header/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { linearGradient } from 'motion/react-client';

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
    { to: '/ayuda', label: 'IconoAyuda' },
    { to: '/calculadora', label: 'ModalCalculadora' },
    { to: '/contacto', label: 'Contacto' },
  ];

  return (
    <Box className="animated-navbar"
      sx={{
        width: '100%',
        backgroundColor: '#4e7da3',
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
        <img src={logo} alt="Logo" style={{ height: '3.5rem' }} />
      </Box>

      {/* Botón de menú (solo en móvil) */}
      {isMobile && (
        <IconButton onClick={() => setMenuOpen(!menuOpen)} sx={{ color: 'white' }}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      )}

      {/* Navegación */}
      <Box
        sx={{
          display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          position: isMobile ? 'absolute' : 'static',
          top: isMobile ? '80px' : 'auto',
          left: 0,
          right: 0,
          width: '100%',
          backgroundColor: isMobile ? '#4e7da3' : 'transparent',
          gap: 3,
          paddingY: isMobile ? 2 : 0,
          paddingX: isMobile ? 2 : 0, // ❌ No uses px: 3 aquí
          boxSizing: 'border-box',
          justifyContent: 'center'
        }}
      >
        {navigationLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => isMobile && setMenuOpen(false)}
            style={({ isActive }) => ({
              textDecoration: 'none',
              borderBottom: isActive ? '2px solid white' : '2px solid transparent',
              fontWeight: isActive ? 'bold' : 'normal',
              color: '#fff',
              paddingBottom: '0.3rem',
              transition: '0.3s',
              width: isMobile ? '100%' : 'auto',
              display: 'block',
              textAlign: isMobile ? 'left' : 'center',
              paddingLeft: isMobile ? '1rem' : 0, // ✅ Alineación sin romper layout
              paddingRight: isMobile ? '1rem' : 0,
            })}
          >
            {label}
          </NavLink>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
