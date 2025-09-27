import { Box } from '@mui/material'

import { motion } from 'framer-motion';

import fondo1 from '../../assets/fondo.png';

export default function FondoInicio({ children }, nombre ={}) {
    return (<Box
        name={nombre}
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow='hidden'
        width='100vw'
        height='100%'
    >

        {/* Primer Box (Imagen Actual) */}
        <motion.div
            name='hola'
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.8 }}
            sx={{
                height: '100vh'
            }}
        >
            <Box
                name="Primer Box"
                sx={{
                    position: 'relative', zIndex: 1,
                    overflow: 'hidden',
                    backgroundImage: `url(${fondo1})`,
                    transition: 'background-image 2s ease-in-out',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    maxHeight: {
                        xs: '80vh',
                        md: '100vh',
                    },
                    minWidth: {
                        xs: '100vw',   // móviles
                        sm: '50rem',    // tablets
                        md: '100vw',  // escritorios
                    },
                }}
            />
        </motion.div>

        {/* Mitad blanca con opacidad */}
        <Box
            sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: "#23cfffa9",
                clipPath: { xs: "polygon(0 0, 100% 0, 100% 90%, 0 90%)", sm: "polygon(0 0, 100% 0, 100% 95%, 0 95%)", md: "polygon(31% 100%, 72% 0, 0 0, 0 100%);" }, // Triángulo diagonal

            }}
        />
        <Box
            name='Hijo'
            sx={{
                position: 'absolute',
                zIndex: 2,
            }}
        >
            {children}
        </Box>

    </Box>
    )
}