// src/components/AnimatedBox.jsx
import React from 'react';
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
    <div
      ref={ref}
      className={`animate__animated ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default AnimatedBox;
