import { Box } from '@mui/material'
import { Titulo1 } from '../Hoocks/Titulos'
import AssistantPhotoOutlinedIcon from '@mui/icons-material/AssistantPhotoOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import repetir from '../../assets/wspblack.png'
export default function Valores() {
    return (
        <Box
            name='hola'
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                justifyContent: 'space-evenly',
                alignItems: 'center',
                height: '100%',
                p: 5
            }
            }>
            <Titulo1 titulo={'Nuestros Valores'} style={{
                height: { md: '20rem' }, writingMode: { md: 'vertical-lr' }, textOrientation: 'upright',
                fontSize: '2rem'
            }} />
            <Box name='Contenedor Valores'
                sx={{
                    flexDirection: 'column',
                }}>
                <Box sx={{
                    position: 'relative',
                    alignItems: 'center',
                    backgroundColor: '#54f9ff41',
                    borderRadius: '3rem',
                    overflow: 'hidden',
                    width: '100vw',
                    maxWidth: { xs: '80vw', sm: '60vw', md: '50vw' },
                    height: '100vh',
                    maxHeight: { xs: '30vh', sm: '25vh', md: '15vw' },
                    flex: 1,
                    m: 2,
                    p: 2,
                }}>
                    <AssistantPhotoOutlinedIcon sx={{ fontSize: { xs: '10vw', sm: '5vw', md: '5vw' } }} />
                    <Titulo1
                        titulo={'Mision'}
                        subtitulo={'Nuestra mision es facilitar el transporte de la carga de nuestros clientes, asegurando la calidad de cada procedimiento que permita el adecuado uso de tiempo y recursos, optimizando así los costos en las operaciones'}
                        sx={{
                            whiteSpace: 'normal',
                            overflowWrap: 'break-word',
                            wordBreak: 'break-word',
                            textAlign: 'center',
                            fontSize: { xs: '0.8rem', sm: '1rem', md: '0.9rem' }
                        }} />
                </Box>
                <Box sx={{
                    alignItems: 'center',
                    backgroundColor: '#54f9ff41',
                    borderRadius: '3rem',
                    overflow: 'hidden',
                    width: '100vw',
                    maxWidth: { xs: '80vw', sm: '60vw', md: '50vw' },
                    height: '100vh',
                    maxHeight: { xs: '30vh', sm: '25vh', md: '15vw' },
                    flex: 1,
                    m: 2,
                    p: 2
                }}>
                    <RemoveRedEyeOutlinedIcon sx={{ fontSize: { xs: '10vw', sm: '5vw', md: '5vw' } }} />
                    <Titulo1
                        titulo={'Vision'}
                        subtitulo={'Nuestra vision es llegar a ser una empresa lider en el transporte de carga, ofreciendo un servicio diferencial para nuestros clientes, ser pionera en la innovación y uso de la tecnologia para agilizar la logística de cada embarque.'}
                        sx={{
                            whiteSpace: 'normal',
                            overflowWrap: 'break-word',
                            wordBreak: 'break-word',
                            textAlign: 'center',
                            fontSize: { xs: '0.8rem', sm: '1rem', md: '0.9rem' }
                        }} />
                </Box>
                <Box sx={{
                    alignItems: 'center',
                    backgroundColor: '#54f9ff41',
                    borderRadius: '3rem',
                    overflow: 'hidden',
                    width: '100vw',
                    maxWidth: { xs: '80vw', sm: '60vw', md: '50vw' },
                    height: '100vh',
                    maxHeight: { xs: '30vh', sm: '25vh', md: '15vw' },
                    flex: 1,
                    m: 2,
                    p: 2
                }}>
                    <TaskAltOutlinedIcon sx={{ fontSize: { xs: '10vw', sm: '5vw', md: '5vw' } }} />
                    <Titulo1
                        titulo={'Objetivo'}
                        subtitulo={'Aspiramos a lograr la máxima satisfacción del cliente, analizando, estudiando y monitoreando sus necesidades a través de nuestro recurso humano y tecnológico, entendiendo las necesidades particulares de cada cargamento.'}
                        sx={{
                            whiteSpace: 'normal',
                            overflowWrap: 'break-word',
                            wordBreak: 'break-word',
                            textAlign: 'center',
                            fontSize: { xs: '0.8rem', sm: '1rem', md: '0.9rem' }
                        }} />
                </Box>
            </Box>
        </Box >
    )
}