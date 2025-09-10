import { Box, Typography, Button, colors, TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import Navbar from "../Header/Navbar"
import ComponentFooter from "../Footer/Footer"
import { Cobertura1 } from "../Cobertura/PageCobertura"
import AnimatedBox from '../Hoocks/AnimatedBox'; // 👈 importa el nuevo componente
import { useState } from "react";
import mundo from '../../assets/mundo.png';
import img from '../../assets/imgCalc.png'
import OutlinedInput from '@mui/material/OutlinedInput';



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
                        name: '1dsadsasd',
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: {
                            xs: 'column', // En móvil apilado
                            sm: 'row',
                            md: 'row'     // Desde desktop, lado a lado
                        },
                        fontSize: {
                            xs: '0.8rem',  // para móviles
                            sm: '0.75rem', // tablets
                            md: '0.7rem'   // escritorios
                        },
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        margin: '0 auto',
                        width: {
                            xs: '20rem',
                            sm: '40rem',
                            md: '150rem'
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
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>

                        <Box
                            sx={{
                                position: 'relative',
                                zIndex: 2,
                                bgcolor: 'rgba(255, 255, 255, 0)',
                                minHeight: '200px',
                                p: {
                                    xs: 3,
                                    sm: 4,
                                    md: 2,
                                },
                                minWidth:{
                                    md:'30rem'
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
                                        md: '2rem',
                                    },
                                    textAlign: 'center',
                                    fontFamily: 'fantasy',
                                }}
                            >
                                Calculadora de precios
                            </Typography>


                            <Box
                                sx={{
                                    display: 'grid',
                                    gap: 2,
                            minWidth: {
                                sm:'20rem',
                                md:'30rem'
                            },
                                    gridTemplateColumns: {
                                        xs: '1fr',           // 1 columna en pantallas pequeñas
                                        sm: 'repeat(3, 1fr)' // 3 columnas desde sm en adelante
                                    },
                                    gridTemplateRows: {
                                        xs: 'auto', // auto filas en xs
                                        sm: 'auto auto' // 2 filas desde sm
                                    },
                                }}
                            >
                                {/* Select Estados */}
                                <FormControl
                                    fullWidth
                                    sx={{
                                        maxWidth: '100%',
                                    }}
                                >
                                    <InputLabel id="estado-label">Estados</InputLabel>
                                    <Select
                                        labelId="estado-label"
                                        id="estado-select"
                                        value={estado}
                                        label="Estados"
                                        onChange={(e) => setEstado(e.target.value)}
                                        input={
                                            <OutlinedInput
                                                label="Estados"
                                                sx={{
                                                    borderRadius: '0.5rem',
                                                    '& fieldset': {
                                                        borderColor: 'black',
                                                        borderWidth: '1px',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'black',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: 'black',
                                                    },
                                                }}
                                            />
                                        }
                                        MenuProps={{
                                            PaperProps: {
                                                sx: {
                                                    maxHeight: {
                                                        xs: 200,
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
                                        maxWidth: '100%',
                                    }}
                                >
                                    <InputLabel id="municipio-label">Municipios</InputLabel>
                                    <Select
                                        labelId="municipio-label"
                                        id="municipio-select"
                                        value={munucipio}
                                        label="Municipios"
                                        onChange={(e) => setMunicipio(e.target.value)}
                                        input={
                                            <OutlinedInput
                                                label="Municipios"
                                                sx={{
                                                    borderRadius: '0.5rem',
                                                    '& fieldset': {
                                                        borderColor: 'black',
                                                        borderWidth: '1px',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'black',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: 'black',
                                                    },
                                                }}
                                            />
                                        }
                                        MenuProps={{
                                            PaperProps: {
                                                sx: {
                                                    maxHeight: {
                                                        xs: 200,
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

                                {/* Select Localidades */}
                                <FormControl
                                    fullWidth
                                    sx={{
                                        maxWidth: '100%',
                                    }}
                                >
                                    <InputLabel id="localidad-label">Localidades</InputLabel>
                                    <Select
                                        labelId="localidad-label"
                                        id="localidad-select"
                                        value={localidad}
                                        label="Localidades"
                                        onChange={(e) => setLocalidad(e.target.value)}
                                        input={
                                            <OutlinedInput
                                                label="Localidades"
                                                sx={{
                                                    borderRadius: '0.5rem',
                                                    '& fieldset': {
                                                        borderColor: 'black',
                                                        borderWidth: '1px',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'black',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: 'black',
                                                    },
                                                }}
                                            />
                                        }
                                        MenuProps={{
                                            PaperProps: {
                                                sx: {
                                                    maxHeight: {
                                                        xs: 200,
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

                                {/* Campo de peso (ocupa toda la segunda fila en sm/md) */}
                                <TextField
                                    label="Peso"
                                    id="outlined-start-adornment"
                                    sx={{
                                        gridColumn: {
                                            xs: 'auto',
                                            sm: '1 / span 3', // desde columna 1, ocupa 3 columnas
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '0.5rem',
                                            '& fieldset': {
                                                borderColor: 'black',
                                                borderWidth: '1px',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'black',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'black',
                                            },
                                        },
                                        '& .MuiInputAdornment-root': {
                                            borderLeft: '1px solid black',
                                            marginLeft: '8px',
                                            paddingLeft: '8px',
                                        },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                kg
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>


                            <Box>
                                <Button
                                    variant="text"
                                    sx={{
                                        fontSize: 20,
                                        color: colors.common.black,
                                        borderColor: colors.common.black,
                                        '&:hover': {
                                            backgroundColor: '#4e7da3',
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
                            component="img"
                            src={img}
                            alt=""
                            sx={{
                                width: {
                                    xs: '300px', // 👈 ancho en móviles
                                    sm: '400px', // 👈 ancho en tablets
                                    md: '500px'  // 👈 ancho en escritorios (opcional)
                                },
                                maxWidth: '100%', // evita que se desborde
                                height: 'auto',
                            }}
                        >
                        </Box>
                    </AnimatedBox>

                </Box>
            </Box >

            {/*Tercer Box*/}
            < Box
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
                }
                }>
                {/* Capa de desenfoque */}
                < Box
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
                < Box
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
                </Box >
            </Box >

            {/*Tercer Box */}
            < ComponentFooter />
        </main >
    )
}