import { useEffect, useState } from "react";
import { Titulo1 } from "../hoocks/Titulos";
import FondoInicio from "../hoocks/FondoInicio";
import Footer from "../components/ComponenteFooter";
import Navbar from "../components/ComponenteNavbar";

import img1 from '../assets/impresionDistribucion.png'
import img2 from '../assets/volantesDistribucion.png'

import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import { motion } from 'framer-motion';
export default function DistribucionPage() {

    const MotionGrid = motion.create(Grid);
    const MotionBox = motion.create(Box);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
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
                <FondoInicio>
                    <Titulo1 titulo={'Distribucion'} sx={{
                        position: 'relative',
                        fontSize: '3rem',
                        zIndex: 1,
                        top: '-1rem',
                        left: '0.5rem',
                        color: '#0000009f',
                        transform: { md: 'rotate(-24.5deg)' }, // 👈 gira 25° hacia la izquierda
                    }} />
                </FondoInicio>
            </Box>
            <Box name='Servicio Box'
                sx={{
                    display: 'flex',
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    height: '100%',
                    boxSizing: 'border-box',
                    justifyContent: 'center',
                    p: { xs: '1rem', sm: '2rem' },
                    gap: '2rem',
                }}
            >

                <MotionBox
                    initial={{ opacity: 0, y: -100, x: 50 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 120,
                        damping: 100,
                    }}
                    sx={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        borderRadius: '2rem',
                        backgroundColor: "#54f9ff41",
                        maxHeight: { xs: '45vh', sm: '50vh', md: '60vh' }
                    }}
                >{!isMobile && (
                    <Box sx={{
                        backgroundImage: `url(${img1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: "30%",
                        minHeight: '25.5vh',
                        maxHeight: '100vh',
                    }} />
                )}
                    <Box sx={{
                        width: '100%',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        alignItems: 'center',
                        padding: '1rem',
                        height: '100%',
                    }}>
                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: { xs: '1rem', sm: '1.6rem' }
                        }}
                            variant='h5'>
                            Impresión y Distribución
                        </Typography>
                        <Typography sx={{
                            width: { xs: '90%', sm: '80%', md: '95%' },
                            height: '100%',
                            p: 2,
                            fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem' },
                            textAlign: { xs: 'justify', md: 'center' },

                        }} variant='body'>
                            Deje su proceso de impresión y distribución en nuestras manos y optimice sus tiempos, trabajando este proceso
                            integral con un solo proveedor, nosotros nos encargamos de la impresión y distribución ya sea empaquetada o
                            habilitada individualmente en Lima y provincias para sus sucursales, oficinas o clientes. Contamos con alianzas
                            con diferentes imprentas de prestigio que por el volumen consolidado de servicios de todos nuestros clientes,
                            nos permiten atenderlo con costos altamente competitivos.
                        </Typography>
                    </Box>
                </MotionBox>
                <MotionGrid container
                    initial={{ opacity: 0, y: 100, x: -50 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 120,
                        damping: 100,
                    }} sx={{
                        borderRadius: '2rem',
                        alignItems: 'center',
                        backgroundColor: "#54f9ff41",
                        height: '100%',
                        maxHeight: { xs: '60vh', md: '85vh' }
                    }}>
                    <Grid name='Distribución de volantes' size={{ xs: 12, md: 8 }} >
                        <Stack spacing={2} sx={{
                            p: '1rem',
                            alignItems: 'center',
                        }}>
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: { xs: '1rem', sm: '1.6rem' }
                            }}
                                variant='h5'>
                                Distribución de volantes
                            </Typography>
                            <Typography sx={{
                                height: '100%',
                                width: { xs: '90%', sm: '80%', md: '95%' },
                                fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem' },
                                textAlign: { xs: 'justify', md: 'center' },
                            }} variant='body'>
                                Este tipo de publicidad es utilizado por importantes empresas nacionales e internacionales de servicios,
                                de artículos del hogar u oficina, farmacéuticas, automotrices, productos de consumo masivo, restaurantes,
                                comidas rápidas, mueblerías, constructoras y promotoras de vivienda, apertura de tiendas, ofertas especiales de nuevos productos, etc.
                            </Typography>
                            <Grid container spacing={2} sx={{
                                justifyContent: 'center'
                            }}>
                                <Grid size={5}>
                                    <Stack spacing={2}>
                                        <Typography sx={{
                                            fontWeight: 'bold',
                                            fontSize: { xs: '0.8rem', sm: '1.2rem' }
                                        }}
                                            variant='subtitle1'>
                                            Volanteo Personalizado
                                        </Typography>
                                        {!isMobile && (
                                            <Typography sx={{
                                                fontSize: { sm: '1rem' },
                                            }}
                                                variant='body'>
                                                Cuenta con base de datos proporcionada por el cliente a nivel Local, no tiene cargo ni del cliente ni de JER COURIER.
                                            </Typography>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid size={5}>
                                    <Stack spacing={2}>
                                        <Typography sx={{
                                            fontWeight: 'bold',
                                            fontSize: { xs: '0.8rem', sm: '1.2rem' }
                                        }}
                                            variant='subtitle1'>
                                            Volanteo Simple
                                        </Typography>
                                        {!isMobile && (
                                            <Typography sx={{
                                                fontSize: { sm: '1rem' },
                                            }}
                                                variant='body'>
                                                Cuenta con base de datos proporcionada por el cliente a nivel Local, no tiene cargo ni del cliente ni de JER COURIER.
                                            </Typography>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid size={{ xs: 8, sm: 9 }}>
                                    <Stack spacing={2}>
                                        <Typography sx={{
                                            fontWeight: 'bold',
                                            fontSize: { xs: '0.8rem', sm: '1.2rem' }
                                        }}
                                            variant='subtitle1'>
                                            Modalidades de entrega volanteo
                                        </Typography>
                                        {!isMobile && (
                                            <Typography sx={{
                                                fontSize: { sm: '1rem' },
                                            }}
                                                variant='body'>
                                                Establecido por el cliente, público objetivo a quien va dirigido dicha publicidad,
                                                volantes, catálogos, etc. Bajo Puerta uno a uno en zonas o cuadrantes solicitadas
                                                por el cliente. Transeúntes en zonas o cuadrantes solicitadas por el cliente.
                                            </Typography>
                                        )}
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Grid>
                    {!isMobile && (
                        <Box sx={{
                            backgroundImage: `url(${img2})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            width: "33%",
                            height: "100%",
                            minHeight: '30vh',
                        }} />
                    )}
                </MotionGrid>
            </Box>

            {/*Footer */}
            <Footer />
        </Container >
    )
}