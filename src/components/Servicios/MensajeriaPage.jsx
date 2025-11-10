import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Header/Navbar";
import { Titulo1 } from "../Hoocks/Titulos";
import FondoInicio from "../hoocks/FondoInicio";
import { Box, Typography, Stack, Grid } from "@mui/material";
import Footer from "../Footer/Footer";


import img3 from '../../assets/mensajeriaMasiva.png'
import img4 from '../../assets/mensajeriaExpress.png'
export default function MensajeriaPage() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

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
                {/* {!isMobile && (<Box
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
                />)} */}
                <FondoInicio>

                    <Titulo1 titulo={'Mensajeria'} sx={{
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
                                fontSize: { xs: '1.2rem', sm: '1.6rem', md:'2rem' }
                            }}
                                variant='h5'>
                                Mensajeria Masivos
                            </Typography>
                            <Typography sx={{
                                height: '100%',
                                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
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
                                            fontSize: { xs: '1.1rem', sm: '1.5rem' }
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
                                                    fontSize: { xs: '1rem', sm: '1.1rem' }
                                                }}
                                                    variant='subtitle2'>
                                                    - Servicio de 1, 2, 3 y 4 días.
                                                </Typography>
                                            </Grid>
                                            <Grid size={{ xs: 6, md: 4 }}>
                                                <Typography sx={{
                                                    fontWeight: 'bold',
                                                    fontSize: { xs: '1rem', sm: '1.1rem' }
                                                }}
                                                    variant='subtitle2'>
                                                    - Volanteo personalizado
                                                </Typography>
                                            </Grid>
                                            <Grid size={{ xs: 8, md: 4 }}>
                                                <Typography sx={{
                                                    fontWeight: 'bold',
                                                    fontSize: { xs: '1rem', sm: '1.1rem' }
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
                    justifyContent: 'center',
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
                                    fontSize: { xs: '1rem', sm: '1.6rem',md:'2rem' }
                                }}
                                    variant='h5'>
                                    Mensajeria Express
                                </Typography>
                                <Typography sx={{
                                    height: '100%',
                                    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
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
                                            fontSize: { xs: '1.1rem', sm: '1.4rem' }
                                        }}
                                            variant='subtitle1'>
                                            Tiempos de Distribución
                                        </Typography>
                                    </Grid>
                                    <Grid size={{ xs: 6, }}>
                                        <Typography sx={{
                                            fontWeight: 'bold',
                                            fontSize: { xs: '1.1rem', sm: '1.5rem' }
                                        }}
                                            variant='subtitle1'>
                                            Zonas de Distribución
                                        </Typography>
                                    </Grid>
                                    <Grid size={{ xs: 6, }}>
                                        <Stack spacing={1}>
                                            <Typography sx={{
                                                fontWeight: 'bold',
                                                fontSize: { xs: '1rem', sm: '1.1rem' }
                                            }}
                                                variant='subtitle2'>
                                                - Servicio Express (04 a 06 hrs)
                                            </Typography>
                                            <Typography sx={{
                                                fontWeight: 'bold',
                                                fontSize: { xs: '1rem', sm: '1.1rem' }
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
                                                fontSize: { xs: '1rem', sm: '1.1rem' }
                                            }}
                                                variant='subtitle2'>
                                                - Urbana
                                            </Typography>
                                            <Typography sx={{
                                                fontWeight: 'bold',
                                                fontSize: { xs: '1rem', sm: '1.1rem' }
                                            }}
                                                variant='subtitle2'>
                                                - Periférica
                                            </Typography>
                                            <Typography sx={{
                                                fontWeight: 'bold',
                                                fontSize: { xs: '1rem', sm: '1.1rem' }
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
        </main>
    )
}