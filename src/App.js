import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent'
import Main from './components/Main';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <div className="container">
      </div>
      <NavbarComponent></NavbarComponent>
      <Main></Main>
      <Projects></Projects>
      <Resume></Resume>
    </div>
  );
}

export default App;
