import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import MainPage from './pages/main-page/main';
import Navbar from "./components/navBar";
import EducationPage from './pages/education-page/education-page';
import ExperiencePage from './pages/experience-page/experience-page';
import ProjectsPage from './pages/project-page/project-page';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/education" element={<EducationPage/>} />
        <Route path="/experience" element={<ExperiencePage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
