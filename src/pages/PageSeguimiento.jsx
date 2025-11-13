import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from "../components/ComponenteNavbar"
import Footer from '../components/ComponenteFooter';
import Ayuda from '../components/ComponenteAyuda';

import { Titulo1 } from '../hoocks/Titulos';
import FondoInicio from '../hoocks/FondoInicio';

import { Button, TextField, Container, Box, } from '@mui/material'


export default function Seguimiento() {
    const navigate = useNavigate();

    //Estados
    const [trackingID, setTrackingID] = useState('');

    const handleBuscar = () => {
        if (trackingID.trim() !== "") {
            setMostrarResultado(true);
            navigate(`/seguimiento/${trackingID.trim()}`);
            setTrackingID(""); // limpiar después de buscar
        } else {
            // Opcional: podrías mostrar una alerta o mensaje
            alert('Número de Tracking no encontrado.');
            setMostrarResultado(false);
        }
    };

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
            <Box
                name='controlador'
                sx={{
                    position: 'relative',
                    zIndex: 5,
                    height: '100vh',
                    width: '100%'
                }}>
                <FondoInicio>

                    <Titulo1 titulo={'Seguimiento'} sx={{
                        position: 'relative',
                        fontSize: '3rem',
                        zIndex: 1,
                        top: '-1rem',
                        left: '0.5rem',
                        color: '#ffffff9f',
                        transform: { md: 'rotate(-24.5deg)' }, // 👈 gira 25° hacia la izquierda
                        display: 'inline-block'
                    }} />
                </FondoInicio>
            </Box>
            {/* Primer Box */}
            <Box
                name="Primer Box"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    justifyContent: 'center',
                    padding: '0.8rem',
                    overflow: 'hidden',
                    height: '100vh',
                    maxHeight: { xs: '30vh', sm: '40vh', md: '50vh' },
                    bgcolor: '#5fd6fdff',
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
                        backgroundColor: 'white',
                        opacity: '0.6',
                        zIndex: 0,
                    }}
                />

                {/* Contenedor Buscador */}
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        flexDirection: {
                            xs: 'column', // En móvil apilado
                            md: 'row'     // Desde desktop, lado a lado
                        },
                        alignItems: 'center',
                        justifyContent: { xs: 'center', md: 'space-between' },
                        width: '100%',
                        maxWidth: {
                            xs: '80%',
                            sm: '60%',
                            md: '60%'
                        },
                        gap: 4,
                    }}
                >
                    <TextField
                        label="Buscar Tracking ID"
                        variant="outlined"
                        fullWidth
                        value={trackingID}
                        onChange={(e) => setTrackingID(e.target.value)}
                        sx={{
                            backgroundColor: '#ffffff7d',
                            borderRadius: '1.5rem',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '1.5rem',
                            },
                        }}
                    />
                    {/*Boton para buscar*/}
                    <Button
                        onClick={handleBuscar}
                        sx={{
                            whiteSpace: 'nowrap',
                            fontWeight: 'bold',
                        }}
                    >
                        Buscar
                    </Button>
                </Box>
            </Box>
            {/*Quinto Box*/}
            <Ayuda />
            {/*Sextp Box*/}
            <Footer />
        </Container >
    )
}