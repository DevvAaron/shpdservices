import {
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Box,
    colors,
    Typography
} from '@mui/material'
import Navbar from "../Header/Navbar"
import { useState, useEffect } from 'react';
import { Titulo1 } from "../Hoocks/Titulos";
import Footer from '../Footer/Footer';
import Ayuda from '../Footer/Ayuda';
import fondo1 from '../../assets/fondo.jpg';
import fondo2 from '../../assets/fondo2.jpg';
import AnimatedBox from '../Hoocks/AnimatedBox';
const imagenes = [fondo1, fondo2];

export default function Programacion() {

    const [index, setIndex] = useState(0);
    const tipos = ['DNI', 'CE', 'RUC', 'PASAPORTE'];
    const [tipoDoc, setTipoDoc] = useState('DNI');
    const [numDoc, setNumDoc] = useState('');
    const [verifDNI, setVerifDNI] = useState('');
    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
        }, 3000); // Cambia de imagen cada 5 segundos

        return () => clearInterval(intervalo);
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
            <Navbar />
            {/* Espacio para compensar el Navbar fijo */}
            <Box sx={{ height: '80px' }} />

            {/* Primer Box */}
            <Box
                name="Primer Box"
                sx={{
                    position: 'relative',
                    padding: '0.8rem',
                    overflow: 'hidden',
                    backgroundImage: `url(${imagenes[index]})`,
                    transition: 'background-image 1s ease-in-out',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >{/* Capa de desenfoque */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        zIndex: 0,
                    }}
                />

                {/* Contenedor de ambos lados */}
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: {
                            xs: 'column', // En móvil apilado
                            md: 'row'     // Desde desktop, lado a lado
                        },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        width: {
                            xs: '20rem',
                            sm: '40rem',
                            md: '60rem'
                        },
                        gap: 4,
                        py: 4,
                        px: { xs: 2, sm: 4 },
                    }}
                >
                    {/* 📌 Nuevo Box (izquierda) */}

                    <AnimatedBox animation="animate__fadeInUp" delay={300} duration={3000}>
                        <Box
                            sx={{
                                flex: 1,
                                color: 'black bold',
                                borderRadius: 5,
                                padding: {
                                    xs: 0,
                                    md: 2
                                },
                                backdropFilter: 'blur(90px)',
                                WebkitBackdropFilter: 'blur(20px)', // Safari support
                                boxShadow: '0 4px 60px #0a5393da',
                                zIndex: 1,
                                textAlign: {
                                    xs: 'center',
                                    md: 'left'
                                },
                            }}
                        >
                            <Titulo1 titulo={"Envía tus productos y recibe el pago contra entrega"}
                                style={{
                                    textAlign: 'left', color: '#263D4F',
                                    fontFamily: 'fantasy'
                                }} />


                            <Typography
                                variant="body2"
                                component="div"
                                sx={{
                                    fontSize: {
                                        xs: '0.9rem',
                                        sm: '1rem',
                                    },
                                    textAlign: 'left',
                                    marginTop: 5,
                                    color: '263D4F bold'
                                }}
                            >
                                Sin registros. Solo ingresa con tu DNI y los datos de tu envío. Nosotros nos encargamos del resto.
                            </Typography>
                        </Box>
                    </AnimatedBox>
                    {/* Contenido principal */}

                    <AnimatedBox animation="animate__fadeInUp" delay={300} duration={3000}>

                        <Box
                            sx={{
                                position: 'relative',
                                zIndex: 2,
                                bgcolor: 'rgba(255, 255, 255, 0)',
                                minHeight: '200px',
                                width: {
                                    xs: '100%',   // móviles
                                    sm: '80%',    // tablets
                                    md: '25rem',  // escritorios
                                },
                                p: {
                                    xs: 0.5,
                                    sm: 1,
                                    md: 4,
                                },
                                fontFamily: 'fantasy',
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                borderRadius: 10,
                                textAlign: 'center',
                                gap: 2,
                                margin: '0 auto',
                                boxShadow: '0 4px 60px rgba(0, 0, 0, 0.5)',
                                fontSize: {
                                    sm: "5px"
                                }
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="div"
                                sx={{
                                    fontSize: {
                                        xs: '1.6rem',
                                        sm: '2rem',
                                        md: '2.5rem',
                                    },
                                    textAlign: 'center',
                                    fontFamily: 'fantasy',
                                }}
                            >
                                Programa tu envío desde aquí
                            </Typography>

                            <Typography
                                variant="body2"
                                component="div"
                                sx={{
                                    fontSize: {
                                        xs: '0.9rem',
                                        sm: '1rem',
                                    },
                                    textAlign: 'center',
                                }}
                            >
                                Sin registros. Solo ingresa con tu DNI y los datos de tu envío. Nosotros nos encargamos del resto.
                            </Typography>

                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: {
                                        xs: '1fr',          // móvil: 1 columna
                                        sm: tipoDoc === 'DNI' ? '1fr 2fr 1fr' : '1fr 2fr', // tablets igual que desktop
                                        md: tipoDoc === 'DNI' ? '1fr 2fr 1fr' : '1fr 2fr',
                                    },
                                    gap: 2,
                                    width: '100%',
                                }}
                            >
                                {/* Select tipo de documento */}
                                <FormControl fullWidth sx={{
                                    maxWidth: {
                                        xs: '100%',   // móviles
                                        sm: '100%',    // tablets
                                        md: '12rem',
                                    }
                                }}>
                                    <InputLabel id="tipo-label">Tipo Doc</InputLabel>
                                    <Select
                                        labelId="tipo-label"
                                        id="tipo-select"
                                        value={tipoDoc}
                                        label="Tipo Doc"
                                        onChange={(e) => setTipoDoc(e.target.value)}
                                    >
                                        {tipos.map((tipo) => (
                                            <MenuItem key={tipo} value={tipo}>
                                                {tipo}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                {/* Campo número de documento */}
                                <TextField
                                    label="NRO. DOC"
                                    variant="outlined"
                                    value={numDoc}
                                    onChange={(e) => setNumDoc(e.target.value)}
                                    fullWidth
                                    sx={{
                                        width: {
                                            xs: '100%',   // móviles
                                            sm: '100%',    // tablets
                                            md: '12rem',
                                        },
                                        gridColumn: {
                                            xs: 'auto',
                                            sm: tipoDoc === 'DNI' ? 'auto' : 'span 2',
                                            md: tipoDoc === 'DNI' ? 'auto' : 'span 2',
                                        },
                                    }
                                    }
                                />

                                {/* Campo verificador (solo visible si tipoDoc === 'DNI') */}
                                {tipoDoc === 'DNI' && (
                                    <TextField
                                        label="CUI"
                                        variant="outlined"
                                        value={verifDNI}
                                        onChange={(e) => setVerifDNI(e.target.value)}
                                        fullWidth
                                    />
                                )}
                            </Box>

                            <Box>
                                <Button
                                    variant="text"
                                    sx={{
                                        fontSize: 20,
                                        color: colors.common.black,
                                        borderColor: colors.common.black,
                                        '&:hover': {
                                            color: 'white',
                                            borderColor: colors.common.black,
                                        },
                                    }}
                                >
                                    Realizar Envío
                                </Button>
                            </Box>
                        </Box>
                    </AnimatedBox>
                </Box>
            </Box>

            {/*Cuarto Box*/}
            <Ayuda />
            {/*Quinto Box*/}

            <Footer />
        </main>
    )
}