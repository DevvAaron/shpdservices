import {
    Button,
    TextField,
    Box,
} from '@mui/material'
import { useEffect, useState } from 'react';
import Navbar from "../Header/Navbar"
import fondo from '../../assets/fondo.jpg';
import fondo2 from '../../assets/fondo2.jpg';
import Footer from '../Footer/Footer';
import Ayuda from '../Footer/Ayuda';
import ResultadoSeg from './ResultadoSeg';
import { Titulo1 } from '../Hoocks/Titulos';
import BarraProgresiva from '../hoocks/BarraProgresiva';
import FondoInicio from '../hoocks/FondoInicio';
import tri2 from '../../assets/triangulo-2.png'
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
            img: [fondo, fondo2]
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

    //Estados
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
    const [trackingID, setTrackingID] = useState('');
    const [resultado, setResultado] = useState(null);
    const [mostrarResultado, setMostrarResultado] = useState(false);

    const stepsMap = {
        "/": 1,
        "/acercaDe": 2,
        "/servicios": 3,
        "/seguimiento": 4,
        "/contacto": 5,
    };
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
                <>
                    <BarraProgresiva steps={5} activeStep={stepsMap[location.pathname] || 1} sx={{
                        position: 'absolute',
                        top: '92%',
                        left: { xs: '0%', sm: '0%', md: '-40%' },
                        zIndex: '2',
                        width: '100%'
                    }} />
                </>
                {/* {!isMobile && (

                    <Box
                        name='TrianguloArriba'
                        sx={{
                            position: 'absolute',
                            zIndex: 2,
                            top: '5%',
                            left: '-2%',
                            backgroundImage: `url(${tri2})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '35rem',
                            width: '35rem'
                        }}
                    />
                )} */}

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
                    padding: '0.8rem',
                    overflow: 'hidden',
                    height: '100vh',
                    maxHeight: { xs: '50vh', md: '60vh', sm: '70vh' },
                    backgroundColor: '#00bfffff',
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