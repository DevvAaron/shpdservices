import { useState } from 'react';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Modal, Box, Fade, ButtonGroup, Button } from '@mui/material';
import { Backdrop } from '@mui/material';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import RotateRightIcon from '@mui/icons-material/RotateRight'
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import SwapVertIcon from '@mui/icons-material/SwapVert';

export default function ImageViewerModal({ open, handleClose, imagenes, selectedImgIndex }) {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);

  const handleRotateRight = () => setRotation((prev) => prev + 90);
  const handleRotateLeft = () => setRotation((prev) => prev - 90);
  const handleZoomIn = () => setScale((prev) => prev + 0.1);
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.1));
  const handleFlipH = () => setFlipH((prev) => !prev);
  const handleFlipV = () => setFlipV((prev) => !prev);
  const resetTransforms = () => {
    setRotation(0);
    setScale(1);
    setFlipH(false);
    setFlipV(false);
  };

  const transformStyles = `
    rotate(${rotation}deg)
    scale(${flipH ? -scale : scale}, ${flipV ? -scale : scale})
  `;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slotProps={{
        backdrop: {
          timeout: 500, // ejemplo, igual que BackdropProps antes
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            outline: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {/* Imagen con transformaciones */}
          <Box
            component="img"
            src={imagenes[selectedImgIndex]}
            alt="Imagen ampliada"
            sx={{
              maxWidth: '80vw',
              maxHeight: '80vh',
              borderRadius: 2,
              boxShadow: 5,
              transform: transformStyles,
              transition: 'transform 0.3s ease-in-out',
            }}
          />

          {/* Botones de edición */}
          <ButtonGroup variant="contained" color="primary" sx={{ mt: 1 }}>
            <Button onClick={handleRotateRight}><RotateRightIcon /></Button>
            <Button onClick={handleRotateLeft}><RotateLeftIcon /></Button>
            <Button onClick={handleZoomIn}><ZoomInIcon /></Button>
            <Button onClick={handleZoomOut}><ZoomOutIcon /></Button>
            <Button onClick={handleFlipH}><SyncAltIcon /></Button>
            <Button onClick={handleFlipV}><SwapVertIcon /></Button>
            <Button onClick={resetTransforms}><RestartAltIcon /></Button>
          </ButtonGroup>
        </Box>
      </Fade>
    </Modal>
  );
}
