import { Box, Button, Typography } from '@mui/material'
import { Titulo1 } from '../Hoocks/Titulos'
import Navbar from '../Header/Navbar'
import fondo from '../../assets/fondo.jpg';
import Footer from '../Footer/Footer'

import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'

import serv1 from '../../assets/servAlmace.jpg'
import serv2 from '../../assets/servMudanza.jpg'
import serv3 from '../../assets/servDistri.jpg'
import tri1 from '../../assets/triangulo-1.png'
import BarraProgresiva from '../hoocks/BarraProgresiva';
import FondoInicio from '../hoocks/FondoInicio';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
export default function ServiciosPage() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

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
        <main>
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
                {!isMobile && (<Box
                    name='TrianguloIzquierda'
                    sx={{
                        position: 'absolute',
                        zIndex: 2,
                        top: '10%',
                        left: '2%',
                        backgroundImage: `url(${tri1})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: '35rem',
                        width: '35rem'
                    }}
                />)}
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

            <Box name='Servicio Box'
                sx={{
                    display: 'flex',
                    backgroundColor: '#ffe10041',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    height: '100%',
                    boxSizing: 'border-box',
                    justifyContent: 'center',
                    p: { xs: '1rem', sm: '2rem' },
                    gap: '2rem',
                    width: '100%'
                }}
            >
                <Box sx={{
                    display: 'flex',
                    backgroundColor: '#fff',
                    width: '100%',
                    height: '35vh'
                }}
                >
                    <Box sx={{
                        backgroundColor: 'white',
                        width: "30%",
                        height: '100%'
                    }} >
                        Imagen1
                    </Box>
                    <Box sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#ff0000ff',
                        overflow: 'hidden',
                        width: "70%",
                        height: '100%',
                    }}>
                        <Typography sx={{
                            mt: 2
                        }}
                            variant='h3'>
                            Diseño y Distribución
                        </Typography>
                        <Typography sx={{
                            padding: '1rem',
                            width: '80%',
                            fontSize: '0.9rem',
                            textAlign: 'initial'
                        }} variant='body'>
                            Deje su proceso de impresión y distribución en nuestras manos y optimice sus tiempos, trabajando este proceso integral con un solo proveedor, nosotros nos encargamos de la impresión y distribución ya sea empaquetada o habilitada individualmente en Lima y provincias para sus sucursales, oficinas o clientes. Contamos con alianzas con diferentes imprentas de prestigio que por el volumen consolidado de servicios de todos nuestros clientes, nos permiten atenderlo con costos altamente competitivos.
                        </Typography>
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                opacity: '0.5',
                                backgroundColor: "#ffffffa9",
                                clipPath: 'polygon(100% 0, 80% 100%, 100% 100%);',
                            }}
                        />
                    </Box>
                </Box>

            </Box>
            {/*Segundo Box */}
            <Box name='Segundo Box'
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
                <Box name='Servicio 1'
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
                    </Box>
                    <Box sx={{
                        position: 'absolute',
                        height: '20%',
                        width: '15%',
                        top: { xs: '10%', sm: '5%' },
                        left: { xs: '5%', sm: '20%', md: '5%' },
                        right: { xs: '5%', sm: '5%' },
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
                    <Box sx={{
                        position: 'absolute',
                        height: '70%',
                        top: { xs: '20%', sm: '15%' },
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
                        <Titulo1 titulo={'Servicio de distribucion'}
                            subtitulo={'Entrega puntual en todo destino'}
                            sxSubtitulo={{
                                paddingBottom: { xs: '2rem', sm: '1rem' },
                                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.2rem' },
                            }}
                            sx={{
                                position: 'relative',
                                alignItems: 'initial',
                                paddingTop: '1rem',
                                paddingLeft: '1.5rem',
                                textAlign: 'left',
                                zIndex: 2, // 👈 el texto queda encima
                            }} />
                        {/*Boton para ver mas*/}
                        <Button
                            component={Link}
                            onClick={() => router.push("/servicios/distribucion")}
                            sx={{
                                position: 'relative',
                                borderRadius: ' 8px',
                                FontFamily: "Barlow",
                                fontWeight: 'bold',
                                bgcolor: '#fff',
                                fontFamily: 'Barlow',
                                color: '#13B5EA',
                                cursor: 'pointer',
                                zIndex: 2, // 👈 también encima
                                ":hover": {
                                    bgcolor: '#13B5EA',
                                    border: '2px solid #fff',
                                    fontWeight: 'bold',
                                    color: '#fff',
                                }
                            }}
                        >
                            Ver Más
                        </Button>
                    </Box>


                </Box>
                <Box name='Servicio 2'
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
                    </Box>
                    <Box sx={{
                        position: 'absolute',
                        height: '20%',
                        width: '15%',
                        top: { xs: '10%', sm: '5%' },
                        left: { xs: '5%', sm: '20%', md: '5%' },
                        right: { xs: '5%', sm: '5%' },
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
                    <Box sx={{
                        position: 'absolute',
                        height: '70%',
                        top: { xs: '20%', sm: '15%' },
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
                        <Titulo1 titulo={'Servicio de mudanza'}
                            subtitulo={'Servicio integral puerta a puerta'}
                            sxSubtitulo={{
                                paddingBottom: { xs: '2rem', sm: '1rem' },
                                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.2rem' },
                            }}
                            sx={{
                                position: 'relative',
                                alignItems: 'initial',
                                paddingTop: '1rem',
                                paddingLeft: '1.5rem',
                                textAlign: 'left',
                                zIndex: 2, // 👈 el texto queda encima
                            }} />
                        {/*Boton para ver mas*/}
                        <Button
                            component={Link}
                            onClick={() => router.push("/servicios/mudanza")}
                            sx={{
                                position: 'relative',
                                borderRadius: ' 8px',
                                FontFamily: "Barlow",
                                fontWeight: 'bold',
                                bgcolor: '#fff',
                                fontFamily: 'Barlow',
                                color: '#13B5EA',
                                cursor: 'pointer',
                                zIndex: 2, // 👈 también encima
                                ":hover": {
                                    bgcolor: '#13B5EA',
                                    border: '2px solid #fff',
                                    fontWeight: 'bold',
                                    color: '#fff',
                                }
                            }}
                        >
                            Ver Más
                        </Button>
                    </Box>


                </Box>
                <Box name='Servicio 3'
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
                        backgroundImage: `url(${serv3})`,
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
                    </Box>
                    <Box sx={{
                        position: 'absolute',
                        height: '20%',
                        width: '15%',
                        top: { xs: '10%', sm: '5%' },
                        left: { xs: '5%', sm: '20%', md: '5%' },
                        right: { xs: '5%', sm: '5%' },
                        zIndex: '2',
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            backgroundImage: `url(${icon3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            zIndex: 1
                        }
                    }} />
                    <Box sx={{
                        position: 'absolute',
                        height: '70%',
                        top: { xs: '20%', sm: '15%' },
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
                        <Titulo1 titulo={'Servicio de almacenaje'}
                            subtitulo={'Gestión eficiente de inventarios'}
                            sxSubtitulo={{
                                paddingBottom: { xs: '2rem', sm: '1rem' },
                                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.2rem' },
                            }}
                            sx={{
                                position: 'relative',
                                alignItems: 'initial',
                                paddingTop: '1rem',
                                paddingLeft: '1.5rem',
                                textAlign: 'left',
                                zIndex: 2, // 👈 el texto queda encima
                            }} />
                        {/*Boton para ver mas*/}
                        <Button
                            component={Link}
                            onClick={() => router.push("/servicios/almacenaje")}
                            sx={{
                                position: 'relative',
                                borderRadius: ' 8px',
                                FontFamily: "Barlow",
                                fontWeight: 'bold',
                                bgcolor: '#fff',
                                fontFamily: 'Barlow',
                                color: '#13B5EA',
                                cursor: 'pointer',
                                zIndex: 2, // 👈 también encima
                                ":hover": {
                                    bgcolor: '#13B5EA',
                                    border: '2px solid #fff',
                                    fontWeight: 'bold',
                                    color: '#fff',
                                }
                            }}
                        >
                            Ver Más
                        </Button>
                    </Box>


                </Box>
            </Box>

            {/*Footer */}
            <Footer />
        </main >
    )
}