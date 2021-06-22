import React,{useEffect,useState} from 'react';
import './App.css';
import { css } from "@emotion/react";
import NavbarComponent from './components/NavbarComponent'
import Main from './components/Main';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const override = css`
  position:absolute;
  background-color:rgb(235, 235, 235);
  height:100vh;
  width:100vw;
`;

function App() {
  const [loading,SetLoading]=useState(true);
  useEffect(() => {
    setTimeout(()=>{
      SetLoading(false);
    },2000);
  },[]);

  return (
    <div>
      {
        loading ? 
          ( <ClimbingBoxLoader 
            speedMultiplier={1.25}
            color={ 'rgb(91, 92, 95)' } 
            loading={loading} 
            size={30} 
            css={override} /> )
            : (<div className="App">
                <NavbarComponent></NavbarComponent>
                <Main></Main>
                <Projects></Projects>
                <Resume></Resume>
                <Contact></Contact>
              </div>)
      }
    </div>
  );
}

export default App;
