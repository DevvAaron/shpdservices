import {
    Button,
    TextField,
    Box,
} from '@mui/material'
import Navbar from "../Header/Navbar"
import fondo from '../../assets/fondo.jpg';
import Footer from '../Footer/Footer';
import Ayuda from '../Footer/Ayuda';
export default function Seguimiento() {

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
                    display:'flex',
                    alignItems:'center',
                    position: 'relative',
                    padding: '0.8rem',
                    overflow: 'hidden',
                    minHeight: {
                        xs: '20rem',
                        sm: '30rem',
                        md: '35rem'
                    },
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
                        backgroundColor:'white',
                        opacity:'0.6', 
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
            {/*Quinto Box*/}
            <Ayuda />
            {/*Sextp Box*/}
            <Footer />
        </main>
    )
}