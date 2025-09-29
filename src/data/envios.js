// src/data/envios.js
import fondo from '../assets/fondo.jpg'
import fondo2 from '../assets/fondo2.jpg'

export const InfoEnvio = [
  {
    id: 1,
    nroTracking: '87755',
    reminente: 'CARAZ COMPANY S.A.C.',
    destinatario: 'ANA ISABEL BALBIN TORRES',
    direccion: 'JAVIER CORREA ELIAS 137-DPTO 402 SAN MIGUEL-LIMA-LIMA',
    dtproducto: {
      id: 1,
      nombre: 'Producto1',
      monto: 50,
      img: [fondo, fondo2]
    }
  },
  {
    id: 2,
    nroTracking: '87754',
    reminente: 'Reminente 2',
    destinatario: 'Destinatario2',
    direccion: 'Dirección 2',
    dtproducto: {
      id: 2,
      nombre: 'Producto2',
      monto: 20,
      img: [fondo]
    }
  },
  {
    id: 3,
    nroTracking: '87753',
    reminente: 'Reminente 3',
    destinatario: 'Destinario 3',
    direccion: 'Dirección 3',
    dtproducto: {
      id: 3,
      nombre: 'Producto3',
      monto: 100,
      img: [fondo]
    }
  }
]
