import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/TitlePage/Title';
import Button from '../../components/ButtonPage/Button';
import Message from '../../components/MessagePage/Message';
import CourseCard from '../../components/CourseCardPage/CourseCard';
import './Home.css';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://retoolapi.dev/6QbyzP/cursos-online');
        if (!response.ok) throw new Error('Error al obtener los cursos');

        const data = await response.json();
        setCourses(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este curso?')) {
      try {
        const response = await fetch(`https://retoolapi.dev/6QbyzP/cursos-online/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setCourses(courses.filter(course => course.id !== id));
        } else {
          throw new Error('Error al eliminar el curso');
        }
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const filteredCourses = courses.filter(course =>
    course.curso.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="header-container">
        <div className="header">
          <Title level={1}>Gestión de Cursos Online</Title>
          <div className="controls">
            <div className="search-container">
              <input
                type="text"
                placeholder="Buscar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
            <div className="button-container">
              <Link to="/create">
                <Button className="primary">Crear Nuevo Curso</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container">
        {error && <Message type="error">{error}</Message>}

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Cargando cursos...</p>
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="no-results">
            <p>No se encontraron cursos. Intenta con otra búsqueda o crea un nuevo curso.</p>
          </div>
        ) : (
          <div className="courses-grid">
            {filteredCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
