import { Box } from "@mui/material";
import { Titulo3 } from "../Hoocks/Titulos";
import wspwhite from '../../assets/wspwhite.png';
import emailwhite from '../../assets/emailwhite.png';
import wspblack from '../../assets/wspblack.png';
import emailblack from '../../assets/emailblack.png';
const tituloTexto = ["Atención al cliente", "767-53322", " informes@sphdservices.com", " ventas@sphdservices.com"];
const subtitulo = [
    "Somos una empresa, con un staff de profesionales altamente calificados, puedes comunicarte",
    "Oficina principal",
    "Correo electrónico"
];

const Ayuda = () => {
    return (
        <Box
            name="Ayuda"
            sx={{
                position: 'relative',
                color: "black",
                background: "white",
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Responsive layout
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: 3, md: 6 },
                width: '100%',
                height: '100%',
                minHeight: '60vh',
                opacity: 0.95,
                py: { xs: 1.5, sm: 2, md: 3.5 },  // padding vertical responsivo
                px: { xs: 0.5, sm: 2, md: 2.5 },  // padding horizontal responsivo
                boxSizing: 'border-box',
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
            <Box sx={{

                px: 2,
            }}>
                <img src={wspblack} alt="wsp" style={{ maxWidth: '6rem', height: 'auto', }} />
                <Titulo3 titulo={tituloTexto[1]} />
            </Box>
            <Box sx={{
                px: 2,
            }}>
                <img src={emailblack} alt="email" style={{ maxWidth: '6rem', height: 'auto', }} />

                <div className="titulo-animado" style={{
                    textAlign: 'center', display: "flex", flexDirection: "column", alignItems: "center",
                    maxWidth: '25rem',
                }}>
                    <a href="mailto:informes@sphdservices.com">{tituloTexto[2]}</a>
                    <a href="mailto:ventas@sphdservices.com">{tituloTexto[3]}</a>
                </div>
            </Box>
        </Box >
    );
};

export default Ayuda;
