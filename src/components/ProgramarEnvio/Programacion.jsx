import { useState } from 'react';
import {
    Box,
    IconButton,
    Typography
} from '@mui/material'
import { motion } from 'framer-motion';

import Footer from '../ComponenteFooter';
import Navbar from "../ComponenteNavbar"
import Ayuda from '../ComponenteAyuda';

import fondo1 from '../../assets/fondo.jpg';
import fondo2 from '../../assets/fondo2.jpg';
import fondo3 from '../../assets/fondo3.jpg'
import { Titulo1 } from '../../hoocks/Titulos';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const imagenes = [fondo1, fondo2, fondo3];

export default function Programacion() {

    const [index, setIndex] = useState(0);
    const changeImage = (direction) => {
        setIndex((prev) => {
            const nextIndex = (prev + direction + imagenes.length) % imagenes.length;
            return nextIndex;
        });
    };

    const handleHold = (direction) => {
        // Cambiar imagen al mantener presionado
        holdTimeout.current = setTimeout(() => {
            changeImage(direction);
        }, 200); // Cambia después de 200ms manteniendo el clic
    };

    const clearHold = () => {
        clearTimeout(holdTimeout.current);
    };
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

            {/* Primer Box */}

            <Box
                position="relative"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                    width: '100%',
                    height: '100vh'
                }}
            >
                {/* Flecha Izquierda */}
                <IconButton
                    onMouseDown={() => handleHold(-1)}
                    onMouseUp={clearHold}
                    onMouseLeave={clearHold}
                    onClick={() => changeImage(-1)}
                    sx={{
                        position: 'absolute',
                        transform: 'translateY(-50%)',

                        left: 10,
                        top: '50%', zIndex: 3
                    }}
                >
                    <ArrowBackIosIcon sx={{ color: 'black' }} />
                </IconButton>

                {/* Primer Box (Imagen Actual) */}
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 0.8 }}
                    style={{ width: "100%", 
                        height:'100vh'
                    }}
                >
                    <Box
                        name="BoxContenido"
                        sx={{
                            padding: '0.8rem',
                            overflow: 'hidden',
                            backgroundImage: `url(${imagenes[index]})`,
                            transition: 'background-image 2s ease-in-out',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height:'100vh',
                            minWidth: { xs: '15rem', sm: '40rem', md: '60rem' },
                            maxHeight: { xs: '90vh', sm: '95vh', md: '100vh' },
                        }}
                    />

                </motion.div>
                <Box
                    name='hola'
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            md: 'row'
                        },
                        minWidth: {
                            xs: '15rem',
                        },
                        position: 'absolute',
                        zIndex: 3,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        gap: 4,
                        py: 4,
                        px: { xs: 2, sm: 4 },
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            color: 'black',
                            borderRadius: 5,
                            padding: {
                                xs: 0,
                                md: 2
                            },
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            boxShadow: '0 4px 60px #0a5393da',
                            zIndex: 1,
                            textAlign: {
                                xs: 'center',
                                md: 'left'
                            },
                        }}
                    >
                        <Titulo1
                            titulo={"Envía tus productos y recibe el pago contra entrega"}
                            style={{
                                textAlign: 'center',
                                padding: 15,
                                color: '#263D4F',
                                fontFamily: 'fantasy',
                                fontSize: '0.8rem',
                            }}
                        />

                        <Typography
                            variant="body2"
                            component="div"
                            sx={{
                                padding: 2,
                                fontSize: {
                                    xs: '0.8rem',
                                    sm: '1rem',
                                },
                                textAlign: 'justify',
                                color: '#263D4F',
                                fontWeight: 'bold'
                            }}
                        >
                            Sin registros. Solo ingresa con tu DNI y los datos de tu envío. Nosotros nos encargamos del resto.
                        </Typography>
                    </Box>

                </Box>
                {/* Flecha Derecha */}
                <IconButton
                    onMouseDown={() => handleHold(1)}
                    onMouseUp={clearHold}
                    onMouseLeave={clearHold}
                    onClick={() => changeImage(1)}
                    sx={{
                        position: 'absolute',
                        right: 10,
                        top: '50%', zIndex: 3
                    }}
                >
                    <ArrowForwardIosIcon sx={{ color: 'black' }} />
                </IconButton>

            </Box>

            {/*Cuarto Box*/}
            <Ayuda />
            {/*Quinto Box*/}

            <Footer />
        </main>
    )
}