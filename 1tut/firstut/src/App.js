// import logo from './logo.svg';
import React ,{Component} from 'react';
import './App.css';
import {Greet} from './greet'
import Welcome from './welcome';
function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
    </div>
  );
}

export default App;
