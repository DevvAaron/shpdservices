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
import { Titulo1 } from "../Titulos";
import Footer from '../Footer/Footer';
import Ayuda from '../Footer/Ayuda';

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
                        zIndex: 1,
                    }}
                />

                {/* Contenedor de ambos lados */}
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: {
                            xs: 'column', // En móvil apilado
                            md: 'row'     // Desde desktop, lado a lado
                        },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        width: '100%',
                        gap: 4,
                        py: 4,
                        px: { xs: 2, sm: 4 },
                    }}
                >
                    {/* 📌 Nuevo Box (izquierda) */}
                    <Box
                        className={"animated-box"}
                        sx={{
                            flex: 1,
                            color: 'white',
                            fontFamily: 'fantasy',
                            textAlign: {
                                xs: 'center',
                                md: 'left'
                            },
                        }}
                    >
                        <Titulo1 titulo={"Envía tus productos y recibe el pago contra entrega"} subtitulo={"Recogemos el pedido, lo llevamos a tu cliente, recibimos el pago y te enviamos el dinero de forma segura"}
                            style={{
                                textAlign: 'left', color: '#263D4F'
                            }} />
                    </Box>

                    {/* Contenido principal */}
                    <Box
                        className="animated-box"
                        sx={{
                            position: 'relative',
                            zIndex: 2,
                            bgcolor: 'rgba(255, 255, 255, 0)',
                            minHeight: '200px',
                            width: {
                                xs: '100%',   // móviles
                                sm: '80%',    // tablets
                                md: '25rem',  // escritorios
                            },
                            p: {
                                xs: 2,
                                sm: 3,
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
                                    sm: tipoDoc === 'DNI' ? '1fr 1fr' : '1fr 1fr',  // tablets: 2 columnas
                                    md: tipoDoc === 'DNI' ? '1fr 2fr 1fr' : '1fr 2fr', // escritorio: 3 columnas o 2
                                },
                                gap: 2,
                                width: '100%',
                            }}
                        >
                            {/* Select tipo de documento */}
                            <FormControl fullWidth sx={{ minWidth: '80px' }}>
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
                                    gridColumn: {
                                        xs: 'auto',
                                        sm: tipoDoc === 'DNI' ? 'auto' : 'span 2',
                                        md: tipoDoc === 'DNI' ? 'auto' : 'span 2',
                                    },
                                }}
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
                </Box>
            </Box>

            {/*Segundo Box*/}
            <Ayuda />
            {/*Tercer Box*/}
            <Footer />
        </main>
    )
}