import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Typography, Modal, Backdrop, Fade, IconButton, CircularProgress
} from '@mui/material';
import tri1 from '../../assets/triangulo-2.png'
import axios from 'axios';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ImageViewerModal from '../hoocks/ImageViewerModel';
import { InfoEnvio } from '../../data/envios'; // ajusta la ruta si es necesario
import { Titulo1 } from '../Hoocks/Titulos';
import FondoInicio from '../hoocks/FondoInicio';
import Navbar from '../Header/Navbar';
import { useEffect } from 'react';

const getIconComponent = (iconName) => {
    switch (iconName) {
        case 'fa-box':
            return <InventoryIcon />;
        case 'fa-truck-moving':
            return <LocalShippingIcon />;
        case 'fa-box-open':
            return <MoveToInboxIcon />;
        default:
            return <InventoryIcon />;
    }
}

export default function ResultadoSeg() {
    const { trackingID } = useParams(); // puede ser undefined si llamas pasando props

    const [trackingData, setTrackingData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    //Modal de imagenes
    const [openImg, setOpenImg] = useState(false);
    const [selectedImgIndex, setSelectedImgIndex] = useState(0);

    useEffect(() => {
        if (!trackingID) {
            setError('No se proporcionó un N° de Tracking.');
            setIsLoading(false);
            return;
        }
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.post('/api/tracking/validar', {
                    n_track: trackingID
                });
                setTrackingData(response.data);
            } catch (err) {
                if (err.response && err.response.status === 404) {
                    setError(err.response.data.message); // "Código de seguimiento incorrecto"
                } else {
                    setError('Error al conectar con el servidor.');
                }
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [trackingID]);


    // Abrir modal con imagen seleccionada
    const handleOpenImg = (index) => {
        setSelectedImgIndex(index);
        setOpenImg(true);
    };

    const handleCloseImg = () => {
        setOpenImg(false);
    };

    if (isLoading) {
        return (
            <Box sx={{ width: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
                <Typography variant="h6" sx={{ color: '#333' }}>
                    Buscando envío...
                </Typography>
            </Box>
        );
    }
    if (error) {
        return (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <ErrorOutlineIcon color="error" sx={{ fontSize: 60 }} />
                <Typography variant="h6" sx={{ color: 'red'}}>
                    🚫 {error}
                </Typography>
            </Box>
        );
    }


    const { informacionEnvio, productos, imagenes, timeline } = trackingData;
    const pasosUI = timeline.iconos.map(apiPaso => ({
        id: apiPaso.order,
        texto: apiPaso.text,
        icono: getIconComponent(apiPaso.icon), // Usamos la función helper
        activo: apiPaso.active === 'active',
    }));
    const historialUI = timeline.historial; // Este ya viene listo
    const imagenesParaModal = imagenes.map(img => img.path);
    const mapUrl = informacionEnvio.direccion ? `https://www.google.com/maps?q=${encodeURIComponent(informacionEnvio.direccion)}&output=embed` : null;

    return (

        <Box
            name='Fondo'
            sx={{
                width: '100%',
                py: 2, // padding vertical
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: {
                    xs: 1,
                    sm: 2,
                    md: 5
                },
            }}>
            <Navbar sx={{
                position: 'fixed',
                justifyContent: 'center',
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
                {/* {!isMobile && (

                    <Box
                        name='TrianguloArriba'
                        sx={{
                            position: 'absolute',
                            zIndex: 2,
                            top: '5%',
                            left: '-2%',
                            backgroundImage: `url(${tri1})`,
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
            <Box name='Cont1'
                sx={{
                    padding: '1rem',
                    width: {
                        xs: '80%',
                        sm: '60%',
                        md: '40%'
                    },
                    overflow: 'hidden',
                    height: '100%',
                    marginTop: 5,
                    marginBottom: { xs: 1, md: 5 }
                }}>
                <Box
                    name='Fila1'
                    sx={{
                        bgcolor: '#13B5EA',
                        width: '100%',
                        height: '2.5rem',
                        overflow: 'hidden',
                        borderTop: '5px solid',
                        borderTopRightRadius: '1.5rem',
                        borderTopLeftRadius: '1.5rem',
                        display: 'flex',
                        boxSizing: 'border-box',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' }, margin: '1rem', color: 'white' }}>
                        ¡Tu envío ya está en camino!
                    </Typography>
                </Box>

                <Box
                    name='Fila2'
                    sx={{
                        width: '100%',
                        borderBottom: '5px solid',
                        borderBottomLeftRadius: '1.5rem',
                        borderBottomRightRadius: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        boxSizing: 'border-box',
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                        pb: 2,
                    }}>
                    <Box name='Fila de Estados'
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '1rem',
                            gap: {
                                xs: '1rem',
                                sm: '2rem',
                                md: '1rem'
                            },
                            boxSizing: 'border-box',
                            width: {
                                xs: '80%',
                                md: '40%'
                            },
                            height: '100%',
                        }}>
                        {pasosUI.map((paso) => (
                            <Box
                                key={paso.id}
                                className={`step ${paso.activo ? 'active' : ''}`}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 1,
                                    px: 0,
                                }}
                            >
                                {/* Círculo con ícono */}
                                <Box
                                    className="icon"
                                    sx={{
                                        width: { xs: '3rem', sm: '4rem' },
                                        height: { xs: '3rem', sm: '4rem' },
                                        borderRadius: '50%',
                                        backgroundColor: paso.activo ? '#13B5EA' : '#ccc',
                                        color: '#fff',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: { xs: '1.5rem', sm: '2rem' },
                                        transition: 'background-color 0.3s ease',
                                    }}
                                >
                                    {paso.icono}
                                </Box>

                                {/* Texto debajo */}
                                <Typography
                                    className="text"
                                    sx={{
                                        width: {
                                            xs: '70px',
                                            sm: '9rem',
                                            md: '8rem'
                                        },
                                        maxWidth: {
                                            xs: '70px',
                                            sm: '10rem',
                                            md: '11rem'

                                        },
                                        fontSize: { xs: '0.75rem', sm: '1rem' },
                                        fontWeight: paso.activo ? 'bold' : 'normal',
                                        textAlign: 'center',
                                    }}
                                >
                                    {paso.texto}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <Typography sx={{
                        textAlign: 'left',
                        width: '100%',
                        maxWidth: '20rem',
                        boxSizing: 'border-box'
                    }}>
                        Historial
                    </Typography>
                    {historialUI.map((hEstado, index) => (
                        <Box key={index} sx={{
                            mb: 1,
                            width: '100%',
                            maxWidth: '20rem',
                            textAlign: 'left',
                        }}>
                            <Typography
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: {
                                        xs: '0.8rem',  // móviles
                                        sm: '1rem',    // tablets
                                        md: '1rem',  // pantallas mediana
                                    },
                                }}>
                                {hEstado.text}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: '0.8rem',  // móviles
                                        sm: '1rem',    // tablets
                                        md: '1rem',  // pantallas mediana
                                    },
                                }}>
                                {hEstado.fecha}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box
                name='Cont2'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '1rem',
                    width: {
                        xs: '80%',
                        sm: '60%',
                        md: '30%'
                    },
                    overflow: 'hidden',
                    height: '100%',
                    marginTop: 5,
                    marginBottom: { xs: 1, md: 5 }
                }}>
                <Box sx={{
                    mb: 1,
                    width: '100%',
                    maxWidth: '20rem',
                    textAlign: 'left',
                }}>
                    <Typography
                        sx={{
                            fontSize: {
                                xs: '0.8rem',  // móviles
                                sm: '1rem',    // tablets
                                md: '1rem',  // pantallas mediana
                            },
                        }}>
                        N° de Tracking:
                    </Typography>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: {
                            xs: '0.8rem',  // móviles
                            sm: '1rem',    // tablets
                            md: '1rem',  // pantallas mediana
                        },
                    }}>{informacionEnvio.tracking}</Typography>
                    <Typography sx={{
                        fontSize: {
                            xs: '0.8rem',  // móviles
                            sm: '1rem',    // tablets
                            md: '1rem',  // pantallas mediana
                        },
                    }}>Enviado Por:</Typography>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: {
                            xs: '0.8rem',  // móviles
                            sm: '1rem',    // tablets
                            md: '1rem',  // pantallas mediana
                        },
                    }}>{informacionEnvio.enviadoPor}</Typography>

                    <Typography
                        sx={{
                            fontSize: {
                                xs: '0.8rem',  // móviles
                                sm: '1rem',    // tablets
                                md: '1rem',  // pantallas mediana
                            },
                        }}>Enviado a:</Typography>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: {
                            xs: '0.8rem',  // móviles
                            sm: '1rem',    // tablets
                            md: '1rem',  // pantallas mediana
                        },
                    }}>{informacionEnvio.enviadoA}</Typography>

                    <Typography sx={{
                        fontSize: {
                            xs: '0.8rem',  // móviles
                            sm: '1rem',    // tablets
                            md: '1rem',  // pantallas mediana
                        },
                    }}>Dirección:</Typography>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: {
                            xs: '0.8rem',  // móviles
                            sm: '1rem',    // tablets
                            md: '1rem',  // pantallas mediana
                        },
                    }}>{informacionEnvio.direccion}</Typography>
                    {/* Título */}
                    <Typography
                        sx={{
                            fontSize: {
                                xs: '0.8rem',  // móviles
                                sm: '1rem',    // tablets
                                md: '1rem',  // pantallas mediana
                            }, fontWeight: 'bold',
                            mb: 0,
                            mt: 2,
                            paddingY: 1,
                            paddingX: 0.5,
                            borderTop: '5px solid',
                            borderTopLeftRadius: '15px',
                            borderTopRightRadius: '15px',
                        }}
                    >
                        Datos del producto
                    </Typography>

                    {/* Línea de Paquete */}
                    {productos.items.map((item, index) => (

                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                borderBottom: '1px solid #ffffffff',
                                paddingY: 1,
                                paddingX: 0.5,
                            }}
                        >
                            <Typography sx={{
                                fontSize: {
                                    xs: '0.8rem',  // móviles
                                    sm: '1rem',    // tablets
                                    md: '1rem',  // pantallas mediana
                                },
                            }}>{item.campo13}</Typography>
                            <Typography>{item.campo14}</Typography>
                        </Box>
                    ))}

                    {/* Línea de Monto */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            borderBottom: '5px solid',
                            borderBottomLeftRadius: '15px',
                            borderBottomRightRadius: '15px',
                            paddingY: 1,
                            paddingX: 0.5,
                        }}
                    >
                        <Typography sx={{
                            fontSize: {
                                xs: '0.8rem',  // móviles
                                sm: '1rem',    // tablets
                                md: '1rem',  // pantallas mediana
                            },
                            fontWeight: 'bold'
                        }}>Monto total</Typography>
                        <Typography sx={{
                            fontSize: {
                                xs: '0.8rem',  // móviles
                                sm: '1rem',    // tablets
                                md: '1rem',  // pantallas mediana
                            },
                            fontWeight: 'bold'
                        }}>
                            {productos.montoTotal}
                        </Typography>
                    </Box>
                    {/* Título */}
                    <Typography
                        sx={{
                            fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' },
                            fontWeight: 'bold',
                            mb: 0,
                            mt: 2,
                            py: 1,
                            px: 0.5,
                            borderTop: '5px solid',
                            borderTopLeftRadius: '15px',
                            borderTopRightRadius: '15px',
                        }}
                    >
                        Imágenes:
                    </Typography>

                    {/* Línea de Miniaturas */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            py: 1,
                            px: 0.5,
                            borderBottom: '5px solid',
                            borderBottomLeftRadius: '15px',
                            borderBottomRightRadius: '15px',
                        }}
                    >
                        {imagenes.map((image, index) => (
                            <Box
                                key={index}
                                onClick={() => handleOpenImg(index)}
                                component="img"
                                src={image.path}
                                alt={image.nom_foto}
                                sx={{
                                    width: 80,
                                    height: 80,
                                    objectFit: 'cover',
                                    borderRadius: 2,
                                    boxShadow: 2,
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    }
                                }}
                            />
                        ))}
                    </Box>
                </Box>


            </Box>

            {/* Sección de Mapa */}
            {mapUrl && (
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
                        src={mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Box>
            )}
            <ImageViewerModal
                open={openImg}
                handleClose={handleCloseImg}
                imagenes={imagenesParaModal}
                selectedImgIndex={selectedImgIndex}
            />
        </Box>

    )
}