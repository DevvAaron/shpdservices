
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Button } from '@mui/material';
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Cobertura1 } from '../Cobertura/PageCobertura'
import { Titulo1 } from "../Hoocks/Titulos";
import mundo from '../../assets/mundo.png'
import BarraProgresiva from '../hoocks/BarraProgresiva';
import FondoInicio from '../hoocks/FondoInicio';
import tri5 from '../../assets/triangulo-5.png'
export default function ZonaClientes() {
    //Estados
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
    const stepsMap = {
        "/": 1,
        "/acercaDe": 2,
        "/servicios": 3,
        "/seguirmiento": 4,
        "/zonaClientes": 5
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.div
            style={{
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
                    <BarraProgresiva steps={5} activeStep={stepsMap[location.pathname] || 1} sx={{
                        position: 'absolute',
                        top: '92.5%',
                        left: { xs: '0%', sm: '0%', md: '-40%' },
                        zIndex: '2',
                        width: '100%'
                    }} />
                </>
                {!isMobile && (

                    <Box
                        name='TrianguloArriba'
                        sx={{
                            position: 'absolute',
                            zIndex: 2,
                            top: '10%',
                            left: '5%',
                            backgroundImage: `url(${tri5})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height:'100%',
                            maxHeight:'35rem',
                            width:'100%',
                            maxWidth:'35rem',
                        }}
                    />
                )}


                <FondoInicio>

                    <Titulo1 titulo={'Zona de clientes'} sx={{
                        position: 'relative',
                        fontSize: '3rem',
                        zIndex: 1,
                        top: '-1rem',
                        left: '0.5rem',
                        color: '#ffffff9f',
                        transform: { md: 'rotate(-24.5deg)' }, // 👈 gira 25° hacia la izquierda
                        display: 'inline-block'
                    }} />
                </FondoInicio>
            </Box>
            <Box
                name='Box1'
                sx={{
                    padding: '1rem',
                }}
            >
                <Box sx={{
                    margin: '5rem',
                    gap: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: {
                        xs: '25rem',
                        sm: '46rem',
                        md: '100%'
                    },
                    alignItems: 'center'
                }}>

                    <Titulo1 titulo={'Zona de Clientes'} style={{
                        fontSize: '1rem', marginBottom: 'rem',
                        padding: '1rem',
                        borderBottom: '5px solid',
                        borderBottomLeftRadius: '15px',
                        borderBottomRightRadius: '15px',
                    }} />

                    <Button
                        sx={{
                            whiteSpace: 'nowrap',
                            fontWeight: 'bold',
                            px: 3,
                            py: 1,
                            width: '9rem',
                            borderBottom: '5px solid',
                            borderBottomLeftRadius: '15px',
                            borderBottomRightRadius: '15px',
                        }}
                    >
                        Clientes
                    </Button>
                    <Button
                        sx={{
                            whiteSpace: 'nowrap',
                            fontWeight: 'bold',
                            px: 3,
                            py: 1,
                            width: '9rem',

                            borderBottom: '5px solid',
                            borderBottomLeftRadius: '15px',
                            borderBottomRightRadius: '15px',
                        }}
                    >
                        Agentes
                    </Button>
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
                < Box
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        width: '100%',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        boxSizing: 'border-box',
                        px: { xs: 2, sm: 4 }
                    }}
                >
                    <Cobertura1 />
                </Box >
            </Box >

            {/* Espacio para compensar el Navbar fijo */}
            <Footer />
        </motion.div>
    )
}