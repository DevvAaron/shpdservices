import { Box, TextField, Button } from '@mui/material'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import FondoInicio from '../hoocks/FondoInicio'
import { Titulo1 } from '../Hoocks/Titulos'
import { useState, useEffect } from 'react'
import fondo1 from '../../assets/contactimg.png';
import Horario from '../hoocks/Horario'

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
                {/* Primer Box (Imagen Actual) */}
                <FondoInicio >

                    <Box sx={{
                        boxSizing: 'border-box',
                        position: 'relative',
                        zIndex: 50,
                        top: '2rem',
                        height: '80vh',
                        width: '90vw',
                        display: 'flex',
                        flexDirection: { md: 'row', xs: 'column' },
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Box sx={{
                            position: 'relative',
                            boxSizing: 'border-box',
                            top: { xs: '-5%' },
                            height: '100%',
                            width: '100%',
                            maxWidth: { xs: '85%', sm: '90%', md: '45%' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            <Titulo1 titulo={'CONTACTANOS'}
                                sx={{
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
                                height: '95vh',
                                width: '40%',
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
                                        maxHeight: {
                                            sm: '40vh'
                                        },
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
                                    p: '1rem',
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
                                            titulo={'HORARIOS DE ATENCIÓN:'}
                                            sx={{ color: '#34bfedff' }}
                                            style={{
                                                fontSize: '1.5rem',
                                                margin: '0'
                                            }}
                                            subtitulo={'De lunes a sabado 9 a.m a 6 p.m'}
                                            sxSubtitulo={{
                                                fontSize: '1rem',
                                            }}>
                                            <Horario />
                                        </Titulo1>
                                    </Box>
                                    <Box sx={{
                                        p: '1rem',
                                        boxSizing: 'border-box',
                                        height: '100%',
                                        maxHeight: {
                                            sm: '15vh'
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
                                                fontSize: '1.5rem',
                                                margin: '0'
                                            }}
                                            subtitulo={'Dirección fisica de SHPD Services Mexico'}
                                            sxSubtitulo={{
                                                fontSize: '1rem',
                                            }} />
                                    </Box>
                                    <Box sx={{
                                        p: '1rem',
                                        boxSizing: 'border-box',
                                        height: '100%',
                                        maxHeight: {
                                            sm: '15vh'
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
                                                fontSize: '1.5rem',
                                                margin: '0'
                                            }}
                                            subtitulo={'+52 946 021 240'}
                                            sxSubtitulo={{
                                                fontSize: '1rem',
                                            }} />
                                    </Box>
                                    <Box sx={{
                                        p: '1rem',
                                        boxSizing: 'border-box',
                                        height: '100%',
                                        maxHeight: {
                                            sm: '15vh'
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
                                                fontSize: '1.5rem',
                                                margin: '0'
                                            }}
                                            subtitulo={'ventas@jercourier.com'}
                                            sxSubtitulo={{
                                                fontSize: '1rem',
                                            }} />
                                    </Box>

                                </Box>
                            </Box>
                        )}
                    </Box>
                </FondoInicio>

            </Box>
            <Box sx={{
                boxSizing: 'border-box',
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
                        overflow: 'hidden',
                    }}
                >
                    <iframe
                        title="Mapa de Google"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.516896411934!2d-99.13320858462996!3d19.43260798688548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff1a5b5b0f5b%3A0xabc1234567890!2sCiudad%20de%20México!5e0!3m2!1ses!2smx!4v1694305600000!5m2!1ses!2smx"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}