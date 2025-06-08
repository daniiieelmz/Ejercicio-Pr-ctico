import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Title from '../../components/TitlePage/Title';
import Button from '../../components/ButtonPage/Button';
import Card from '../../components/CardPage/Card'; // Asegúrate de que la ruta sea la correcta
import './CreateCourse.css';

const CreateCoursePage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://retoolapi.dev/6QbyzP/cursos-online', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Error al crear el curso');
      await response.json();
      toast.success('Curso creado exitosamente!');
      setTimeout(() => navigate('/home'), 1500);
    } catch (error) {
      toast.error(error.message || 'Ocurrió un error al crear el curso');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="create-course-container">
      {/* Colocamos el título fuera (arriba) de la Card */}
      <Title level={1} className="text-center mb-6">Crear Nuevo Curso</Title>
      
      <Card>
        <form onSubmit={handleSubmit(onSubmit)} className="course-form">
          <div className="form-group">
            <label htmlFor="curso">Nombre del Curso *</label>
            <input
              id="curso"
              type="text"
              className={`form-input ${errors.curso ? 'error' : ''}`}
              {...register('curso', { required: 'El nombre del curso es obligatorio' })}
            />
            {errors.curso && <p className="error-message">{errors.curso.message}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="tematica">Temática *</label>
            <input
              id="tematica"
              type="text"
              className={`form-input ${errors.tematica ? 'error' : ''}`}
              {...register('tematica', { required: 'La temática es obligatoria' })}
            />
            {errors.tematica && <p className="error-message">{errors.tematica.message}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="instructor">Instructor *</label>
            <input
              id="instructor"
              type="text"
              className={`form-input ${errors.instructor ? 'error' : ''}`}
              {...register('instructor', { required: 'El nombre del instructor es obligatorio' })}
            />
            {errors.instructor && <p className="error-message">{errors.instructor.message}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="descripcion">Descripción *</label>
            <textarea
              id="descripcion"
              className={`form-input ${errors.descripcion ? 'error' : ''}`}
              rows={5}
              {...register('descripcion', { 
                required: 'La descripción es obligatoria',
                minLength: {
                  value: 20,
                  message: 'La descripción debe tener al menos 20 caracteres'
                }
              })}
            ></textarea>
            {errors.descripcion && <p className="error-message">{errors.descripcion.message}</p>}
          </div>
          
          <div className="form-actions">
            <Button type="submit" variant="success" disabled={isSubmitting}>
              {isSubmitting ? 'Creando...' : 'Crear Curso'}
            </Button>
            <Button type="button" variant="secondary" onClick={() => navigate('/home')}>
              Cancelar
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateCoursePage;
