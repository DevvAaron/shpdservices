import { useEffect, useState } from 'react';
import {
    Box, Container
} from '@mui/material'

//Hoocks
import { Titulo1, Contenido } from '../hoocks/Titulos';
import FondoInicio from '../hoocks/FondoInicio';
import BarraProgresiva from '../hoocks/BarraProgresiva';

import { motion } from 'framer-motion';
//Componentes
import Navbar from "../components/ComponenteNavbar"
import Footer from '../components/ComponenteFooter';
import Valores from '../components/ComponenteValores';

//Imagenes
import img8 from '../assets/sobrenosotros.png';


export default function AcercaDe() {
    const MotionBox = motion.create(Box);
    const stepsMap = {
        "/": 1,
        "/acercaDe": 2,
        "/servicios": 3,
        "/contacto": 4,
    };

    return (
        <Container disableGutters maxWidth={false}>
            <Navbar sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000, // asegúrate que esté encima de todo
            }} />
            <Box
                name='controlador'
                sx={{
                    position: 'relative',
                    zIndex: 5,
                    height: '100vh',
                    width: '100%'
                }}>
                <BarraProgresiva steps={4} activeStep={stepsMap[location.pathname] || 1} sx={{
                    position: 'absolute',
                    top: '70%',
                    left: { xs: '0%', sm: '0%', md: '-40%' },
                    zIndex: '2',
                    height: '50%',
                    width: '100%'
                }} />
                <FondoInicio>
                    <Titulo1 titulo={'Acerca de'} sx={{
                        position: 'relative',
                        fontSize: '3rem',
                        zIndex: 1,
                        top: '-1rem',
                        left: '0.5rem',
                        color: '#0000009f',
                        transform: { md: 'rotate(-24.5deg)' }, // 👈 gira 25° hacia la izquierda
                        display: 'inline-block'
                    }} />
                </FondoInicio>
            </Box>
            {/*Segundo Box */}
            <Box
                sx={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                    gap: 2,
                    p: 2,
                    alignItems: 'center',
                    backdropFilter: 'blur(0.5px)',
                    WebkitBackdropFilter: 'blur(0.5px)',
                    zIndex: 1, background: 'linear-gradient(180deg, rgba(255,255,255), rgba(255,255,255,0.3), rgba(255,255,255,0))',
                }}
            >
                <MotionBox
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 120,
                        damping: 100,
                    }}
                    sx={{
                        backgroundImage: `url(${img8})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        borderRadius: '1rem',
                        width: '100%',
                        maxWidth: { xs: '100%', sm: '45%', md: '20%' },
                        height: '100vh',
                        maxHeight: {
                            xs: '15rem',
                            sm: '25rem',
                            md: '20rem'
                        },
                    }}>
                </MotionBox>
                <MotionBox

                    // 1. Inicia fuera de la pantalla a la izquierda
                    initial={{ opacity: 0, x: 100 }}
                    // 2. Anima hasta su posición final (x: 0)
                    animate={{ opacity: 1, x: 0 }}
                    // 3. Puedes ajustar la duración y el tipo de transición
                    whileTap={{ scale: 1.1 }}
                    transition={{
                        duration: 1, // Aumenté la duración para que se note el movimiento
                        type: "spring",
                        stiffness: 120, // Ajusta la rigidez del resorte
                        damping: 100, // Ajusta el frenado
                    }}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: {
                            xs: '90%',   // móviles
                            sm: '45%',    // tablets
                            md: '40%',  // escritorios
                        },
                    }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: 'center',

                        borderBottom: '5px solid',
                        borderTop: '5px solid',
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                        borderBottomLeftRadius: '15px',
                        borderBottomRightRadius: '15px',
                    }}>
                        <Titulo1 titulo={"SOBRE NOSOTROS"}
                            style={{
                                textAlign: "center",
                                padding: "1rem"
                            }} />
                        <Contenido contenido={`Somos una empresa, con un staff de profesionales altamente calificados,
                            comprometidos con tu gestión, marcando una ventaja comparativa diferencial positiva: 

                            BRINDAR UN SERVICIO DE ALTA CALIDAD Y SER TU PRINCIPAL SOCIO ESTRATÉGICO.`}
                        />
                    </Box>
                </MotionBox>
            </Box>
            <Valores />
            {/*Cuarto Box*/}
            <Footer />
        </Container >
    )
}