// src/components/Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
};

export default Card;