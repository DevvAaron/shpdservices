import { Box } from "@mui/material";
import { Titulo3 } from "../hoocks/Titulos";
import wspblack from '../assets/wspblack.png';
import emailblack from '../assets/emailblack.png';

// Textos
const tituloTexto = ["Atención al cliente", "767-53322", " informes@sphdservices.com", " ventas@sphdservices.com"];
const subtitulo = [
    "Somos una empresa, con un staff de profesionales altamente calificados, puedes comunicarte",
    "Oficina principal",
    "Correo electrónico"
];

export const Ayuda = () => {
    return (
        <Box
            name="Ayuda"
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Responsive layout
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
                maxHeight: { xs: '100vh', sm: '80vh', md: '35vh' },
            }}
        >
            {/* Bloque 1 - Atención al cliente */}
            <Box
                name="block1"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    maxWidth: { xs: '100%', md: '40%' },
                    px: 2,
                }}
            >
                <Titulo3 titulo={tituloTexto[0]} subtitulo={subtitulo[0]} mostrarLink={true} />
            </Box>
            {/* Bloque 2 - WSP */}
            <Box sx={{
                px: 2,
            }}>
                <img loading="lazy" src={wspblack} alt="wsp" style={{ maxWidth: '6rem', height: 'auto' }} />
                <Titulo3 titulo={tituloTexto[1]} />
            </Box>

            {/* Bloque 3 - Correo*/}
            <Box sx={{
                textAlign: 'center', display: "flex", flexDirection: "column", alignItems: "center",
                maxWidth: '25rem',
                px: 2,
            }}>
                <img loading="lazy" src={emailblack} alt="email" style={{ maxWidth: '6rem', height: 'auto' }} />
                <a href="mailto:informes@sphdservices.com">{tituloTexto[2]}</a>
                <a href="mailto:ventas@sphdservices.com">{tituloTexto[3]}</a>
            </Box>
        </Box >
    );
};

export default Ayuda;
