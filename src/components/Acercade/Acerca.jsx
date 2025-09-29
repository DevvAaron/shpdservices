import { useEffect, useState } from 'react';
import {
    Box,
} from '@mui/material'

//Hoocks
import { Titulo1, Contenido } from '../Hoocks/Titulos';
import AnimatedBox from '../Hoocks/AnimatedBox';
import FondoInicio from '../hoocks/FondoInicio';
import BarraProgresiva from '../hoocks/BarraProgresiva';

//Componentes
import Navbar from "../Header/Navbar"
import Footer from '../Footer/Footer';
import Valores from './Valores';

//Imagenes
import tri4 from '../../assets/triangulo-4.png'
import img8 from '../../assets/sobrenosotros.png';


export default function AcercaDe() {
    
        const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
    const stepsMap = {
        "/": 1,
        "/acercaDe": 2,
        "/servicios": 3,
        "/contacto": 4,
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <main
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                backgroundColor: '#ff000000',
            }}
        >
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
                <>
                    <BarraProgresiva steps={4} activeStep={stepsMap[location.pathname] || 1} sx={{
                        position: 'absolute',
                        top: '70%',
                        left: { xs: '0%', sm: '0%', md: '-40%' },
                        zIndex: '2',
                        height: '50%',
                        width: '100%'
                    }} />
                </>
                {!isMobile && (<Box
                    name='TrianguloAbajo'
                    sx={{
                        position: 'absolute',
                        zIndex: 2,
                        top: '-4%',
                        left: '0%',
                        backgroundImage: `url(${tri4})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: '40rem',
                        width: '35rem'
                    }}
                />)}
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
                    justifyContent: "space-around",
                    padding: "0.55rem",
                    flexWrap: "wrap",

                    backdropFilter: 'blur(0.5px)',
                    WebkitBackdropFilter: 'blur(0.5px)',
                    zIndex: 1, background: 'linear-gradient(180deg, rgba(255,255,255), rgba(255,255,255,0.3), rgba(255,255,255,0))',
                }}
            >
                <AnimatedBox animation="animate__slideInLeft" delay={2000} duration={2000} style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Box
                        sx={{
                            backgroundImage: `url(${img8})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '1rem',
                            height: '100vh',
                            maxHeight: {
                                xs: '15rem',
                                sm: '25rem',
                                md: '25rem'
                            },
                            width: {
                                xs: '17rem',   // móviles
                                sm: '30rem',    // tablets
                                md: '30rem',  // escritorios
                            },
                            p: {
                                xs: 2,
                                sm: 3,
                                md: 4,
                            },
                            m: {
                                xs: 1,
                                sm: 2,
                                md: 2,
                            }
                        }}>
                    </Box>
                </AnimatedBox>

                <AnimatedBox animation="animate__slideInRight" delay={2000} duration={5000} >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: {
                                xs: '90%',   // móviles
                                sm: '80%',    // tablets
                                md: '40rem',  // escritorios
                            },
                            p: {
                                xs: 2,
                                sm: 3,
                                md: 4,
                            },
                            m: {
                                xs: 1,
                                sm: 2,
                                md: 2,
                            }
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
                                    borderBottom: '5px solid',
                                    borderBottomLeftRadius: '15px',
                                    borderBottomRightRadius: '15px',
                                    textAlign: "center",
                                    padding: "1rem"
                                }} />
                            <Contenido contenido={`Somos una empresa peruana especializada en el transporte de carga aérea, terrestre y marítima, a destinos nacionales e internacionales.

                                El profesionalismo de nuestro personal y la calidad de nuestras operaciones aseguran un servicio con los estándares internacionales en transporte de carga. 
                                
                                Como empresa responsable, contamos con el certificado emtido por el Ministerio de Transportes y comunicaciones (MTC) , a traves de la Dirección general de aeronáutica civil (DGAC).`}
                            />
                        </Box>
                    </Box>
                </AnimatedBox>
            </Box>
            <Valores />
            {/*Cuarto Box*/}
            <Footer />
        </main >
    )
}