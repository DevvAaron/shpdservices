import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Titulo1 } from '../Hoocks/Titulos';
import flecha from '../../assets/flecha.png';
import mundo from '../../assets/mundo.png';
import blackEmail from '../../assets/emailwhite.png';

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

export const Cobertura1 = () => {
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
                flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.5rem', gap: '2rem',
                opacity: 0.9,
                width: "100%"
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: '100vw',
                    maxWidth: { md: '30rem' },
                    backgroundImage: `url(${mundo})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:'contain',
                    height: '100vh',
                    maxHeight: { md: '80vh' }

                }}
            />
            <Box name='columna'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'center'
                }}>
                <img src={blackEmail}
                    width='200px'
                    height="200px" alt="" />

                <Titulo1 titulo={tituloTexto} subtitulo="Consulte nuestras zonas de cobertura" sxSubtitulo={{
                    marginBottom: '2.5rem',
                    padding: '0.5rem',
                    backgroundColor: '#57baf0ff',
                    borderRadius: '5px',
                    color: 'white',
                    border: '1px solid white'
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
                                border: '1px solid black',
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
        </Box>
    );
};

export const Cobertura2 = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    let cantidadVisible = ciudades.length;
    if (isXs) cantidadVisible = 6;
    else if (isSm) cantidadVisible = 10;
    const ciudadesMostradas = ciudades.slice(0, cantidadVisible);

    return (
        <Box name="Cobertura"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.5rem',
                opacity: 0.9,
                width: "100%",
            }}
        >
            <Box
                name="1"
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: '1fr 1fr',
                        md: '1fr 1fr 1fr'
                    },
                    gap: 1,
                    maxWidth: { sm: '50rem' },
                    width: '100%',
                    textAlign: 'center',
                }}
            >
                {ciudadesMostradas.map((ciudad, index) => (
                    <Box
                        name="2"
                        key={index}
                        sx={{
                            fontSize: '1rem',
                            padding: '0.05rem',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: {
                                xs: 'center',
                                sm: 'center'
                            },
                            textAlign: { xs: 'left' },
                            animation: `fadeScaleIn 0.4s ease-out ${index * 100}ms forwards`,
                            transform: 'scale(0.9)',       // Estado inicial para animación
                            transition: 'transform 0.3s ease',  // Suaviza el hover
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        <img src={flecha} alt="" />
                        <Box
                            sx={{
                                width: '8rem',
                                textAlign: { xs: 'center', sm: 'left', md: 'left' }
                            }}>
                            {ciudad}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

