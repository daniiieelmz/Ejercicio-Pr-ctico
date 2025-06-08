// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/Welcome';
import HomePage from './pages/HomePage/Home';
import CreateCoursePage from './pages/CreateCoursePage/CreateCourse';
import EditCoursePage from './pages/EditCoursePage/EditCourse';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/create" element={<CreateCoursePage />} />
          <Route path="/edit/:id" element={<EditCoursePage />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;