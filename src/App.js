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
  position: absolute;
  height:100vh;
  width: 100%;
  ::before {
    content: "Happiness💫";
    bottom: 5%; /* Align to the top */
    right: 5%; /* Align to the right */
    position: absolute;
    font-weight:bold;
  }

  @media (max-width: 640px) {
    height:80vh;
    width: 100%; /* Set it to 100% to allow text to wrap properly */
    right:4%;
    ::before {
      width: 100%;
      content: "Happiness💫";
      font-weight: bold;
      font-size: 12px;
      bottom: 0; /* Align to the top */
      left: 25%; /* Align to the right */  
      height: 0 !important;
    }
  }

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
