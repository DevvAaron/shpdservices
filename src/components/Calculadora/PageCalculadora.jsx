import { Box, Typography, Button, colors, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import Navbar from "../Header/Navbar"
import ComponentFooter from "../Footer/Footer"
import { Cobertura1 } from "../Cobertura/PageCobertura"
import AnimatedBox from '../Hoocks/AnimatedBox'; // 👈 importa el nuevo componente
import { useState } from "react";
import mundo from '../../assets/mundo.png';
import img from '../../assets/imgCalc.png'

export default function Calculadora() {


    const localidades = [
        "Localidad1",
        "Localidad2",
        "Localidad3",
        "Localidad4",
        "Localidad5",
        "Localidad6",
        "Localidad7",
        "Localidad8",
    ];
    const municipios = [
        "Munucipio1",
        "Munucipio2",
        "Munucipio3",
        "Munucipio4",
        "Munucipio5",
        "Munucipio6",
        "Munucipio7",
        "Munucipio8",
    ];
    const estados = [
        "Estado1",
        "Estado2",
        "Estado3",
        "Estado4",
        "Estado5",
        "Estado6",
        "Estado7",
        "Estado8",
    ];


    const [localidad, setLocalidad] = useState('');
    const [munucipio, setMunicipio] = useState('');
    const [estado, setEstado] = useState('');


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
            <Box sx={{ height: '80px' }} />
            {/* Primer Box */}
            <Box
                name="Primer Box"
                sx={{
                    position: 'relative',
                    padding: '0.8rem',
                    overflow: 'hidden',
                    backgroundColor: '#ffffff',
                    transition: 'background-image 1s ease-in-out',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >{/* Capa de desenfoque */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        zIndex: 0,
                    }}
                />

                {/* Contenedor de ambos lados */}
                <Box
                    sx={{
                        name: '1',
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: {
                            xs: 'column', // En móvil apilado
                            sm: 'row',
                            md: 'row'     // Desde desktop, lado a lado
                        },
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        width: {
                            xs: '20rem',
                            sm: '40rem',
                            md: '60rem'
                        },
                        gap: 4,
                        py: 4,
                        px: { xs: 2, sm: 4 },
                    }}
                >
                    {/* 1 columna*/}

                    <AnimatedBox animation="animate__fadeInUp" delay={300} duration={3000}
                        sx={{
                            name: '1',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>

                        <Box
                            sx={{
                                position: 'relative',
                                zIndex: 2,
                                bgcolor: 'rgba(255, 255, 255, 0)',
                                minHeight: '200px',
                                maxWidth: {
                                    xs: '100%',   // móviles
                                    sm: '80%',    // tablets
                                    md: '25rem',  // escritorios
                                },
                                p: {
                                    xs: 2,
                                    sm: 3,
                                    md: 5,
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
                                fontSize: {
                                    sm: "1rem"
                                }
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="div"
                                sx={{
                                    fontSize: {
                                        xs: '1.6rem',
                                        sm: '2rem',
                                        md: '2rem',
                                    },
                                    textAlign: 'center',
                                    fontFamily: 'fantasy',
                                }}
                            >
                                Calculadora de precios
                            </Typography>

                            {/* Select Estados */}
                            <FormControl
                                fullWidth
                            >
                                <InputLabel id="municipio-label">Estados</InputLabel>
                                <Select
                                    labelId="municipio-label"
                                    id="municipio-select"
                                    value={estado}
                                    label="Estados"
                                    onChange={(e) => setEstado(e.target.value)}
                                    MenuProps={{
                                        PaperProps: {
                                            sx: {
                                                maxHeight: {
                                                    xs: 200,  // aproximadamente 4 ítems (4 * 48px)
                                                    sm: 300,
                                                    md: 400,
                                                },
                                            },
                                        },
                                    }}
                                >
                                    {estados.map((estadoItem) => (
                                        <MenuItem key={estadoItem} value={estadoItem}>
                                            {estadoItem}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            {/* Select Municipios */}
                            <FormControl
                                fullWidth
                                sx={{
                                    maxWidth: {
                                        xs: '100%',
                                        sm: '100%',
                                        md: '12rem',
                                    },
                                }}
                            >
                                <InputLabel id="municipio-label">Municipios</InputLabel>
                                <Select
                                    labelId="municipio-label"
                                    id="municipio-select"
                                    value={munucipio}
                                    label="Municipios"
                                    onChange={(e) => setMunicipio(e.target.value)}
                                    MenuProps={{
                                        PaperProps: {
                                            sx: {
                                                maxHeight: {
                                                    xs: 200, // Muestra 4 items aprox. (48px * 4)
                                                    sm: 300,
                                                    md: 400,
                                                },
                                            },
                                        },
                                    }}
                                >
                                    {municipios.map((municipioItem) => (
                                        <MenuItem key={municipioItem} value={municipioItem}>
                                            {municipioItem}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            {/* Select Localidad */}
                            <FormControl
                                fullWidth
                                sx={{
                                    maxWidth: {
                                        xs: '100%',
                                        sm: '100%',
                                        md: '12rem',
                                    },
                                }}
                            >
                                <InputLabel id="localidad-label">Localidades</InputLabel>
                                <Select
                                    labelId="localidad-label"
                                    id="localidad-select"
                                    value={localidad}
                                    label="Localidades"
                                    onChange={(e) => setLocalidad(e.target.value)}
                                    MenuProps={{
                                        PaperProps: {
                                            sx: {
                                                maxHeight: {
                                                    xs: 200,  // ≈ 4 ítems de 48px
                                                    sm: 300,
                                                    md: 400,
                                                },
                                            },
                                        },
                                    }}
                                >
                                    {localidades.map((localidadItem) => (
                                        <MenuItem key={localidadItem} value={localidadItem}>
                                            {localidadItem}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

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

                    {/* 2 columna */}
                    <AnimatedBox animation="animate__fadeInUp" delay={300} duration={3000}>
                        <Box
                            sx={{
                                name: '2',
                                flex: 1,
                                color: 'black bold',
                                padding: {
                                    xs: 0,
                                    md: 2
                                },
                                maxWidth: { xs: '100%' },
                                WebkitBackdropFilter: 'blur(20px)', // Safari support
                                zIndex: 1,
                                textAlign: {
                                    xs: 'center',
                                    md: 'left'
                                },
                            }}
                        >
                            <img src={img} alt="" width='300rem' />
                        </Box>
                    </AnimatedBox>

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

            {/*Tercer Box */}
            <ComponentFooter />
        </main >
    )
}