import { Box, Button, Typography, Stack, Grid } from '@mui/material'
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

import img1 from '../../assets/impresionDistribucion.png'
import img2 from '../../assets/volantesDistribucion.png'
import img3 from '../../assets/mensajeriaMasiva.png'
import img4 from '../../assets/mensajeriaExpress.png'

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
                        <Titulo1 titulo={'Rapidez'}
                            subtitulo={'Nos esforzamos por cumplir los plazos establecidos en nuestras entregas'}
                            sxSubtitulo={{
                                fontSize: { xs: '0.9rem', sm: '1.1rem', md: '0.9rem' },
                            }}
                            sx={{
                                position: 'relative',
                                alignItems: 'initial',
                                p: 2,
                                textAlign: 'left',
                                zIndex: 2, // 👈 el texto queda encima
                            }} />
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
                        <Titulo1 titulo={'Responsabilidad'}
                            subtitulo={'Contamos con personal calificado y con experiencia el cual garantiza una entrega al tiempo señalado'}
                            sxSubtitulo={{
                                fontSize: { xs: '0.9rem', sm: '1.1rem', md: '0.9rem' },
                            }}
                            sx={{
                                position: 'relative',
                                alignItems: 'initial',
                                p: 2,
                                textAlign: 'left',
                                zIndex: 2, // 👈 el texto queda encima
                            }} />
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
                        <Titulo1 titulo={'Eficiencia'}
                            subtitulo={'Aplicamos tecnologías que van de acuerdo al mercado más exigente esto garantiza eficiencia'}
                            sxSubtitulo={{
                                fontSize: { xs: '0.9rem', sm: '1.1rem', md: '0.9rem' },
                            }}
                            sx={{
                                position: 'relative',
                                alignItems: 'initial',
                                p: 2,
                                textAlign: 'left',
                                zIndex: 2, // 👈 el texto queda encima
                            }} />
                    </Box>


                </Box>
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
                    width: '100%'
                }}
            >
                <Box
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
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        width: isMobile ? "100%" : "70%",
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
                            height: '100%',
                            fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
                            textAlign: 'justify'
                        }} variant='body'>
                            Deje su proceso de impresión y distribución en nuestras manos y optimice sus tiempos, trabajando este proceso
                            integral con un solo proveedor, nosotros nos encargamos de la impresión y distribución ya sea empaquetada o
                            habilitada individualmente en Lima y provincias para sus sucursales, oficinas o clientes. Contamos con alianzas
                            con diferentes imprentas de prestigio que por el volumen consolidado de servicios de todos nuestros clientes,
                            nos permiten atenderlo con costos altamente competitivos.
                        </Typography>
                    </Box>
                </Box>

                <Grid container sx={{
                    borderRadius: '2rem',
                    backgroundColor: "#54f9ff41",
                    width: '100%',
                    height: '100%',
                    maxHeight: { xs: '60vh', md: '85vh' }
                }}>
                    <Grid name='Distribución de volantes' size={{ xs: 12, md: 8 }} >
                        <Stack spacing={2} sx={{
                            p: '1rem',
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
                                fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
                                textAlign: 'justify'
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
                                            fontSize: { xs: '0.8rem', sm: '1rem' }
                                        }}
                                            variant='subtitle1'>
                                            Volanteo Personalizado
                                        </Typography>
                                        {!isMobile && (
                                            <Typography sx={{
                                                fontSize: { xs: '0.7rem', sm: '0.8rem' },
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
                                            fontSize: { xs: '0.8rem', sm: '1rem' }
                                        }}
                                            variant='subtitle1'>
                                            Volanteo Simple
                                        </Typography>
                                        {!isMobile && (
                                            <Typography sx={{
                                                fontSize: { xs: '0.7rem', sm: '0.8rem' },
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
                                            fontSize: { xs: '0.8rem', sm: '1rem' }
                                        }}
                                            variant='subtitle1'>
                                            Modalidades de entrega volanteo
                                        </Typography>
                                        {!isMobile && (
                                            <Typography sx={{
                                                fontSize: { xs: '0.7rem', sm: '0.8rem' },
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
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            width: "33%",
                            minHeight: '25.5vh',
                            maxHeight: '100vh',
                        }} />
                    )}
                </Grid>
                <Grid container sx={{
                    borderRadius: '2rem',
                    backgroundColor: "#54f9ff41",
                    width: '100%',
                    height: '100%',
                    maxHeight: { xs: '60vh', md: '85vh' }
                }}>
                    {!isMobile && (
                        <Box sx={{
                            backgroundImage: `url(${img3})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            width: "30%",
                            minHeight: '25.5vh',
                            maxHeight: '100vh',
                        }} />
                    )}
                    <Grid name='MensajeriaMasivos' size={{ xs: 12, md: 8 }} >
                        <Stack spacing={2} sx={{
                            p: '1rem',
                        }}>
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: { xs: '1rem', sm: '1.6rem' }
                            }}
                                variant='h5'>
                                Mensajeria Masivos
                            </Typography>
                            <Typography sx={{
                                height: '100%',
                                fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
                                textAlign: 'justify'
                            }} variant='body'>
                                Servicio especializado en entrega de grandes volúmenes de envíos con peso entre 20 a 500 grs.
                                tales como revistas, catálogos, boletines, invitaciones, Mailing, Estados de Cuentas, etc.
                            </Typography>
                            <Grid container spacing={2} sx={{
                                justifyContent: 'center'
                            }}>
                                <Grid size={12}>
                                    <Stack spacing={2}>
                                        <Typography sx={{
                                            fontWeight: 'bold',
                                            fontSize: { xs: '0.8rem', sm: '1rem' }
                                        }}
                                            variant='subtitle1'>
                                            Tipos de Servicio:
                                        </Typography>
                                        <Grid container sx={{
                                            justifyContent: 'center'
                                        }}>
                                            <Grid size={{ xs: 6, md: 4 }}>
                                                <Typography sx={{
                                                    fontWeight: 'bold',
                                                    fontSize: { xs: '0.8rem', sm: '1rem' }
                                                }}
                                                    variant='subtitle2'>
                                                    - Servicio de 1, 2, 3 y 4 días.
                                                </Typography>
                                            </Grid>
                                            <Grid size={{ xs: 6, md: 4 }}>
                                                <Typography sx={{
                                                    fontWeight: 'bold',
                                                    fontSize: { xs: '0.8rem', sm: '1rem' }
                                                }}
                                                    variant='subtitle2'>
                                                    - Volanteo personalizado
                                                </Typography>
                                            </Grid>
                                            <Grid size={{ xs: 8, md: 4 }}>
                                                <Typography sx={{
                                                    fontWeight: 'bold',
                                                    fontSize: { xs: '0.8rem', sm: '1rem' }
                                                }}
                                                    variant='subtitle2'>
                                                    - Volanteo Simple
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Stack>
                                </Grid>

                            </Grid>
                        </Stack>
                    </Grid>
                </Grid>

                <Grid container sx={{
                    borderRadius: '2rem',
                    backgroundColor: "#54f9ff41",
                    width: '100%',
                    height: '100%',
                    maxHeight: { xs: '60vh', md: '85vh' }
                }}>
                    <Stack direction={'row'}>
                        <Grid name='Mensajeria Express' size={{ xs: 12, md: 8 }} >
                            <Stack spacing={2} sx={{
                                p: '1rem',
                            }}>
                                <Typography sx={{
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1rem', sm: '1.6rem' }
                                }}
                                    variant='h5'>
                                    Mensajeria Express
                                </Typography>
                                <Typography sx={{
                                    height: '100%',
                                    fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
                                    textAlign: 'justify'
                                }} variant='body'>
                                    Distribución Urgente de sus documentos y/o paquetes, a nivel Local en tiempos reales de tránsito, con la confirmación de entrega vía teléfono para su tranquilidad y satisfacción.
                                    Entrega certificada puerta a puerta con una orden de servicio JER COURIER.
                                </Typography>
                            </Stack>
                            <Stack spacing={2} sx={{
                                px: '1rem',
                                pb: '1rem'
                            }}>
                                <Grid container spacing={2} sx={{
                                    justifyContent: 'center'
                                }}>
                                    <Grid size={{ xs: 6, }}>
                                        <Typography sx={{
                                            fontWeight: 'bold',
                                            fontSize: { xs: '0.8rem', sm: '1rem' }
                                        }}
                                            variant='subtitle1'>
                                            Tiempos de Distribución:
                                        </Typography>
                                    </Grid>
                                    <Grid size={{ xs: 6, }}>
                                        <Typography sx={{
                                            fontWeight: 'bold',
                                            fontSize: { xs: '0.8rem', sm: '1rem' }
                                        }}
                                            variant='subtitle1'>
                                            Zonas de Distribución
                                        </Typography>
                                    </Grid>
                                    <Grid size={{ xs: 6, }}>
                                        <Stack spacing={1}>
                                            <Typography sx={{
                                                fontWeight: 'bold',
                                                fontSize: { xs: '0.8rem', sm: '1rem' }
                                            }}
                                                variant='subtitle2'>
                                                - Servicio Express (04 a 06 hrs)
                                            </Typography>
                                            <Typography sx={{
                                                fontWeight: 'bold',
                                                fontSize: { xs: '0.8rem', sm: '1rem' }
                                            }}
                                                variant='subtitle2'>
                                                - Servicio Express (05 a 07 hrs)
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid size={{ xs: 6, }} >
                                        <Stack spacing={1}>
                                            <Typography sx={{
                                                fontWeight: 'bold',
                                                fontSize: { xs: '0.8rem', sm: '1rem' }
                                            }}
                                                variant='subtitle2'>
                                                - Urbana
                                            </Typography>
                                            <Typography sx={{
                                                fontWeight: 'bold',
                                                fontSize: { xs: '0.8rem', sm: '1rem' }
                                            }}
                                                variant='subtitle2'>
                                                - Periférica
                                            </Typography>
                                            <Typography sx={{
                                                fontWeight: 'bold',
                                                fontSize: { xs: '0.8rem', sm: '1rem' }
                                            }}
                                                variant='subtitle2'>
                                                - Extrema
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Stack>
                        </Grid>
                        {!isMobile && (
                            <Box sx={{
                                backgroundImage: `url(${img4})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                width: "40%",
                                minHeight: '25.5vh',
                                maxHeight: '100vh',
                            }} />
                        )}
                    </Stack>
                </Grid>

            </Box>
            {/*Footer */}
            <Footer />
        </main >
    )
}