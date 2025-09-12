import { useState } from "react";
import { motion } from 'framer-motion';
import { Box, Button } from '@mui/material';
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Cobertura1 } from '../Cobertura/PageCobertura'
import { Titulo1 } from "../Hoocks/Titulos";
import mundo from '../../assets/mundo.png'
export default function ZonaClientes() {

    return (
        <motion.div
            style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                backgroundColor: "#ff000000",
            }}>
            <Navbar />
            {/* Espacio para compensar el Navbar fijo */}
            <Box sx={{ height: '80px' }} />

            <Box
                name='Box1'
                sx={{
                    padding: '1rem',
                }}
            >
                <Box sx={{
                    margin: '5rem',
                    gap: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: {
                        xs: '25rem',
                        sm: '46rem',
                        md: '100%'
                    },
                    alignItems: 'center'
                }}>

                    <Titulo1 titulo={'Zona de Clientes'} style={{
                        fontSize: '1rem', marginBottom: 'rem',
                        padding:'1rem',
                        borderBottom: '5px solid',
                        borderBottomLeftRadius: '15px',
                        borderBottomRightRadius: '15px',
                    }} />

                    <Button
                        sx={{
                            whiteSpace: 'nowrap',
                            fontWeight: 'bold',
                            px: 3,
                            py: 1,
                            width: '9rem',
                            borderBottom: '5px solid',
                            borderBottomLeftRadius: '15px',
                            borderBottomRightRadius: '15px',
                        }}
                    >
                        Clientes
                    </Button>
                    <Button
                        sx={{
                            whiteSpace: 'nowrap',
                            fontWeight: 'bold',
                            px: 3,
                            py: 1,
                            width: '9rem',

                            borderBottom: '5px solid',
                            borderBottomLeftRadius: '15px',
                            borderBottomRightRadius: '15px',
                        }}
                    >
                        Agentes
                    </Button>
                </Box>
            </Box>
            {/*Tercer Box*/}
            < Box
                sx={{
                    position: "relative",
                    overflow: 'hidden',
                    backgroundImage: `url(${mundo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#000000ff',
                    py: { xs: 4, sm: 6, md: 8 },
                    px: { xs: 2, sm: 4, md: 6 },
                    minHeight: { xs: '150px', sm: '200px', md: '350px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }
                }>
                {/* Capa de desenfoque */}
                < Box
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
                < Box
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
                </Box >
            </Box >

            {/* Espacio para compensar el Navbar fijo */}
            <Footer />
        </motion.div>
    )
}