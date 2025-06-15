import React from 'react';
import './App.css';

import MainPage from './pages/main-page/main';
import Experience from './pages/experience-page/experience-page';
import Navbar from "./components/navBar";
import ProjectsPage from './pages/project-page/project-page';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <MainPage />
      <Experience />
      <ProjectsPage/>
    </div>
  );
}

export default App;
