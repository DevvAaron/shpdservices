import { useState } from 'react';
import {
    Box,
    Typography, Modal, Backdrop, Fade, IconButton
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ImageViewerModal from '../Hoocks/ImageViewerModel';
const HistorialEstd = [
    {
        id: 1,
        texto: 'Entregado',
        fecha: '2024-12-18 00:00:00'
    }, {
        id: 2,
        texto: 'Transito',
        fecha: '2024-12-18 07:57:44'
    }, {
        id: 3,
        texto: 'En Gestion',
        fecha: '2024-12-17 22:33:15'
    }, {
        id: 4,
        texto: 'Registrado',
        fecha: '2024-12-17 20:28:29'
    }
]
const pasos = [
    {
        id: 1,
        texto: 'Gestionado',
        icono: <InventoryIcon />,
        activo: false,
    },
    {
        id: 2,
        texto: '¡En camino!',
        icono: <LocalShippingIcon />,
        activo: false,
    },
    {
        id: 3,
        texto: 'Entregado',
        icono: <MoveToInboxIcon />,
        activo: true,
    },
];

export default function ResultadoSeg({ data }) {
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(data.direccion)}&output=embed`;
    const [openImg, setOpenImg] = useState(false);
    const [selectedImgIndex, setSelectedImgIndex] = useState(0);

    const imagenes = data.dtproducto.img;

    // Abrir modal con imagen seleccionada
    const handleOpenImg = (index) => {
        setSelectedImgIndex(index);
        setOpenImg(true);
    };

    const handleCloseImg = () => {
        setOpenImg(false);
    };

    const handlePrev = () => {
        setSelectedImgIndex((prev) =>
            prev === 0 ? imagenes.length - 1 : prev - 1
        );
    };
    const handleNext = () => {
        setSelectedImgIndex((prev) =>
            prev === imagenes.length - 1 ? 0 : prev + 1
        );
    };

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
            <Box name='Cont1'
                sx={{
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
                        {pasos.map((paso) => (
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
                    {HistorialEstd.map((hEstado) => (
                        <Box key={hEstado.id} sx={{
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
                                {hEstado.texto}
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
                    }}>{data.nroTracking}</Typography>
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
                    }}>{data.reminente}</Typography>

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
                    }}>{data.destinatario}</Typography>

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
                    }}>{data.direccion}</Typography>
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
                    <Box
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
                        }}>{data.dtproducto.nombre} | {data.dtproducto.id}</Typography>
                        <Typography></Typography>
                    </Box>

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
                            {data.dtproducto.monto.toFixed(2)}
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
                                src={image}
                                alt={`Producto ${index + 1}`}
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
            {data?.direccion && (
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
                        src={`https://www.google.com/maps?q=${encodeURIComponent(data.direccion)}&output=embed`}
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
                imagenes={imagenes}
                selectedImgIndex={selectedImgIndex}
            />
        </Box>

    )
}