// src/components/Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  className = '', 
  variant = 'primary',
  disabled = false
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${variant} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;