import { Box, Typography } from '@mui/material'

export const Titulo1 = ({ titulo, subtitulo, style = {}, sx = {}, sxSubtitulo = {}, children }) => {
    return (
        <Box sx={{ textAlign: 'center', ...sx }}>
            <Typography component="h1" sx={{
                m: 0, fontFamily: 'fantasy',
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.5rem' }, ...sx, ...style
            }}>
                {titulo}
            </Typography>
            {
                subtitulo && (
                    <Typography component="p" sx={{
                        mt: 1,
                        lineHeight: 1.4,
                        ...sxSubtitulo,
                        ...sx
                    }}>
                        {subtitulo}
                    </Typography>
                )
            }
            {children}
        </Box >
    );
};

export const Titulo2 = ({ titulo, sx = {} }) => {
    return (
        <Box className="titulo-animado" sx={{ textAlign: 'center', }}>
            <Typography component="h2" sx={{ fontSize: '1.2rem', margin: 5, fontFamily: 'fantasy', ...sx }}>
                {titulo}
            </Typography>
        </Box>
    );
};

export const Titulo3 = ({ titulo, subtitulo, style, mostrarLink = false }) => {
    return (
        <div className="titulo-animado" style={{
            textAlign: 'center', display: "flex", flexDirection: "column", alignItems: "center",
            maxWidth: '25rem',
        }}>
            <h2 style={{
                ...style,
                margin: 0,
                fontWeight: 'bold'
            }}>
                {titulo}
            </h2>
            {subtitulo && (
                <p style={{
                    ...style,
                    fontSize: '1.2rem'
                }}>
                    {subtitulo}
                    {mostrarLink && <a href="/contacto"> aquí</a>}
                </p>
            )}
        </div>
    );
};
export const Contenido = ({ contenido }) => {
    return (
        <div style={{
            textAlign: 'left', display: "flex", flexDirection: "column", alignItems: "center",
            whiteSpace: 'pre-line'
        }}>
            <p style={{ fontSize: '1.2rem' }}>
                {contenido}
            </p>
        </div>
    );
};
export const Subtitulo = ({ subtitulo, style }) => {
    return (
        <div style={{
            textAlign: 'left', display: "flex", flexDirection: "column", alignItems: "left"
        }}>
            <p style={{
                fontSize: '1rem',
                fontWeight: 'bold'
            }}>
                {subtitulo}
            </p>
        </div>
    );
};
