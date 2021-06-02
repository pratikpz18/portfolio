import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent'
import Main from './components/Main';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <Main></Main>
      <Projects></Projects>
      <Resume></Resume>
      <Contact></Contact>
    </div>
  );
}

export default App;
