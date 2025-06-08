// src/components/Message.jsx
import React from 'react';
import './Message.css';

const Message = ({ children, type = 'info', className = '' }) => {
  return (
    <div className={`message ${type} ${className}`}>
      {children}
    </div>
  );
};

export default Message;