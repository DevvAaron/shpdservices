import { Box, Button } from '@mui/material'
import { Titulo1 } from '../Hoocks/Titulos'
import Navbar from '../Header/Navbar'
import fondo from '../../assets/fondo.jpg';
import Footer from '../Footer/Footer'

import serv1 from '../../assets/servAlmace.jpg'
import serv2 from '../../assets/servMudanza.jpg'
import serv3 from '../../assets/servDistri.jpg'


import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import InicioPrueba from '../Acercade/InicioPrueba';
export default function ServiciosPage() {
    const router = useNavigate();
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
            <InicioPrueba />

            {/* Primer Box */}
            <Box
                name="Primer Box"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    padding: '0.8rem',
                    overflow: 'hidden',
                    height: '100vh',
                    maxHeight: { xs: '50vh', sm: '50vh', md: '30vh' },
                    backgroundImage: `url(${fondo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Capa de desenfoque */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 134, 244, 0.48)',
                        opacity: '0.7',
                        zIndex: 0,
                    }}
                />
                {/* Contenedor Acerca de */}
                <Box
                    name="ContenedorPrincipal"
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        flexDirection: {
                            xs: 'column', // En móvil apilado
                            md: 'row'     // Desde desktop, lado a lado
                        },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        margin: '0 auto',
                        maxWidth: {
                            xs: '15rem',
                            sm: '40rem',
                            md: '100%'
                        },
                        gap: 4,
                        py: 4,
                        px: { xs: 2, sm: 4 },
                    }}
                >
                    <Titulo1 titulo={'Servicios'} sx={{
                        position: 'relative',
                        zIndex: 1,
                        top: '1.5rem',
                        left: 0,
                        color: '#ffffff9f',
                        transform: 'rotate(-25deg)', // 👈 gira 25° hacia la izquierda
                        display: 'inline-block'
                    }} />
                </Box>
            </Box>
            {/*Segundo Box */}
            <Box name='Segundo Box'
                sx={{
                    display: 'flex',
                    backgroundColor: '#cceaffff',
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
                        flexDirection: 'row'
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
                        height: '70%',
                        top: { xs: '20%', sm: '15%' },
                        left: { xs: '5%', sm: '20%', md: '25%' },
                        right: { xs: '5%', sm: '5%' },
                        zIndex: '2',
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            borderRadius: '2rem',
                            backgroundColor: "white",
                            opacity: 0.8,
                            zIndex: 1
                        }
                    }}>
                        <Titulo1 titulo={'Servicio de distribucion'}
                            subtitulo={'Entrega puntual en todo destino'}
                            sxSubtitulo={{
                                paddingBottom: { xs: '2rem', sm: '1rem' },
                            }}
                            sx={{
                                position: 'relative',
                                alignItems: 'initial',
                                paddingTop: '1rem', fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
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
                                bgcolor: 'transparent',
                                fontFamily: 'Barlow',
                                color: '#000000ff',
                                cursor: 'pointer',
                                zIndex: 2, // 👈 también encima
                                ":hover": {
                                    bgcolor: '#13B5EA'
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
                        height: '70%',
                        top: { xs: '20%', sm: '15%' },
                        left: { xs: '5%', sm: '20%', md: '25%' },
                        right: { xs: '5%', sm: '5%' },
                        zIndex: '2',
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            borderRadius: '2rem',
                            backgroundColor: "white",
                            opacity: 0.8,
                            zIndex: 1
                        }
                    }}>
                        <Titulo1 titulo={'Servicio de mudanza'}
                            subtitulo={'Servicio integral puerta a puerta'}
                            sxSubtitulo={{
                                paddingBottom: { xs: '2rem', sm: '1rem' },
                            }}
                            sx={{
                                position: 'relative',
                                alignItems: 'initial',
                                paddingTop: '1rem', fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
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
                                bgcolor: 'transparent',
                                fontFamily: 'Barlow',
                                color: '#000000ff',
                                cursor: 'pointer',
                                zIndex: 2, // 👈 también encima
                                ":hover": {
                                    bgcolor: '#13B5EA'
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
                        height: '70%',
                        top: { xs: '20%', sm: '15%' },
                        left: { xs: '5%', sm: '20%', md: '25%' },
                        right: { xs: '5%', sm: '5%' },
                        zIndex: '2',
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            borderRadius: '2rem',
                            backgroundColor: "white",
                            opacity: 0.8,
                            zIndex: 1
                        }
                    }}>
                        <Titulo1 titulo={'Servicio de almacenaje'}
                            subtitulo={'Gestión eficiente de inventarios'}
                            sxSubtitulo={{
                                paddingBottom: { xs: '2rem', sm: '1rem' },
                            }}
                            sx={{
                                position: 'relative',
                                alignItems: 'initial',
                                paddingTop: '1rem', fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
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
                                bgcolor: 'transparent',
                                fontFamily: 'Barlow',
                                color: '#000000ff',
                                cursor: 'pointer',
                                zIndex: 2, // 👈 también encima
                                ":hover": {
                                    bgcolor: '#13B5EA'
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