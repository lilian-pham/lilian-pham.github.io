import React from 'react';

import './App.css'; // not needed

import MainPage from './main';
import Experience from './components/experience';

function App() {

  return (
    <div className="App">
      <MainPage />
      <Experience />
    </div>
  );
}

export default App;
