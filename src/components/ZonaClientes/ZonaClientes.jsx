
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Button } from '@mui/material';
import Navbar from "../Header/Navbar";
import Footer from "../ComponenteFooter";
import { Cobertura1 } from '../ComponenteCobertura';
import { Titulo1 } from "../Hoocks/Titulos";
import BarraProgresiva from '../hoocks/BarraProgresiva';
import FondoInicio from '../hoocks/FondoInicio';
import img1 from '../../assets/fondo.png'
import form1 from '../../assets/form1.jpg'
import form2 from '../../assets/form2.jpg'
import formfond from '../../assets/formfond.png'
export default function ZonaClientes() {
    //Estados
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
    const stepsMap = {
        "/": 1,
        "/acercaDe": 2,
        "/servicios": 3,
        "/zonaClientes": 4
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Box
            sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                backgroundColor: "#ff000000",
            }}>
            <Navbar sx={{
                position: 'fixed',
                justifyContent: 'center',
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
                <>
                    <BarraProgresiva steps={4} activeStep={stepsMap[location.pathname] || 1} sx={{
                        position: 'absolute',
                        top: '92.5%',
                        left: { xs: '0%', sm: '0%', md: '-40%' },
                        zIndex: '2',
                        width: '100%'
                    }} />
                </>


                <FondoInicio>
                    <Box
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            zIndex: 1, gap: '10rem',
                            left: '-0.7%',
                            alignItems: 'center'
                        }}
                    >
                        <Titulo1 titulo={'Zona de clientes'} sx={{
                            position: 'relative',
                            fontSize: '3rem',
                            zIndex: 1,
                            top: '-1rem',
                            left: '0.5rem',
                            color: '#0000009f',
                            transform: { md: 'rotate(-24.5deg)' }, // 👈 gira 25° hacia la izquierda
                            display: 'inline-block'
                        }} />

                    </Box>
                </FondoInicio>
            </Box>
            <Box
                name='Box1'
                sx={{
                    display: 'flex',
                    padding: '1rem',
                    width: '95vw',
                    height: '100%',
                    justifyContent: 'center'
                }}
            >
                <Box sx={{
                    position: 'relative',
                    height: { xs: '150vh', sm: '100vh' },
                    width: '100vw',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    zIndex: 1,
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                    <Box
                        sx={{
                            height: '100vh',
                            width: '95vw',
                            position: 'absolute',
                            zIndex: 1,
                            backgroundImage: `url(${formfond})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Box sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2rem',
                        zIndex: 5
                    }}>
                        <Box sx={{
                            borderRadius: '3rem',
                            border: '0.5rem solid #13B5EA',
                            backgroundImage: `url(${form1})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '100vh',
                            width: '100vw',
                            maxHeight: { xs: '15rem', sm: '20rem' },
                            maxWidth: { xs: '15rem', sm: '20rem' },
                        }} />

                        <a
                            href="http://186.96.145.241:8181/Online_mx/"
                            style={{ textDecoration: 'none' }} // Para quitar el subrayado de enlace si es necesario
                        >
                            <Button
                                sx={{
                                    whiteSpace: 'nowrap',
                                    fontWeight: 'bold',
                                    px: 3,
                                    py: 1,
                                    borderBottom: '5px solid',
                                    borderBottomLeftRadius: '15px',
                                    borderBottomRightRadius: '15px',
                                }}
                            >
                                Clientes
                            </Button>
                        </a>


                    </Box>

                    <Box sx={{
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center',
                        gap: { xs: '1rem', sm: '2rem' },
                        zIndex: 5
                    }}>

                        <Box sx={{
                            borderRadius: '3rem',
                            border: '0.5rem solid #13B5EA',
                            backgroundImage: `url(${form2})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '100vh',
                            width: '100vw',
                            maxHeight: { xs: '15rem', sm: '20rem' },
                            maxWidth: { xs: '15rem', sm: '20rem' },
                        }} />
                        <a
                            href="http://186.96.145.241:8181/intranet_mx/"
                            style={{ textDecoration: 'none' }} // Para quitar el subrayado de enlace si es necesario
                        >
                            <Button
                                sx={{
                                    whiteSpace: 'nowrap',
                                    fontWeight: 'bold',
                                    px: 3,
                                    py: 1,
                                    borderBottom: '5px solid',
                                    borderBottomLeftRadius: '15px',
                                    borderBottomRightRadius: '15px',
                                }}
                            >
                                Agentes
                            </Button>
                        </a>
                    </Box>
                </Box>
            </Box>
            {/*Tercer Box*/}
            < Box
                sx={{
                    position: "relative",
                    overflow: 'hidden',
                    backgroundColor: '#59c3eaff',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#000000ff',
                    py: { xs: 4, sm: 6, md: 8 },
                    px: { xs: 2, sm: 4, md: 6 },
                    minHeight: { xs: '150px', sm: '200px', md: '350px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }
                }>
                {/* Capa de desenfoque */}
                < Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backdropFilter: 'blur(0.5px)',
                        WebkitBackdropFilter: 'blur(0.5px)',
                        zIndex: 1, background: 'linear-gradient(to top, rgba(255,255,255), rgba(255,255,255,0.3), rgba(255,255,255,0))',
                    }}
                />
                <Cobertura1 />
            </Box >

            <Footer />
        </Box>
    )
}