
import { useState, useEffect } from 'react'

import FondoInicio from '../hoocks/FondoInicio'
import Horario from '../hoocks/Horario'
import { Titulo1 } from '../hoocks/Titulos'

import Navbar from '../components/ComponenteNavbar'
import Footer from '../components/ComponenteFooter'

import fondo1 from '../assets/contactimg.png';

import { Box, TextField, Button, Container } from '@mui/material'

export default function ContactoPage() {
    //Estados
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Container disableGutters maxWidth={false}
            sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                backgroundColor: "#ff000000",
            }}>

            <Navbar sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1000, // asegúrate que esté encima de todo
            }} />

            {/* Primer Box  */}
            <FondoInicio >
                <Box sx={{
                    boxSizing: 'border-box',
                    position: 'relative',
                    zIndex: 50,
                    width: '100vw',
                    display: 'flex',
                    flexDirection: { md: 'row', xs: 'column' },
                    justifyContent: 'space-evenly',
                }}>
                    <Box sx={{
                        width: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                        <Titulo1 titulo={'CONTACTANOS'}
                            sx={{
                                margin: { xs: '0.5rem', md: '1rem' },
                                p: { xs: '0.5rem', md: '1rem' },
                                color: '#fff',
                            }}
                            style={{
                                border: '3px solid #fff',
                                borderRadius: '0.5rem',
                                backgroundColor: 'transparent',
                            }} />
                        <Box
                            sx={{
                                maxWidth: {
                                    xs: '100%',
                                    sm: '20rem',
                                    md: '25rem'
                                },
                                width: '100%',
                                margin: "0 auto",
                                display: "grid",
                                gap: 3,
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    sm: "repeat(2, 1fr)",
                                },
                                gridAutoRows: "auto",
                            }}
                        >
                            {/* Nombre */}
                            <TextField
                                label="Nombre"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        backgroundColor: 'transparent',
                                        borderRadius: '0.5rem',
                                        '& fieldset': {
                                            borderColor: '#fff',
                                            borderWidth: '2px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#fff',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#fff',
                                        },
                                        '& .MuiInputBase-input': {
                                            p: {
                                                xs: '0.2rem', // móviles
                                                sm: '1rem', // tablets en adelante
                                            },
                                            fontSize: '0.9rem',
                                            color: '#fff',
                                        },
                                    },
                                }}
                                slotProps={{
                                    input: {
                                        sx: {
                                            color: "#fff",
                                        }, // color del texto que escribe el usuario

                                    },
                                    inputLabel: {
                                        shrink: { xs: true },
                                        sx: { color: "#fff" }, // color del label
                                    },
                                }}
                            />

                            {/* Teléfono */}
                            <TextField
                                label="Teléfono"
                                variant="outlined"
                                fullWidth
                                color="#ffffffff"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '0.5rem',
                                        '& fieldset': {
                                            borderColor: '#fff',
                                            borderWidth: '2px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#fff',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#fff',
                                        },
                                        '& .MuiInputBase-input': {
                                            p: {
                                                xs: '0.2rem', // móviles
                                                sm: '1rem', // tablets en adelante
                                            },
                                            fontSize: '0.9rem',
                                            color: '#fff',
                                        },
                                    },
                                }}
                                slotProps={{
                                    input: {
                                        sx: {
                                            color: "#fff",
                                        }, // color del texto que escribe el usuario

                                    },
                                    inputLabel: {
                                        shrink: { xs: true },
                                        sx: {
                                            color: "#fff",
                                        }, // color del label
                                    },
                                }}
                            />

                            {/* Correo: Ocupa ambas columnas desde sm */}
                            <TextField
                                label="Correo"
                                variant="outlined"
                                fullWidth
                                type="email"
                                sx={{
                                    gridColumn: {
                                        xs: "auto",
                                        sm: "1 / span 2",
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '0.5rem',
                                        '& fieldset': {
                                            borderColor: '#fff',
                                            borderWidth: '2px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#fff',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#fff',
                                        },
                                        '& .MuiInputBase-input': {
                                            p: {
                                                xs: '0.2rem', // móviles
                                                sm: '1rem', // tablets en adelante
                                            },
                                            fontSize: '0.9rem',
                                            color: '#fff',
                                        },
                                    },
                                }}
                                slotProps={{
                                    input: {
                                        sx: {
                                            color: "#fff",
                                        }, // color del texto que escribe el usuario

                                    },
                                    inputLabel: {
                                        shrink: { xs: true },
                                        sx: { color: "#fff" }, // color del label
                                    },
                                }}
                            />

                            {/* Mensaje: Ocupa ambas columnas desde sm */}
                            <TextField
                                label="Mensaje"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                sx={{
                                    gridColumn: {
                                        xs: "auto",
                                        sm: "1 / span 2",
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '0.5rem',
                                        '& fieldset': {
                                            borderColor: '#fff',
                                            borderWidth: '2px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#fff',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#fff',
                                        },
                                        '& .MuiInputBase-input': {
                                            p: {
                                                xs: '0.2rem', // móviles
                                                sm: '1rem', // tablets en adelante
                                            },
                                            fontSize: '0.9rem',
                                            color: '#fff',
                                        },
                                    },
                                }}
                                slotProps={{
                                    input: {
                                        sx: {
                                            color: "#fff",
                                        }, // color del texto que escribe el usuario

                                    },
                                    inputLabel: {
                                        shrink: { xs: true },
                                        sx: { color: "#fff" }, // color del label
                                    },
                                }}
                            />
                        </Box>
                        <Button
                            className='btnContacto'
                            variant="text"
                            sx={{
                                marginTop: 2,
                                fontSize: { xs: '15px', sm: '20px' },
                            }}
                        >
                            Realizar Envío
                        </Button>

                    </Box>

                    {!isMobile && (

                        <Box sx={{
                            boxSizing: 'border-box',
                            width: '100%',
                            maxWidth: '30%',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            p: '1rem'
                        }}>

                            <Box sx={{
                                position: 'relative',
                                zIndex: '1',
                                boxSizing: 'border-box',
                                height: '100%',
                                width: '100%',
                                backgroundColor: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}>
                                <Box sx={{
                                    border: '5px solid #fff',
                                    borderRadius: '20px',
                                    p: '1rem',
                                    backgroundImage: `url(${fondo1})`,
                                    backgroundRepeat: 'no-repeat',
                                    opacity: '0.7',
                                    backgroundSize: 'cover',
                                    boxSizing: 'border-box',
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column'
                                }} />

                                <Box
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        opacity: '0.5',
                                        backgroundColor: "#ffffffa9",
                                        clipPath: 'polygon(100% 0, 60% 100%, 100% 100%);',
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        opacity: '0.5',
                                        backgroundColor: "#ffffffa9",
                                        clipPath: 'polygon(40% 0, 0 100%, 0 0);',
                                    }}
                                />
                            </Box>

                            <Box sx={{
                                p: '0.5rem',
                                boxSizing: 'border-box',
                                height: '100%',
                                width: '100%',
                                backgroundColor: '#ffffffd0',
                                border: '5px solid #fff',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column'
                            }}>
                                <Box sx={{
                                    p: '1rem',
                                    boxSizing: 'border-box',
                                    height: '100%',
                                    maxHeight: {
                                        sm: '15vh'
                                    },
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    ":hover": {
                                        borderBottom: '3px solid #13B5EA',
                                    },
                                }} >
                                    <Titulo1
                                        titulo={'HORARIOS DE ATENCIÓN:'}
                                        sx={{ color: '#34bfedff' }}
                                        style={{
                                            fontSize: '1rem',
                                            margin: '0'
                                        }}
                                        subtitulo={'De lunes a sabado 9 a.m a 6 p.m'}
                                        sxSubtitulo={{
                                            fontSize: '0.9rem',
                                        }}>
                                        <Horario />
                                    </Titulo1>
                                </Box>
                                <Box sx={{
                                    p: '1rem',
                                    boxSizing: 'border-box',
                                    height: '100%',
                                    maxHeight: {
                                        sm: '12vh'
                                    },
                                    width: '100%', ":hover": {
                                        borderBottom: '3px solid #13B5EA',
                                    },
                                    display: 'flex',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column'
                                }} >
                                    <Titulo1
                                        titulo={'DIRECCIÓN:'}
                                        sx={{ color: '#34bfedff' }}
                                        style={{
                                            fontSize: '1rem',
                                            margin: '0'
                                        }}
                                        subtitulo={'Avenida Morelos 163 A101 Congreso de la unión y la Viga Jamaica C.P. 15800 VENUSTIANO CARRANZA, CDMX'}
                                        sxSubtitulo={{
                                            fontSize: '0.9rem',
                                        }} />
                                </Box>
                                <Box sx={{
                                    p: '1rem',
                                    boxSizing: 'border-box',
                                    height: '100%',
                                    maxHeight: {
                                        sm: '12vh'
                                    },
                                    width: '100%', ":hover": {
                                        borderBottom: '3px solid #13B5EA',
                                    },
                                    display: 'flex',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column'
                                }} >
                                    <Titulo1
                                        titulo={'TELEFONO:'}
                                        sx={{ color: '#34bfedff' }}
                                        style={{
                                            fontSize: '1rem',
                                            margin: '0'
                                        }}
                                        subtitulo={'767-53322 // 767-53323'}
                                        sxSubtitulo={{
                                            fontSize: '0.9rem',
                                        }} />
                                </Box>
                                <Box sx={{
                                    p: '1rem',
                                    boxSizing: 'border-box',
                                    height: '100%',
                                    maxHeight: {
                                        sm: '12vh'
                                    },
                                    width: '100%', ":hover": {
                                        borderBottom: '3px solid #13B5EA',
                                    },
                                    display: 'flex',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    mb: '1rem'
                                }} >
                                    <Titulo1
                                        titulo={'CORREO ELECTRONICO:'}
                                        sx={{ color: '#34bfedff' }}
                                        style={{
                                            fontSize: '1rem',
                                            margin: '0'
                                        }}
                                        subtitulo={'informes@sphdservices.com // ventas@sphdservices.com'}
                                        sxSubtitulo={{
                                            fontSize: '0.9rem',
                                        }} />
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Box>
            </FondoInicio>

            <Box sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Box
                    sx={{
                        width: '100%',
                        height: {
                            xs: '300px',
                            sm: '25rem'
                        },
                        margin: '2rem auto',
                    }}
                >
                    <iframe
                        title="Mapa - Avenida Morelos 163 A101, CDMX"
                        src="https://www.google.com/maps?q=Avenida%20Morelos%20163%20A101%2C%20Congreso%20de%20la%20unión%20y%20la%20Viga%20Jamaica%2C%20C.P.%2015800%2C%20VENUSTIANO%20CARRANZA%2C%20CDMX&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Box>
            </Box>
            <Footer />
        </Container>
    )
}