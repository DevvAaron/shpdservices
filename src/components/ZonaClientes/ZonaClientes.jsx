import {useState }from "react";
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Titulo1 } from "../Hoocks/Titulos";
import AnimatedBox from '../Hoocks/AnimatedBox';
export default function ZonaClientes() {

    const [tipoDoc, setTipoDoc] = useState('DNI');
    return (
        <motion.div
            style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                backgroundColor: "#ff000000",
            }}>
            <Navbar />
            {/* Espacio para compensar el Navbar fijo */}
            <Box sx={{ height: '80px' }} />

            <Box
                sx={{
                    bgcolor: 'white',
                    maxWidth: {
                        xs: '25rem',
                        sm: '46rem',
                        md: '90rem'
                    },
                    height: '100vh',
                    padding: '1rem'
                }}
            >
                <Titulo1 titulo={'Zona de Clientes'} style={{ fontSize: '1rem' }} />

               
            </Box>

            <Footer />
        </motion.div>
    )
}