// src/components/AnimatedBox.jsx
import React from 'react';
import { Box } from '@mui/material';
import useAnimateOnScroll from '../hoocks/useAnimateOnScroll';

const AnimatedBox = ({
  children,
  animation = 'animate__fadeIn',
  delay = 0,
  duration = 1000,
  once = true,
  threshold = 0.1,
  sx = {},
  ...rest
}) => {
  const [ref, className, style] = useAnimateOnScroll(animation, { delay, duration, once, threshold });

  return (
    <Box
      ref={ref}
      className={`animate__animated ${className}`}
      sx={style}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default AnimatedBox;
