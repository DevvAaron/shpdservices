import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Titulo1 } from '../hoocks/Titulos';
import flecha from '../../assets/flecha.png';
const tituloTexto = "Llegamos a todas las ciudades";
const ciudades = [
    "Ciudad de México", "Tijuana", "Ecatepec de Morelos",
    "León", "Puebla de Zaragoza", "Ciudad Juárez", "Guadalajara",
    "Zapopan", "Monterrey", "Nezahualcóyotl", "Chihuahua",
    "Mérida", "Cancún", "Saltillo", "Aguascalientes", "Hermosillo",
    "Mexicali", "San Luis Potosí", "Culiacán Rosales",
    "Santiago de Querétaro", "Naucalpan de Juárez",
    "Morelia", "Chimalhuacán"
];

const Cobertura = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    let cantidadVisible = ciudades.length;
    if (isXs) cantidadVisible = 6;
    else if (isSm) cantidadVisible = 8;

    const ciudadesMostradas = ciudades.slice(0, cantidadVisible);

    return (
        <Box name="Cobertura"
            sx={{
                minHeight: '350px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.5rem',
                opacity: 0.9,
                width:"100%"
            }}
        >
            <Titulo1 titulo={tituloTexto} subtitulo="Consulte nuestras zonas de cobertura" sx={{
                animation: `fadeScaleIn 0.4s ease-out 100ms forwards`,
                transform: 'scale(0.9)',       // Estado inicial para animación
                transition: 'transform 0.3s ease',  // Suaviza el hover
                '&:hover': {
                    transform: 'scale(1.05)',
                },
            }} />
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: '1fr 1fr',
                        md: '1fr 1fr 1fr'
                    },
                    gap: 1,
                    maxWidth: '800px',
                    width: '100%',
                    textAlign: 'center',
                }}
            >
                {ciudadesMostradas.map((ciudad, index) => (
                    <Box
                        key={index}
                        sx={{
                            fontSize: '1rem',
                            padding: '0.05rem',
                            alignItems: 'center',
                            display: 'flex',
                            animation: `fadeScaleIn 0.4s ease-out ${index * 100}ms forwards`,
                            transform: 'scale(0.9)',       // Estado inicial para animación
                            transition: 'transform 0.3s ease',  // Suaviza el hover
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        <img src={flecha} alt="" />
                        {ciudad}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Cobertura;
