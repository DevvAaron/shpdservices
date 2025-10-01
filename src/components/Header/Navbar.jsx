// src/components/Header/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import { Box, IconButton, Tooltip, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import contactoIcon from '../../assets/wspblack.png';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
  const navigate = useNavigate();

  const [trackingID, setTrackingID] = useState("");
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // móvil
  const [openDesktopSubmenu, setOpenDesktopSubmenu] = useState(null); // desktop


  const handleBuscar = () => {
    if (trackingID.trim() !== "") {
      navigate(`/seguimiento/${trackingID.trim()}`);
      setTrackingID(""); // limpiar después de buscar
    }
  };
  const handleSubmenuClick = (label) => {
    setOpenSubmenu(prev => (prev === label ? null : label));
  };

  const handleDoubleClick = (to) => {
    if (to) navigate(to);
  };

  useEffect(() => {
    // Detecta contenedor con scroll (soporta body / document.scrollingElement / window)
    const getScrollContainer = () => {
      const body = document.body;
      const bodyStyle = getComputedStyle(body);
      if ((bodyStyle.overflowY === 'auto' || bodyStyle.overflowY === 'scroll') && body.scrollHeight > body.clientHeight) {
        return body;
      }
      if (document.scrollingElement && document.scrollingElement.scrollHeight > document.scrollingElement.clientHeight) {
        return document.scrollingElement;
      }
      const possible = [...document.querySelectorAll('#root, main, .app-container, div')]
        .find(el => {
          const s = getComputedStyle(el);
          return (s.overflowY === 'auto' || s.overflowY === 'scroll') && el.scrollHeight > el.clientHeight;
        });
      return possible || window;
    };

    const scrollEl = getScrollContainer();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setMenuOpen(false);
      setOpenSubmenu(null);
    };

    const getY = () => (scrollEl === window ? window.scrollY : scrollEl.scrollTop);
    const handleScroll = () => setScrolled(getY() > 50);

    window.addEventListener('resize', handleResize);
    if (scrollEl === window) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    } else {
      scrollEl.addEventListener('scroll', handleScroll, { passive: true });
    }

    // inicializa
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (scrollEl === window) {
        window.removeEventListener('scroll', handleScroll);
      } else {
        scrollEl.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const navbarHeight = scrolled ? 60 : 80;

  const navigationLinks = [
    { to: '/', label: 'Principal' },
    { to: '/acercaDe', label: 'Acerca de' },
    {
      label: 'Servicios',
      to: '/servicios',
      subItems: [
        { to: '/servicios/distribucion', label: 'Distribución' },
        { to: '/servicios/almacen', label: 'Almacén' },
        { to: '/servicios/mudanzas', label: 'Mudanzas' }
      ]
    },
    { to: '/zonaClientes', label: 'Zona de Clientes' }
  ];

  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        width: '100%',
        backgroundColor: scrolled ? '#13B5EA' : 'transparent',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'background-color 0.25s ease, height 0.2s ease, box-shadow 0.2s ease',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1200,
        height: `${navbarHeight}px`,
        px: { xs: 1.5, sm: 3 },
        boxShadow: scrolled ? '0 6px 18px rgba(0,0,0,0.12)' : 'none'
      }}
    >
      {/* Logo */}
      <Box component={NavLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img
          src={scrolled ? logo2 : logo}
          alt="Logo"
          style={{
            marginLeft: '1rem',
            height: scrolled ? 40 : 56,
            transition: 'height 0.2s ease, transform 0.2s ease'
          }}
        />
      </Box>

      {/* Desktop links */}
      {!isMobile && (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', paddingRight: '2rem' }}>
          {navigationLinks.map(({ to, label, subItems }) => (
            <Box
              key={to || label}
              sx={{ position: 'relative' }}
              onMouseEnter={() => subItems && setOpenDesktopSubmenu(label)}
              onMouseLeave={() => subItems && setOpenDesktopSubmenu(null)}
              onDoubleClick={() => subItems && handleDoubleClick(to)}
            >
              {/* main label */}
              {subItems ? (
                <Box sx={{ cursor: 'pointer', padding: '0.3rem 0.6rem' }}>{label}</Box>
              ) : (
                <Box
                  component={NavLink}
                  to={to}
                  sx={({ isActive }) => ({
                    textDecoration: 'none',
                    color: '#fff',
                    padding: '0.3rem 0.6rem',
                    fontWeight: isActive ? '700' : '500',
                    '&:hover': { borderBottom: '3px solid rgba(0,0,0,0.25)' }
                  })}
                >
                  {label}
                </Box>
              )}

              {/* submenu desktop (controlado por estado) */}
              {subItems && (
                <AnimatePresence>
                  {openDesktopSubmenu === label && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        minWidth: 180,
                        borderRadius: 6,
                        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                        zIndex: 1300,
                        padding: '6px 8px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6
                      }}
                    >
                      {subItems.map(sub => (
                        <Box
                          key={sub.to}
                          component={NavLink}
                          to={sub.to}
                          sx={{
                            textDecoration: 'none',
                            color: '#fff',
                            padding: '0.45rem 0.8rem',
                            borderRadius: 4,
                            '&:hover': { background: '#0f9ccd' }
                          }}
                        >
                          {sub.label}
                        </Box>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </Box>
          ))}
        </Box>
      )}
      {/* --- BUSCADOR: solo se muestra cuando NO es mobile --- */}
      {!isMobile && (
        <Box sx={{ display: "flex", gap: 1, alignItems: 'center' }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Tracking ID"
            value={trackingID}
            onChange={(e) => setTrackingID(e.target.value)}
            sx={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              width: "10rem"
            }}
          />
          <IconButton onClick={handleBuscar} size="small" sx={{
            bgcolor: 'white', '&:hover': {
              background: '#13B5EA',
              }
          }}>
            <SearchIcon />
          </IconButton>
        </Box>
      )}

      {/* Mobile menu button */}
      {isMobile && (
        <IconButton onClick={() => setMenuOpen(s => !s)} sx={{ color: '#fff' }}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      )}

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.28 }}
            style={{
              position: 'absolute',
              top: `${navbarHeight}px`,
              right: 0,
              width: 260,
              maxWidth: '80vw',
              backgroundColor: '#13B5EA',
              padding: 12,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              zIndex: 1199,
              boxShadow: '-6px 0 20px rgba(0,0,0,0.18)'
            }}
          >
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Tracking ID"
                value={trackingID}
                onChange={(e) => setTrackingID(e.target.value)}
                sx={{ backgroundColor: "white", borderRadius: "0.5rem", width: '100%' }}
              />
              <IconButton onClick={() => { handleBuscar(); setMenuOpen(false); }} size="small" sx={{ bgcolor: 'white' }}>
                <SearchIcon />
              </IconButton>
            </Box>
            {navigationLinks.map(({ to, label, subItems }) => (
              <React.Fragment key={to || label}>
                {subItems ? (
                  <Box
                    onClick={() => handleSubmenuClick(label)}
                    onDoubleClick={() => handleDoubleClick(to)}
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      cursor: 'pointer',
                      color: '#fff',
                      padding: '6px 4px',
                      fontWeight: 700
                    }}
                  >
                    <span>{label}</span>
                    {openSubmenu === label ? <ExpandLessIcon sx={{ color: '#fff' }} /> : <ExpandMoreIcon sx={{ color: '#fff' }} />}
                  </Box>
                ) : (
                  <Box component={NavLink} to={to} onClick={() => setMenuOpen(false)} sx={{ textDecoration: 'none', color: '#fff', textAlign: 'right', padding: '6px 4px' }}>
                    {label}
                  </Box>
                )}

                {/* submenu móvil */}
                {subItems && openSubmenu === label && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingLeft: 8 }}>
                    {subItems.map(sub => (
                      <Box component={NavLink} key={sub.to} to={sub.to} onClick={() => setMenuOpen(false)} sx={{ display: 'flex', color: '#fff', textDecoration: 'none', padding: '6px 4px' }}>
                        {sub.label}
                      </Box>
                    ))}
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <Tooltip title="Contacto" placement="right">
        <IconButton
          onClick={() => navigate('/contacto')}
          aria-label="Contacto"
          sx={{
            position: 'fixed',
            left: { xs: 12, sm: 16 },
            bottom: { xs: 12, sm: 16 },
            zIndex: 1400,
            backgroundColor: '#fff',
            color: '#13B5EA',
            width: 56,
            height: 56,
            borderRadius: '999px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
            '&:hover': { backgroundColor: '#0fa6d6' },
            p: 1,
          }}
        >
          {/* Si tu icono es una img */}
          <Box component="img" src={contactoIcon} alt="Contacto" sx={{ width: '70%', height: '70%' }} />

          {/* O si prefieres usar un ícono de MUI, comenta la línea anterior y usa: */}
          {/* <MailOutlineIcon /> */}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Navbar;
