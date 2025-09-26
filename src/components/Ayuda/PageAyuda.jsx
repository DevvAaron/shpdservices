import * as Accordion from '@radix-ui/react-accordion'
import { motion, AnimatePresence } from 'framer-motion'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import ComponentAyuda from '../Footer/Ayuda'
import ComponentFooter from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import { useState, useEffect } from 'react'
import { Cobertura2 } from '../Cobertura/PageCobertura'

import helpicon from '../../assets/ayuda.png';

import fondo1 from '../../assets/fondo.jpg';
import fondo2 from '../../assets/fondo2.jpg';
import fondo3 from '../../assets/fondo3.jpg';
// Motion wrapper
const MotionContent = motion.create(Box)
const imagenes = [fondo1, fondo2, fondo3];


function AccordionItem({ value, trigger, children, isOpen }) {
    return (
        <Accordion.Item value={value}>
            <StyledTrigger>{trigger}</StyledTrigger>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <Accordion.Content >
                        <MotionContent
                            name='A'
                            initial={{
                                height: 0,
                                opacity: 0,
                            }}
                            animate={{
                                height: 'auto',
                                opacity: 1
                            }}
                            exit={{
                                height: 0,
                                opacity: 0
                            }}
                            transition={{
                                duration: 0.3
                            }}
                            sx={{
                                margin: 1,
                                overflow: 'hidden', px: 2, py: 1,
                                backgroundColor: "#64d1f5ff",
                                opacity: "0.9",
                                border: "0.15rem solid #000000ff",
                                borderRadius: "0.5rem ",
                                display: "flex",
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {children}
                        </MotionContent>
                    </Accordion.Content>
                )}
            </AnimatePresence>
        </Accordion.Item>
    )
}

const StyledTrigger = styled(Accordion.Trigger)(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(2),
    margin: 2,
    textAlign: 'left',
    backgroundColor: "#ffffffff",
    cursor: 'pointer',
    outline: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    border: "0.15rem solid #000000ff",
}))

export default function Ayuda() {
    const [openItem, setOpenItem] = useState(null)

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
        }, 3000); // Cambia de imagen cada 5 segundos

        return () => clearInterval(intervalo);
    }, []);

    return (
        <main
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                backgroundColor: '#ff000000',
            }}
        >
            <Navbar />

            <Box sx={{ height: '80px' }} />
            {/*Primer Box */}

            <Box
                name="Primer Box"
                sx={{
                    position: 'relative',
                    padding: '0.8rem',
                    overflow: 'hidden',
                    backgroundImage: `url(${imagenes[index]})`,
                    transition: 'background-image 2s ease-in-out',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >{/* Capa de desenfoque */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        zIndex: 0,
                    }}
                />

                <Box
                    name='1' sx={{
                        position: 'relative',
                        zIndex: 2,
                        maxWidth: {
                            sm: '30rem',
                            md: '50rem',
                        },
                        margin: '0 auto',
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: '0 5px 60px rgba(0, 0, 0, 0.5)',
                    }}>
                    <img src={helpicon} alt="notificación" style={{ maxWidth: '4rem', height: 'auto', margin: '1rem' }} />
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{
                            fontSize: {
                                xs: '1.6rem',
                                sm: '2rem',
                                md: '2.5rem',
                            },
                            textAlign: 'center',
                            fontFamily: 'fantasy',
                            mt: '0.5rem',
                            marginBottom: '1.5rem',
                            width: '15rem'
                        }}
                    >
                        Preguntas Frecuentes
                    </Typography>
                    <Accordion.Root
                        type="single"
                        collapsible
                        value={openItem}
                        onValueChange={(val) => setOpenItem(val)}
                        sx={{
                        }}
                    >
                        <AccordionItem
                            value="item-1"
                            trigger="¿Cómo puedo enviar a través de SHPD SERVICES?"
                            isOpen={openItem === 'item-1'}
                        >
                            <Typography variant="body1">
                                Para poder realizar envíos con JER Courier solo necesitas crear una cuenta en nuestra Zona de Clientes. Una vez hayas registrado tus datos tendrás acceso al panel de envíos desde donde podrás programar el recojo de tus productos y seguir su camino hasta llegar a su destino.
                            </Typography>
                        </AccordionItem>

                        <AccordionItem
                            value="item-2"
                            trigger="¿Puedo realizar envíos contra entrega?"
                            isOpen={openItem === 'item-2'}
                        >
                            <Typography variant="body1">
                                Tus datos están disponibles en la sección "Perfil", ubicada en la parte superior derecha.
                            </Typography>
                        </AccordionItem>
                        <AccordionItem
                            value="item-3"
                            trigger="¿Dónde está el número de tracking?"
                            isOpen={openItem === 'item-3'}
                        >
                            <Typography variant="body1">
                                Una vez generado el pedido, el sistema le brindará al remitente un número de seguimiento (N° de tracking). Con él puede consultar el estado de su pedido, dónde se encuentra y los datos generales del envío.
                            </Typography>
                        </AccordionItem>

                        <AccordionItem
                            value="item-4"
                            trigger="¿Cuál es la cobertura de SHPD SERVICES?"
                            isOpen={openItem === 'item-4'}
                        >
                            <Cobertura2 />
                        </AccordionItem>
                    </Accordion.Root>
                </Box>
            </Box>
            {/*Segundo Box */}
            <ComponentAyuda />
            {/*Tercer Box */}
            <ComponentFooter />
        </main >
    )
}
