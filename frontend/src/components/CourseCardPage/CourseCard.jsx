// src/components/CourseCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../CardPage/Card';
import Button from '../ButtonPage/Button';
import './CourseCard.css';

const CourseCard = ({ course, onDelete }) => {
  return (
    <Card className="course-card">
      <div className="course-header">
        <h3 className="course-title">{course.curso}</h3>
        <div className="course-instructor">{course.instructor}</div>
      </div>
      
      <div className="course-details">
        <div className="course-field">
          <span className="field-label">Temática:</span>
          <span className="field-value">{course.tematica}</span>
        </div>
        <div className="course-description">
          {course.descripcion}
        </div>
      </div>
      
      <div className="course-actions">
        <Link to={`/edit/${course.id}`}>
          <Button variant="secondary" className="small">Editar</Button>
        </Link>
        <Button 
          variant="danger" 
          className="small"
          onClick={() => onDelete(course.id)}
        >
          Eliminar
        </Button>
      </div>
    </Card>
  );
};

export default CourseCard;