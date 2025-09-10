import * as Accordion from '@radix-ui/react-accordion'
import { motion, AnimatePresence } from 'framer-motion'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import ComponentAyuda from '../Footer/Ayuda'
import ComponentFooter from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import { useState } from 'react'
import { Cobertura2 } from '../Cobertura/PageCobertura'

// Motion wrapper
const MotionContent = motion.create(Box)

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
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    border: "0.15rem solid #000000ff",
}))

export default function Ayuda() {
    const [openItem, setOpenItem] = useState(null)

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
            <Box sx={{
                maxWidth: {
                    sm: '30rem',
                    md: '50rem',
                },
                margin: '0 auto',
                p: 2
            }}>
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
            {/*Segundo Box */}
            <ComponentAyuda />
            {/*Tercer Box */}
            <ComponentFooter />
        </main >
    )
}
