import { Box } from '@mui/material'
import fondo from '../../assets/fondo.jpg'
export default function InicioPrueba() {

    return (
        <Box
            name="Primer Box"
            sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                padding: '0.8rem',
                overflow: 'hidden',
                height: '100vh',
                backgroundImage: `url(${fondo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            {/* Mitad blanca con opacidad */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    clipPath: "polygon(0 0, 79% 0, 48% 100%, 0 100%);", // Triángulo diagonal
                }}
            />
            {/* Contenido encima */}
            <Box
                name='HOla'
                sx={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    width: '100%',
                    color: "black",
                }}
            >
                <h2>Servicio de Distribución</h2>
                <p>Entrega puntual en todo destino</p>
            </Box>
        </ Box>
    )
}