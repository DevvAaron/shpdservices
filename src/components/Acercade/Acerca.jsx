import {
    Box,
} from '@mui/material'
import Navbar from "../Header/Navbar"
import fondo from '../../assets/fondo.jpg';
import Footer from '../Footer/Footer';
import { Titulo1, Subtitulo, Contenido } from '../Hoocks/Titulos';
import AnimatedBox from '../Hoocks/AnimatedBox';

import img8 from '../../assets/img8.png';
import Valores from './Valores';

export default function AcercaDe() {
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
                name="Primer Box"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    padding: '0.8rem',
                    overflow: 'hidden',
                    height: '100vh',
                    maxHeight: { xs: '50vh', sm: '50vh', md: '70vh' },
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
                        backgroundColor: 'rgba(0, 134, 244, 0.48)',
                        opacity: '0.7',
                        zIndex: 0,
                    }}
                />
                {/* Contenedor Acerca de */}
                <Box
                    name="ContenedorPrincipal"
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
                    <Titulo1 titulo={'Acerca De'} sx={{
                        position: 'relative',
                        zIndex: 1,
                        color: '#ffffff9f'
                    }}></Titulo1>
                </Box>
            </Box>
            {/*Segundo Box */}
            <Box
                sx={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "0.55rem",
                    flexWrap: "wrap",

                    backdropFilter: 'blur(0.5px)',
                    WebkitBackdropFilter: 'blur(0.5px)',
                    zIndex: 1, background: 'linear-gradient(180deg, rgba(255,255,255), rgba(255,255,255,0.3), rgba(255,255,255,0))',
                }}
            >
                <AnimatedBox animation="animate__slideInLeft" delay={2000} duration={2000} style={{
                    display:'flex',
                    alignItems:'center'
                }}>
                    <Box
                        sx={{
                            backgroundImage: `url(${img8})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '1rem',
                            height:'100vh',
                            maxHeight: {
                                xs: '15rem',
                                sm: '25rem',
                                md: '25rem'
                            },
                            width: {
                                xs: '15rem',   // móviles
                                sm: '20rem',    // tablets
                                md: '20rem',  // escritorios
                            },
                            p: {
                                xs: 2,
                                sm: 3,
                                md: 4,
                            },
                            m: {
                                xs: 1,
                                sm: 2,
                                md: 2,
                            }
                        }}>
                    </Box>
                </AnimatedBox>

                <AnimatedBox animation="animate__slideInRight" delay={2000} duration={5000} >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: {
                                xs: '90%',   // móviles
                                sm: '80%',    // tablets
                                md: '40rem',  // escritorios
                            },
                            p: {
                                xs: 2,
                                sm: 3,
                                md: 4,
                            },
                            m: {
                                xs: 1,
                                sm: 2,
                                md: 2,
                            }
                        }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: 'center'
                        }}>
                            <Titulo1 titulo={"SPHD SERVICE"}
                                style={{
                                    borderTop: '5px solid',
                                    borderTopLeftRadius: '15px',
                                    borderTopRightRadius: '15px',
                                    borderBottom: '5px solid',
                                    borderBottomLeftRadius: '15px',
                                    borderBottomRightRadius: '15px',
                                    textAlign: "center",
                                    padding: "1rem"
                                }} />
                            <Subtitulo subtitulo={"Sobre Nosotros:"} />
                            <Contenido contenido={`Somos una empresa peruana especializada en el transporte de carga aérea, terrestre y marítima, a destinos nacionales e internacionales.

                                El profesionalismo de nuestro personal y la calidad de nuestras operaciones aseguran un servicio con los estándares internacionales en transporte de carga. 
                                
                                Como empresa responsable, contamos con el certificado emtido por el Ministerio de Transportes y comunicaciones (MTC) , a traves de la Dirección general de aeronáutica civil (DGAC).`}
                            />
                        </Box>
                    </Box>
                </AnimatedBox>
            </Box>
            <Valores/>
            {/*Cuarto Box*/}
            <Footer />
        </main >
    )
}