import { Box, TextField, Button, colors } from "@mui/material";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Subtitulo, Titulo1 } from '../Hoocks/Titulos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
export default function Contacto() {
    return (
        <main
            style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                backgroundColor: "#ff000000",
            }}
        >
            <Navbar />

            {/* Espacio para compensar el Navbar fijo */}
            <Box sx={{ height: "80px" }} />

            <Box
                sx={{
                    name: 'holdasdasdasa',
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    },
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor: "#f5f5f5",
                    maxWidth: {
                        xs: '30rem',
                        sm: '60rem',
                        md: '100%'
                    },
                    height: {
                        xs: '60rem',
                        sm: '30rem',
                        md: '30rem'
                    },
                    px: { xs: 2, sm: 4, md: 8 },
                    flexWrap: 'wrap',
                    overflow: 'hidden'
                }}
            >
                <Box name='BoxFormulario'>
                    <Titulo1 titulo={'Contactanos'} style={{ paddingBottom: '2rem' }} />
                    <Box
                        sx={{
                            maxWidth: {
                                xs: '100%',
                                sm: '20rem',
                                md: '40rem'
                            },
                            margin: "0 auto",
                            display: "grid",
                            gap: 3,
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2, 1fr)",
                            },
                            gridAutoRows: "auto",
                        }}
                    >
                        {/* Nombre */}
                        <TextField
                            label="Nombre"
                            variant="outlined"
                            fullWidth
                            sx={{
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
                            }}
                        />

                        {/* Teléfono */}
                        <TextField
                            label="Teléfono"
                            variant="outlined"
                            fullWidth
                            sx={{
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
                            }}
                        />

                        {/* Correo: Ocupa ambas columnas desde sm */}
                        <TextField
                            label="Correo"
                            variant="outlined"
                            fullWidth
                            type="email"
                            sx={{
                                gridColumn: {
                                    xs: "auto",
                                    sm: "1 / span 2",
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
                            }}
                        />

                        {/* Mensaje: Ocupa ambas columnas desde sm */}
                        <TextField
                            label="Mensaje"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            sx={{
                                gridColumn: {
                                    xs: "auto",
                                    sm: "1 / span 2",
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
                            }}
                        />
                    </Box>
                    <Button
                        variant="text"
                        sx={{
                            marginTop: 2,
                            fontSize: 20,
                            color: colors.common.black,
                            borderColor: colors.common.black,
                            '&:hover': {
                                backgroundColor: '#13B5EA',
                                color: 'white',
                                borderColor: colors.common.black,
                            },
                        }}
                    >
                        Realizar Envío
                    </Button>
                </Box>
                <Box name='BoxDatos'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOnIcon sx={{ color: 'black' }} />
                        <Subtitulo subtitulo={'Dirección fisica de SHPD Services Mexico'} style={{ paddingBottom: '3rem' }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PhoneIcon sx={{ color: 'black' }} />
                        <Subtitulo subtitulo={'946 021 240'} style={{ paddingBottom: '3rem' }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <EmailIcon sx={{ color: 'black' }} />
                        <Subtitulo subtitulo={'ventas@jercourier.com'} style={{ paddingBottom: '3rem' }} />
                    </Box>
                </Box>
            </Box>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.516896411934!2d-99.13320858462996!3d19.43260798688548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff1a5b5b0f5b%3A0xabc1234567890!2sCiudad%20de%20México!5e0!3m2!1ses!2smx!4v1694305600000!5m2!1ses!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>
            {/* Sección de Mapa */}
            <Footer />
        </main>
    );
}
