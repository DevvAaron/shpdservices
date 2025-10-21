import { Box, TextField, Button } from "@mui/material";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Subtitulo, Titulo1 } from '../Hoocks/Titulos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import img1 from '../../assets/fondoContac.jpg'
import { useState, useEffect } from 'react';
export default function Contacto() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

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
                display: "flex",
                flexDirection: "column",
                width: "100%",
                backgroundColor: "#ff000000",
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
                sx={{
                    name: 'primero',
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        sm: 'column',
                        md: 'row'
                    },
                    backgroundImage: `url(${img1})`,
                    justifyContent: 'space-evenly',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    alignItems: 'center',
                    maxWidth: {
                        xs: '30rem',
                        sm: '60rem',
                        md: '100%'
                    },
                    MaxHeight: {
                        xs: '60rem',
                        sm: '30rem',
                        md: '30rem'
                    },
                    height: '100vh',
                    px: { xs: 2, sm: 4, md: 8 },
                    overflow: 'hidden'
                }}
            >
                <Box sx={{
                    position: 'relative',
                }}>

                    {/* Overlay difuminado */}
                    <Box
                        sx={{

                            position: "absolute",
                            width: "100%",
                            height: "80%",
                            marginTop: '4rem',
                            background: "rgba(0, 0, 0, 0.52)", // capa translúcida
                            backdropFilter: "blur(2px)", // difuminado
                            zIndex: 1,
                            p: 2
                        }}
                    />
                    <Box name='BoxFormulario' sx={{
                        position: "relative",
                        left: { xs: '7%', sm: '5%', md: '3%' },
                        zIndex: 2, color: 'white'
                    }}>
                        <Titulo1 titulo={'Contactanos'}
                            sx={{
                                marginTop: {
                                    xs: '2rem'
                                },
                                p: '1rem',
                                my: '1rem',
                                color: '#13B5EA'
                            }}
                            style={{
                                border: '3px solid #13B5EA',
                                borderRadius: '0.5rem',
                                backgroundColor: 'white',
                            }} />
                        <Box
                            sx={{
                                maxWidth: {
                                    xs: '100%',
                                    sm: '20rem',
                                    md: '40rem'
                                },
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
                                        backgroundColor: 'white',
                                        borderRadius: '0.5rem',
                                        '& fieldset': {
                                            borderColor: '#13B5EA',
                                            borderWidth: '2px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#13B5EA',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#13B5EA',
                                        },
                                    },
                                }}
                                slotProps={{
                                    input: {
                                        sx: {
                                            color: "#13B5EA",
                                        }, // color del texto que escribe el usuario

                                    },
                                    inputLabel: {
                                        sx: { color: "#13B5EA" }, // color del label
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
                                        backgroundColor: 'white',
                                        borderRadius: '0.5rem',
                                        '& fieldset': {
                                            borderColor: '#13B5EA',
                                            borderWidth: '2px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#13B5EA',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#13B5EA',
                                        },
                                    },
                                }}
                                slotProps={{
                                    input: {
                                        sx: {
                                            color: "#13B5EA",
                                        }, // color del texto que escribe el usuario

                                    },
                                    inputLabel: {
                                        sx: { color: "#13B5EA" }, // color del label
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
                                        backgroundColor: 'white',
                                        borderRadius: '0.5rem',
                                        '& fieldset': {
                                            borderColor: '#13B5EA',
                                            borderWidth: '2px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#13B5EA',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#13B5EA',
                                        },
                                    },
                                }}
                                slotProps={{
                                    input: {
                                        sx: {
                                            color: "#13B5EA",
                                        }, // color del texto que escribe el usuario

                                    },
                                    inputLabel: {
                                        sx: { color: "#13B5EA" }, // color del label
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
                                        backgroundColor: 'white',
                                        borderRadius: '0.5rem',
                                        '& fieldset': {
                                            borderColor: '#13B5EA',
                                            borderWidth: '2px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#13B5EA',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#13B5EA',
                                        },
                                    },
                                }}
                                slotProps={{
                                    input: {
                                        sx: {
                                            color: "#13B5EA",
                                        }, // color del texto que escribe el usuario

                                    },
                                    inputLabel: {
                                        sx: { color: "#13B5EA" }, // color del label
                                    },
                                }}
                            />
                        </Box>
                        <Button
                            variant="text"
                            sx={{
                                marginTop: 2,
                                fontSize: 20,
                            }}
                        >
                            Realizar Envío
                        </Button>
                    </Box>
                </Box>
                {!isMobile && (
                    <Box name='BoxDatos'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1, position: "relative", zIndex: 2
                        }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'white' }}>
                            <LocationOnIcon />
                            <Subtitulo subtitulo={'Avenida Morelos 163 A101 Congreso de la unión y la Viga Jamaica C.P. 15800 VENUSTIANO CARRANZA, CDMX'} style={{ paddingBottom: '3rem' }} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'white' }}>
                            <PhoneIcon />
                            <Subtitulo subtitulo={'946 021 240'} style={{ paddingBottom: '3rem' }} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'white' }}>
                            <EmailIcon />
                            <Subtitulo subtitulo={'ventas@jercourier.com'} style={{ paddingBottom: '3rem' }} />
                        </Box>
                    </Box>
                )}
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: {
                        xs: '300px',
                        sm: '400px',
                        md: '500px'
                    },
                    margin: '2rem auto',
                    borderRadius: 2,
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
            {/* Sección de Mapa */}
            <Footer />
        </main>
    );
}
