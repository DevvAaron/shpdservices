import { Box } from "@mui/material";
import React from "react";
import { Titulo3 } from "../Hoocks/Titulos";
import notificon from '../../assets/notificacion.png';

const tituloTexto = ["Atención al cliente", "946021240", "ventas@jercourier.com"];
const subtitulo = [
    "Para más información sobre nuestros servicios o reportar algún problema puede llamarnos",
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
                opacity: 0.95,
                py: { xs: 1.5, sm:2,md: 3.5 },  // padding vertical responsivo
                px: { xs: 0.5, sm:2,md: 2.5 },  // padding horizontal responsivo
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

            {/* Bloque 2 - Info de contacto */}
            <Box
                name="block2"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    maxWidth: { xs: '100%', md: '40%' }, // simétrico al bloque 1
                    px: 2,
                    gap: 3,
                }}
            >
                <img src={notificon} alt="notificación" style={{ maxWidth: '6rem', height: 'auto',  }} />
                {tituloTexto.slice(1).map((titulo, index) => (
                    <Titulo3
                        key={index}
                        titulo={titulo}
                        subtitulo={subtitulo[index + 1]}
                    />
                ))}
            </Box>
        </Box >
    );
};

export default Ayuda;
