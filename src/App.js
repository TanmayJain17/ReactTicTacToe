import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game'
/*  JSX expressions must have one parent element. */ 
  /* class App extends React.Component {
  render(){
    return(
      <> 
       <h1>My first React App</h1>
      <div>Its a class based component</div>
      </>
     
    )
    
  }
}  */ 
class App extends React.Component {
  render(){
    return(
     <Game/>
    )
  }
}

/* function App() {
  return (
    
  );
} */

export default App;
