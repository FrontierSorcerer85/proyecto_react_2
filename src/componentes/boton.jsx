import React from 'react';
import './app.css';

const Boton = ({ onClick, children, className }) => {
  return (
    <button className={`Boton ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Boton;
