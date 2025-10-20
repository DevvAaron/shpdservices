import { Box } from '@mui/material'
import { Titulo1 } from '../Hoocks/Titulos'
import AssistantPhotoOutlinedIcon from '@mui/icons-material/AssistantPhotoOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
export default function Valores() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                justifyContent: 'space-evenly',
                alignItems: 'center',
                height: '100%',
            }
            }>
            <Box name='Contenedor Valores'
                sx={{
                    backgroundColor: '#0000000d',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    pt: '30px'
                }}>
                <Titulo1 titulo={'Nuestros Valores'} sx={{
                    fontSize: '2rem',
                    borderBottom: '3px solid #13B5EA',
                    width: '15rem',
                    ":hover": {
                        borderBottom: '3px solid #000000ff',
                        color: '#13B5EA'
                    },
                }} />
                <Box sx={{
                    mt: '2rem',
                    width: '100vw',
                    height: { xs: '100vh', sm: '50vh' },
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
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
                            subtitulo={'Ofrecemos logística integral (courier, encomiendas y express) con calidad y ética para satisfacer a nuestros clientes; garantizamos a nuestros colaboradores un entorno justo y de desarrollo con retribución por productividad; y mantenemos con proveedores relaciones leales y cumplimiento de acuerdos para impulsar mejoras.'}
                            sx={{
                                whiteSpace: 'normal',
                                overflowWrap: 'break-word',
                                wordBreak: 'break-word',
                            }}
                            sxSubtitulo={{
                                fontSize: { xs: '0.6rem', sm: '0.8rem' },
                                textAlign: 'justify',
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
                            subtitulo={'Que SPHD Jer Courier sea reconocida como una empresa de clase mundial, dando soluciones logísticas y de comunicación contando con el compromiso de nuestros representantes nacionales y con nuestra propia flota terrestre y aérea en el ámbito nacional e incursionando en el mercado internacional mediante sucursales propias y franquicias, basadas en la filosofía de servicio.'}
                            sx={{
                                whiteSpace: 'normal',
                                overflowWrap: 'break-word',
                                wordBreak: 'break-word',
                            }}
                            sxSubtitulo={{
                                fontSize: { xs: '0.6rem', sm: '0.8rem' },
                                textAlign: 'justify',
                            }} />
                    </Box>

                </Box>
            </Box>
        </Box >
    )
}