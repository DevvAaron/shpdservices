
import { useState, useEffect } from 'react';
import {
    Button, Stack,
    Box, Grid
} from '@mui/material'
import { Cobertura1 } from '../Cobertura/PageCobertura';
import Footer from '../Footer/Footer';
import Ayuda from '../Footer/Ayuda';
import Navbar from '../Header/Navbar';
import AnimatedBox from '../Hoocks/AnimatedBox';
import { Contenido, Subtitulo, Titulo1 } from '../Hoocks/Titulos';
import 'animate.css';



import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img8 from '../../assets/img8.png';

import tri3 from '../../assets/triangulo-3.png'

import FondoInicio from '../hoocks/FondoInicio';
import BarraProgresiva from '../hoocks/BarraProgresiva';
import MuiImageCarousel from '../hoocks/Carrusel';

export default function Inicio() {

    //Colecciones
    const fondoImages = [img1, img2, img3, img4, img8]
    const boxImg = [0, 3, 4, 7];
    const titulot = [
        "Servicios urgentes",
        "Servicio las 24 Horas",
        "Encomiendas",
        "Impresión y Distribución"];
    const desc = [
        "Servicio orientado a personas naturales o pequeños empresarios que quieren realizar envíos rápidos.",
        "Servicio de calidad y responsabilidad, brindamos soluciones adecuadas a sus necesidades.",
        "Servicio orientado a personas naturales o pequeños empresarios que quieren realizar envíos a bajo costo.",
        "Deje su proceso de impresión y distribución en nuestras manos y optimice sus tiempos."];
    const stepsMap = {
        "/": 1,
        "/acercaDe": 2,
        "/servicios": 3,
        "/contacto": 4,
    };


    //Estados
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

    let tituloIndex = 0;
    let descIndex = 0;
    let imagenIndex = 0;





    // En el componente, antes del return:

    // Separar items
    const items = [...Array(8)].map((_, index) => {
        const tieneImagen = boxImg.includes(index);
        if (!tieneImagen) {
            const fondoTexto = `${imagenIndex + 1}`;
            const fondoActual = fondoImages[imagenIndex % fondoImages.length];
            imagenIndex++;
            return {
                type: 'imagen',
                index,
                fondoTexto,
                fondoActual,
            };
        } else {
            const titulo = titulot[tituloIndex++];
            const descripcion = desc[descIndex++];
            return {
                type: 'texto',
                index,
                titulo,
                descripcion,
            };
        }
    });

    // Función para intercalar imagen-texto en móvil
    const intercalarMobile = (items) => {
        const imagenes = items.filter(i => i.type === 'imagen');
        const textos = items.filter(i => i.type === 'texto');
        const result = [];

        const maxLen = Math.max(imagenes.length, textos.length);
        for (let i = 0; i < maxLen; i++) {
            if (i < imagenes.length) result.push(imagenes[i]);
            if (i < textos.length) result.push(textos[i]);
        }
        return result;
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // En el render:
    const itemsToRender = isMobile ? intercalarMobile(items) : items;

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
            <Navbar />

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
                    top: '92%',
                    left: { xs: '0%', sm: '0%', md: '-40%' },
                    zIndex: 4,
                    width: '100%'
                }} />
                {/* {!isMobile && (
                    <Box
                        name='TrianguloArriba'
                        sx={{
                            position: 'absolute',
                            zIndex: 1,
                            top: '10%',
                            left: '5%',
                            backgroundImage: `url(${tri3})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '35rem',
                            width: '35rem'
                        }}
                    />
                )} */}



                {/* Primer Box (Imagen Actual) */}
                <FondoInicio>

                    <Titulo1 titulo={'SERVICIO COURIRER'} sx={{
                        position: 'relative',
                        fontSize: '3rem',
                        zIndex: 1,
                        top: '-1rem',
                        color: '#0000009f',
                        transform: { md: 'rotate(-24.5deg)' }, // 👈 gira 25° hacia la izquierda
                        display: 'inline-block'
                    }} />
                </FondoInicio>
            </Box>
            <Grid container name='Segundo Box'>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    height: '100%',
                    boxSizing: 'border-box',
                    p: { xs: '1rem', sm: '2rem' },
                    gap: '2rem',
                    width: '100vw'
                }}>
                    <Grid spacing={2} size={{ xs: 12, sm: 10, md: 9 }} >
                        <Box name='paso1'
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
                                backgroundImage: `url(${img1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '100%',
                                maxWidth: {
                                    xs: '100%',
                                    sm: '75%'
                                },
                                width: '100%',
                                zIndex: '1'
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
                                    backgroundColor: "#5ed7ffff",
                                    opacity: 0.7,
                                    zIndex: 1
                                }
                            }}>
                                <Titulo1 titulo={'Servicios Urgentes'}
                                    subtitulo={'Servicio orientado a personas naturales o pequeños empresarios que quieren realizar envíos rápidos.'}
                                    sxSubtitulo={{
                                        fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem' },
                                    }}
                                    sx={{
                                        position: 'relative',
                                        alignItems: 'initial',
                                        p: 2,
                                        textAlign: 'right',
                                        zIndex: 2, // 👈 el texto queda encima
                                    }} />
                            </Box>
                        </Box>
                    </Grid>

                    <Grid offset={{ md: 6 }} spacing={2} size={{ xs: 12, sm: 10, md: 10 }}>
                        <Box name='paso3'
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
                                backgroundImage: `url(${img2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '100%',
                                maxWidth: {
                                    xs: '100%',
                                    sm: '75%'
                                },
                                width: '100%',
                                zIndex: '1'
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
                                    backgroundColor: "#5ed7ffff",
                                    opacity: 0.7,
                                    zIndex: 1
                                }
                            }}>
                                <Titulo1 titulo={'Servicio las 24 Horas'}
                                    subtitulo={'Servicio de calidad y responsabilidad, brindamos soluciones adecuadas a sus necesidades.'}
                                    sxSubtitulo={{
                                        fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem' },
                                    }}
                                    sx={{
                                        position: 'relative',
                                        alignItems: 'initial',
                                        p: 2,
                                        textAlign: 'right',
                                        zIndex: 2, // 👈 el texto queda encima
                                    }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid spacing={2} size={{ xs: 12, sm: 10, md: 9 }}>
                        <Box name='paso3'
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
                                backgroundImage: `url(${img3})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '100%',
                                maxWidth: {
                                    xs: '100%',
                                    sm: '75%'
                                },
                                width: '100%',
                                zIndex: '1'
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
                                    backgroundColor: "#5ed7ffff",
                                    opacity: 0.7,
                                    zIndex: 1
                                }
                            }}>
                                <Titulo1 titulo={'Encomiendas'}
                                    subtitulo={'Servicio orientado a personas naturales o pequeños empresarios que quieren realizar envíos a bajo costo.'}
                                    sxSubtitulo={{
                                        fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem' },
                                    }}
                                    sx={{
                                        position: 'relative',
                                        alignItems: 'initial',
                                        p: 2,
                                        textAlign: 'right',
                                        zIndex: 2, // 👈 el texto queda encima
                                    }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid offset={{ md: 6 }} spacing={2} size={{ xs: 12, sm: 10, md: 10 }} >
                        <Box name='paso4'
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
                                backgroundImage: `url(${img4})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '100%',
                                maxWidth: {
                                    xs: '100%',
                                    sm: '75%'
                                },
                                width: '100%',
                                zIndex: '1'
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
                                    backgroundColor: "#5ed7ffff",
                                    opacity: 0.7,
                                    zIndex: 1
                                }
                            }}>
                                <Titulo1 titulo={'Impresion y Distribución'}
                                    subtitulo={'Deje su proceso de impresión y distribución en nuestras manos y optimice sus tiempos'}
                                    sxSubtitulo={{
                                        fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem' },
                                    }}
                                    sx={{
                                        position: 'relative',
                                        alignItems: 'initial',
                                        p: 2,
                                        textAlign: 'right',
                                        zIndex: 2, // 👈 el texto queda encima
                                    }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>


            {/*Tercer Box*/}
            <Box
                sx={{
                    position: "relative",
                    overflow: 'hidden',
                    backgroundColor: '#59c3eaff',
                    color: '#000000ff',
                    py: { xs: 4, sm: 6, md: 8 },
                    px: { xs: 2, sm: 4, md: 6 },
                    minHeight: { xs: '150px', sm: '200px', md: '350px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                {/* Capa de desenfoque */}
                <Box
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
                <Box
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
                </Box>
            </Box>


            {/*Cuarto Box */}
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
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
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
                        p: 2,
                        borderBottom: '5px solid',
                        borderTop: '5px solid',
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                        borderBottomLeftRadius: '15px',
                        borderBottomRightRadius: '15px',
                    }}>
                        <Titulo1 titulo={"¡BIENVENIDOS!"}
                            sx={{ fontSize: '3rem' }}
                            style={{
                                textAlign: "center",
                            }} />
                        <Subtitulo subtitulo={"Somos su mejor aliado"}
                        />
                        <Contenido contenido={"Somos una empresa, con un staff de profesionales altamente calificados, comprometidos con tu gestión, marcando una ventaja comparativa diferencial positiva."} />
                    </Box>
                    <Box name='hola' sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        p: 1
                    }}>
                        <Button
                            variant="text"
                            sx={{
                                maxHeight: "1rem",
                                padding: 2,
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                marginLeft: '1rem',
                                marginRight: '1rem',
                                '&:hover': {
                                    fontWeight: 'bold',
                                    color: 'white',
                                },
                            }}
                        >
                            Realizar Envío
                        </Button>
                    </Box>
                </Box>
                <Box
                    sx={{
                        backgroundImage: `url(${img8})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '1rem',
                        minHeight: {
                            xs: '15rem',
                            sm: '20rem',
                            md: '25rem'
                        },
                        width: {
                            xs: '15rem',   // móviles
                            sm: '20rem',    // tablets
                            md: '20rem',  // escritorios
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
            </Box>

            {/*Quinto Box*/}
            <Ayuda />

            {/*Sexto Box*/}
            <Footer />
        </main >
    );
};