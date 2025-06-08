// src/pages/WelcomePage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/TitlePage/Title';
import Button from '../../components/ButtonPage/Button';
import './Welcome.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <Title level={1} className="text-center mb-4">Bienvenido a la Plataforma de Gestión de Cursos</Title>
        <p className="text-lg text-center mb-8">Tu herramienta para administrar cursos online</p>
        <div className="flex justify-center">
          <Button onClick={() => navigate('/home')} className="primary">Ir al Dashboard</Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;