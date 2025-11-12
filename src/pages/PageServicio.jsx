import Navbar from '../components/ComponenteNavbar'
import Footer from '../components/ComponenteFooter'
import BarraProgresiva from '../hoocks/BarraProgresiva';
import FondoInicio from '../hoocks/FondoInicio';
import { Titulo1 } from '../hoocks/Titulos'

import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'

import serv1 from '../assets/servAlmace.jpg'
import serv2 from '../assets/servMudanza.jpg'


import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { Box, Button, Container } from '@mui/material'
import { useEffect, useState } from 'react';

export default function ServiciosPage() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

    const MotionBox = motion.create(Box);
    const router = useNavigate();
    const stepsMap = {
        "/": 1,
        "/acercaDe": 2,
        "/servicios": 3,
        "/contacto": 4
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Container disableGutters maxWidth={false}>
            <Navbar sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
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
                    top: '92.5%',
                    left: { xs: '0%', sm: '0%', md: '-40%' },
                    zIndex: '2',
                    width: '100%'
                }} />
                <FondoInicio>

                    <Titulo1 titulo={'Servicios'} sx={{
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
                    display: 'flex',
                    backgroundColor: '#54f9ff41',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    height: '100%',
                    boxSizing: 'border-box',
                    justifyContent: 'center',
                    p: { xs: '1rem', sm: '2rem' },
                    gap: '2rem',
                    width: '100vw'
                }}
            >
                <MotionBox
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 120,
                        damping: 100,
                    }}
                    sx={{
                        position: 'relative',
                        height: '50vh',
                        width: '100%',
                        maxWidth: { xs: '100vw', sm: '80vw', md: '40vw' },
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Box name='Imagen' sx={{
                        borderTopLeftRadius: '30px ',
                        borderBottomLeftRadius: '30px ',
                        borderRadius: { xs: '30px' },
                        backgroundImage: `url(${serv1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        maxWidth: {
                            xs: '100%',
                            sm: '75%'
                        },
                        width: '100%',
                        zIndex: '1'
                    }}>
                        {!isMobile && (
                            <Box sx={{
                                position: 'absolute',
                                height: '25%',
                                width: { sm: '15%' },
                                top: { sm: '5%' },
                                left: { sm: '3%', md: '5%' },
                                right: { sm: '5%' },
                                zIndex: '2',
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    inset: 0,
                                    backgroundImage: `url(${icon1})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    zIndex: 1
                                }
                            }} />
                        )}

                        <Button sx={{
                            top: '87%',
                            left: '25%',
                            position: 'relative',
                            backgroundColor: '#fff',
                            zIndex: 2,
                        }}
                            onClick={() => {
                                router('/servicios/distribucion')
                            }}
                            variant='outlined'
                            size="small"
                        >
                            Ver mas
                        </Button>
                    </Box>
                    <Box sx={{
                        position: 'absolute',
                        height: '70%',
                        top: '10%',
                        left: { xs: '5%', sm: '20%', md: '25%' },
                        right: { xs: '5%', sm: '5%' },
                        color: '#fff',
                        zIndex: '2',
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            borderRadius: '2rem',
                            backgroundColor: "#13B5EA",
                            opacity: 0.7,
                            zIndex: 1
                        }
                    }}>
                        <Titulo1 titulo={'Servicio de Distribucion'}
                            subtitulo={'Nos esforzamos por cumplir los plazos establecidos en nuestras entregas'}
                            sxSubtitulo={{
                                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.2rem' },
                            }}
                            sx={{
                                position: 'relative',
                                alignItems: 'initial',
                                p: 2,
                                textAlign: 'left',
                                zIndex: 2, // 👈 el texto queda encima
                            }} />

                    </Box>


                </MotionBox>
                <MotionBox
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 120,
                        damping: 100,
                    }}
                    sx={{
                        position: 'relative',
                        height: '50vh',
                        width: '100%',
                        maxWidth: { xs: '100vw', sm: '80vw', md: '40vw' },
                        display: 'flex',
                        flexDirection: 'row'
                    }}
                >
                    <Box name='Imagen' sx={{
                        borderTopLeftRadius: '30px ',
                        borderBottomLeftRadius: '30px ',
                        borderRadius: { xs: '30px' },
                        backgroundImage: `url(${serv2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        maxWidth: {
                            xs: '100%',
                            sm: '75%'
                        },
                        width: '100%',
                        zIndex: '1'
                    }}>
                        {!isMobile && (
                            <Box sx={{
                                position: 'absolute',
                                height: '20%',
                                width: { sm: '15%' },
                                top: { sm: '5%' },
                                left: { sm: '3%', md: '5%' },
                                right: { sm: '5%' },
                                zIndex: '2',
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    inset: 0,
                                    backgroundImage: `url(${icon2})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    zIndex: 1
                                }
                            }} />
                        )}
                        <Button sx={{
                            top: '87%',
                            left: '25%',
                            position: 'relative',
                            backgroundColor: '#fff',
                            zIndex: 2,
                        }}
                            onClick={() => {
                                router('/servicios/mensajeria')
                            }}
                            variant='outlined'
                            size="small"
                        >
                            Ver mas
                        </Button>
                    </Box>
                    <Box sx={{
                        position: 'absolute',
                        height: '75%',
                        top: { xs: '10%', sm: '10%' },
                        left: { xs: '5%', sm: '20%', md: '25%' },
                        right: { xs: '5%', sm: '5%' },
                        color: '#fff',
                        zIndex: '2',
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            borderRadius: '2rem',
                            backgroundColor: "#13B5EA",
                            opacity: 0.8,
                            zIndex: 1
                        }
                    }}>
                        <Titulo1 titulo={'Servicio de Mensajeria'}
                            subtitulo={'Ofrecemos cobertura total para sus necesidades logísticas, desde la distribución de grandes volúmenes hasta la entrega urgente de documentos críticos.'}
                            sxSubtitulo={{
                                fontSize: { xs: '0.9rem', sm: '1.3rem', md: '1.2rem' },
                            }}
                            sx={{
                                position: 'relative',
                                alignItems: 'initial',
                                p: 2,
                                textAlign: 'left',
                                zIndex: 2, // 👈 el texto queda encima
                            }} />
                    </Box>
                </MotionBox>
            </Box>
            {/*Footer */}
            <Footer />
        </Container >
    )
}