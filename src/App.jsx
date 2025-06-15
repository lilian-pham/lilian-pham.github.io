import React from 'react';
import './App.css';

import MainPage from './pages/main-page/main';
import Experience from './pages/experience-page/experience-page';
import Navbar from "./components/navBar";
import ProjectsPage from './pages/project-page/project-page';
import EducationPage from './pages/education-page/education-page';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <MainPage />
      <Experience />
      <ProjectsPage/>
      <EducationPage/>
    </div>
  );
}

export default App;
