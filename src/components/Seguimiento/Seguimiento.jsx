import {
    Button,
    TextField,
    Box,
} from '@mui/material'
import { useState } from 'react';
import Navbar from "../Header/Navbar"
import fondo from '../../assets/fondo.jpg';
import fondo2 from '../../assets/fondo2.jpg';
import Footer from '../Footer/Footer';
import Ayuda from '../Footer/Ayuda';
import ResultadoSeg from './ResultadoSeg';

const InfoEnvio = [
    {
        id: 1,
        nroTracking: '87755',
        reminente: 'CARAZ COMPANY S.A.C.',
        destinatario: 'ANA ISABEL BALBIN TORRES',
        direccion: 'JAVIER CORREA ELIAS 137-DPTO 402 SAN MIGUEL-LIMA-LIMA',
        dtproducto:
        {
            id: 1,
            nombre: 'Producto1',
            monto: 50,
            img: [fondo,fondo2]
        },
    },
    {
        id: 2,
        nroTracking: '87754',
        reminente: 'Reminente 2',
        destinatario: 'Destinatario2',
        direccion: 'Dirección 2',
        dtproducto:
        {
            id: 2,
            nombre: 'Producto2',
            monto: 20,
            img: [fondo]
        }
    },
    {
        id: 3,
        nroTracking: '87753',
        reminente: 'Reminente 3',
        destinatario: 'Destinario 3',
        direccion: 'Dirección 3',
        dtproducto:
        {
            id: 3,
            nombre: 'Producto3',
            monto: 100,
            img: [fondo]
        }
    },
];

export default function Seguimiento() {
    const [trackingID, setTrackingID] = useState('');
    const [resultado, setResultado] = useState(null);
    const [mostrarResultado, setMostrarResultado] = useState(false);

    const handleBuscar = () => {
        const info = InfoEnvio.find((envio) => envio.nroTracking === trackingID.trim());

        if (info) {
            setResultado(info);
            setMostrarResultado(true);
        } else {
            // Opcional: podrías mostrar una alerta o mensaje
            alert('Número de Tracking no encontrado.');
            setMostrarResultado(false);
        }
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
            <Navbar />
            {/* Espacio para compensar el Navbar fijo */}
            <Box sx={{ height: '80px', backgroundColor: '#13B5EA' }} />

            {/* Primer Box */}
            <Box
                name="Primer Box"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    padding: '0.8rem',
                    overflow: 'hidden',
                    height: '40vh',
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
                        backgroundColor: 'white',
                        opacity: '0.6',
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
                            md: '100%'
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
                            minWidth: {
                                xs: '15rem',
                                sm: '40rem',
                            },
                        }}
                    >
                        <TextField
                            label="Buscar Tracking ID"
                            variant="outlined"
                            fullWidth
                            value={trackingID}
                            onChange={(e) => setTrackingID(e.target.value)}
                            sx={{
                                flex: 2,
                                backgroundColor: '#ffffff',
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
                                px: 3,
                                py: 1,
                            }}
                        >
                            Buscar
                        </Button>
                    </Box>
                </Box>
            </Box>
            {mostrarResultado && resultado && <ResultadoSeg data={resultado} />}


            {/* Secciones finales */}
            {/*Quinto Box*/}
            <Ayuda />   
            {/*Sextp Box*/}
            <Footer />
        </main >
    )
}