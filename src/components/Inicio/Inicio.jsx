
import { useState, useEffect } from 'react';
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
import { Cobertura1 } from '../Cobertura/PageCobertura';
import mundo from '../../assets/mundo.png';
import Footer from '../Footer/Footer';
import Ayuda from '../Footer/Ayuda';
import Navbar from '../Header/Navbar';
import AnimatedBox from '../Hoocks/AnimatedBox'; // 👈 importa el nuevo componente
import { Contenido, Subtitulo, Titulo1 } from '../Hoocks/Titulos';
import 'animate.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img8 from '../../assets/img8.png';

import fondo1 from '../../assets/fondo.jpg';
import fondo2 from '../../assets/fondo2.jpg';
import fondo3 from '../../assets/fondo3.jpg';
const imagenes = [fondo1, fondo2, fondo3];

export default function Inicio() {

    //Colecciones
    const fondoImages = [img1, img2, img3, img4, img8]
    const boxImg = [0, 3, 4, 7];
    const tipos = ['DNI', 'CE', 'RUC', 'PASAPORTE'];
    const titulot = [
        "Programa tu envío",
        "Sigue tu paquete",
        "Recibe información",
        "Recibe tu pago"];
    const desc = [
        "Crea tu cuenta, registra los datos del producto e iremos a recogerlo.",
        "Te daremos un código de tracking para darle seguimiento.",
        "Te confirmaremos cuando tu envío haya sido recibido.",
        "Recogeremos el pago por el producto y te lo enviaremos de regreso."];


    //Estados
    const [index, setIndex] = useState(0);
    const [tipoDoc, setTipoDoc] = useState('DNI');
    const [numDoc, setNumDoc] = useState('');
    const [verifDNI, setVerifDNI] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    let tituloIndex = 0;
    let descIndex = 0;
    let imagenIndex = 0;

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
        }, 3000); // Cambia de imagen cada 5 segundos

        return () => clearInterval(intervalo);
    }, []);


    // En el componente, antes del return:

    // Separar items
    const items = [...Array(8)].map((_, index) => {
        const tieneImagen = boxImg.includes(index);
        if (!tieneImagen) {
            const fondoTexto = `${imagenIndex + 1}`;
            const fondoActual = fondoImages[imagenIndex % fondoImages.length];
            imagenIndex++;
            return {
                type: 'imagen',
                index,
                fondoTexto,
                fondoActual,
            };
        } else {
            const titulo = titulot[tituloIndex++];
            const descripcion = desc[descIndex++];
            return {
                type: 'texto',
                index,
                titulo,
                descripcion,
            };
        }
    });

    // Función para intercalar imagen-texto en móvil
    const intercalarMobile = (items) => {
        const imagenes = items.filter(i => i.type === 'imagen');
        const textos = items.filter(i => i.type === 'texto');
        const result = [];

        const maxLen = Math.max(imagenes.length, textos.length);
        for (let i = 0; i < maxLen; i++) {
            if (i < imagenes.length) result.push(imagenes[i]);
            if (i < textos.length) result.push(textos[i]);
        }
        return result;
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // En el render:
    const itemsToRender = isMobile ? intercalarMobile(items) : items;

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
                    transition: 'background-image 2s ease-in-out',
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

                <AnimatedBox animation="animate__slideInLeft" delay={300} duration={3000}>
                    {/* Contenido principal */}
                    <Box
                        sx={{
                            position: 'relative',
                            zIndex: 2,
                            bgcolor: 'rgba(255, 255, 255, 0)',
                            minHeight: '200px',
                            maxWidth: {
                                xs: '20rem',
                                sm: '20rem',
                                md: '20rem'
                            },
                            p: {
                                xs: 1,
                                sm: 2,
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
            {/* Segundo Box */}
            <Box
                name="Segundo box"
                sx={{
                    padding: 2,
                    backgroundColor: '#ffffff',
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: '1fr 1fr',
                            md: '1fr 1fr',
                        },
                        gap: 2,
                        justifyItems: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        margin: '0 auto',
                        maxWidth: '1000px',
                        width: '100%',
                        boxSizing: 'border-box',
                    }}
                >
                    {itemsToRender.map((item, idx) => {
                        if (item.type === 'imagen') {
                            return (
                                <AnimatedBox
                                    key={`img-${item.index}`}
                                    animation="animate__fadeInUp"
                                    delay={500}
                                    duration={3000}
                                >
                                    <Box
                                        key={`img${item.index}`}
                                        sx={{
                                            height: {
                                                xs: 200,
                                                sm: 250,
                                                md: 300,
                                            },
                                            width: {
                                                xs: '20rem',   // móviles
                                                sm: '50rem',    // tablets
                                                md: '20rem',  // escritorios
                                            },
                                            maxWidth: {
                                                xs: '100%',
                                                sm: '400px',
                                                md: '450px',
                                            },
                                            borderRadius: 5,
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            justifyContent: [1, 5].includes(item.index) ? 'flex-start' : 'flex-end',
                                            fontWeight: 'bold',
                                            fontSize: 24,
                                            backgroundImage: `url(${item.fondoActual})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            textShadow: '0 1px 3px rgba(0,0,0,0.6)',
                                            boxSizing: 'border-box',
                                            position: 'relative',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 16,
                                                left: 16,
                                                width: 60,
                                                height: 60,
                                                backgroundColor: 'white',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 'bold',
                                                fontSize: 20,
                                                color: '#333',
                                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                            }}
                                        >
                                            {item.fondoTexto}
                                        </Box>
                                    </Box>
                                </AnimatedBox>
                            );
                        } else {
                            return (
                                <AnimatedBox
                                    key={`txt-${item.index}`}
                                    animation="animate__fadeInRight"
                                    delay={500}
                                    duration={3000}>
                                    <Box
                                        key={`txt${item.index}`}
                                        sx={{
                                            width: '100%',
                                            maxWidth: {
                                                xs: '100%',
                                                sm: '380px',
                                                md: '400px',
                                            },
                                            height: 'auto',
                                            borderRadius: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            padding: 2,
                                            color: '#333',
                                            backgroundColor: '#f9f9f9',
                                            boxSizing: 'border-box',
                                        }}
                                    >
                                        <Box sx={{ fontSize: 22, fontWeight: 'bold', mb: 0.5 }}>
                                            {item.titulo}
                                        </Box>
                                        <Box sx={{ fontSize: 14 }}>{item.descripcion}</Box>
                                    </Box>
                                </AnimatedBox>
                            );
                        }
                    })}
                </Box>
            </Box>

            {/*Tercer Box*/}
            <Box
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
                }}>
                {/* Capa de desenfoque */}
                <Box
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
                <Box
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
                </Box>
            </Box>


            {/*Cuarto Box */}
            <Box
                sx={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "0.55rem",
                    flexWrap: "wrap",justifyContent:'center',

                    backdropFilter: 'blur(0.5px)',
                    WebkitBackdropFilter: 'blur(0.5px)',
                    zIndex: 1, background: 'linear-gradient(180deg, rgba(255,255,255), rgba(255,255,255,0.3), rgba(255,255,255,0))',
                }}
            >
                <AnimatedBox animation="animate__slideInLeft" delay={2000} duration={5000} >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
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
                            flexDirection: "column"
                        }}>
                            <Titulo1 titulo={"Haz que tus clientes se sientan seguros comprando por internet"}
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
                            <Subtitulo subtitulo={"La solucion para negocios digitales:"}
                                style={{ margin: "0.5rem" }} />
                            <Contenido contenido={"No todos los clientes se sienten seguros pagando por internet antes de recibir su producto. Nosotros nos encargamos de llevar el pedido, recoger el pago y entregártelo con total seguridad."} />
                        </Box>
                        <Box name='hola' sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderBottom: '5px solid',
                            borderBottomLeftRadius: '15px',
                            borderBottomRightRadius: '15px',
                        }}>
                            <Subtitulo subtitulo={"Programa tu envío aquí"} style={{
                                fontSize: '0.8rem'
                            }} />
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}>

                                <Button
                                    variant="text"
                                    sx={{
                                        maxHeight: "1rem",
                                        padding: 2,
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        marginLeft: '1rem',
                                        marginRight: '1rem',
                                        '&:hover': {
                                            fontWeight: 'bold',
                                            color: 'white',
                                        },
                                    }}
                                >
                                    Realizar Envío
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </AnimatedBox>
                <AnimatedBox animation="animate__slideInRight" delay={2000} duration={2000}>
                    <Box
                        sx={{
                            overflow: 'hidden',
                            backgroundImage: `url(${img8})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '1rem',
                            minHeight: {
                                xs: '15rem',
                                sm: '20rem',
                                md: '20rem'
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
            </Box>

            {/*Quinto Box*/}
            <AnimatedBox animation="animate__slideInUp" delay={0} duration={2000}>
                <Ayuda />
            </AnimatedBox>

            {/*Sexto Box*/}
            <Footer />
        </main>
    );
};