// src/components/Title.jsx
import React from 'react';
import './Title.css';

const Title = ({ children, level = 1, className = '' }) => {
  const Tag = `h${level}`;
  return (
    <Tag className={`title ${className}`}>
      {children}
    </Tag>
  );
};

export default Title;