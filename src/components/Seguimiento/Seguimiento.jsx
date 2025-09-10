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
import fondo from '../../assets/fondo.jpg';
import { useState, useEffect } from 'react';
import { Titulo1 } from "../Hoocks/Titulos";
import Footer from '../Footer/Footer';
import Ayuda from '../Footer/Ayuda';
import AnimatedBox from '../Hoocks/AnimatedBox';
export default function Seguimiento() {

    const tipos = ['DNI', 'CE', 'RUC', 'PASAPORTE'];
    const [tipoDoc, setTipoDoc] = useState('DNI');
    const [numDoc, setNumDoc] = useState('');
    const [verifDNI, setVerifDNI] = useState('');
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
                    minHeight: {
                        xs: '15rem',
                        sm: '15rem',
                        md: '20rem'
                    },
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
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)', // Safari support
                        zIndex: 0,
                    }}
                />

                {/* Contenedor Buscador */}
                <Box
                    name="A"
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
                            md: '55rem'
                        },
                        gap: 4,
                        py: 4,
                        px: { xs: 2, sm: 4 },
                    }}
                >
                    <Box
                        name="B"
                        sx={{
                            display: 'flex',
                            flexDirection: {
                                xs: 'column',
                                sm: 'row',
                            },
                            alignItems: 'center',
                            gap: 2,
                            width: "100%"
                        }}
                    >
                        <TextField
                            label="Buscar Tracking ID"
                            sx={{
                                flex: 2,
                            }}
                        />
                        {/*Boton para buscar*/}
                        <Button
                            sx={{
                                whiteSpace: 'nowrap',
                                fontWeight: 'bold',
                                px: 3,
                                py: 1,
                            }}
                        >
                            Buscar
                        </Button>
                    </Box>

                </Box>
            </Box>
            {/*Quinto Box*/}
            <Ayuda />
            {/*Sextp Box*/}
            <Footer />
        </main>
    )
}