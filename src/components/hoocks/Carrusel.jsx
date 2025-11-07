import React, { useState } from 'react';
import { Box, IconButton, Typography, Paper } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
// --- 1. DATOS DE EJEMPLO ---
const items = [
    {
        name: "Paisaje Nevado",
        description: "Una vista impresionante de las montañas cubiertas de nieve.",
        img: img1
    },
    {
        name: "Playa Tropical",
        description: "Arena blanca y aguas cristalinas para un descanso perfecto.",
        img: img2
    },
    {
        name: "Ciudad Moderna",
        description: "La arquitectura y el dinamismo de la vida urbana.",
        img: img3
    }
];

// --- 3. COMPONENTE PRINCIPAL DEL CARRUSEL ---
export default function MuiSimpleCarousel() {
    // Estado para saber qué índice de imagen mostrar
    const [activeIndex, setActiveIndex] = useState(0);
    const totalItems = items.length;

    // Lógica para ir a la siguiente imagen
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    // Lógica para ir a la imagen anterior
    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    const currentItem = items[activeIndex];

    return (
        <Paper
            elevation={4}
            sx={{
                maxWidth: 700,
                mx: 'auto',
                mb: 4,
                p: 2,
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Typography variant="h6" align="center" sx={{ mb: 1, fontWeight: 'bold' }}>
                {currentItem.name}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {/* Botón Anterior */}
                <IconButton
                    onClick={handlePrev}
                    sx={{ position: 'absolute', left: 5, zIndex: 10, color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' } }}
                >
                    <NavigateBeforeIcon />
                </IconButton>

                {/* Contenido de la Imagen */}
                <Box
                    component="img"
                    sx={{
                        height: 'auto',
                        width: '100%',
                        maxHeight: 400,
                        objectFit: 'cover',
                        borderRadius: 1,
                        transition: 'opacity 0.5s ease-in-out', // Opcional: añade una transición simple
                    }}
                    alt={currentItem.name}
                    src={currentItem.img}
                />

                {/* Botón Siguiente */}
                <IconButton
                    onClick={handleNext}
                    sx={{ position: 'absolute', right: 5, zIndex: 10, color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' } }}
                >
                    <NavigateNextIcon />
                </IconButton>
            </Box>

            {/* Indicadores (Opcional) */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                {items.map((_, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            mx: 0.5,
                            backgroundColor: index === activeIndex ? 'primary.main' : 'grey.400',
                            cursor: 'pointer',
                        }}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </Box>
        </Paper>
    );
}