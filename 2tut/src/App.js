import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
function App() {
  return (
    <div className="App">
      {/* <Greet name="Rushi" class="10"> */}
        {/* {" "} */}
        {/* passing props */}
        {/* <button>Rushi</button> */}
      {/* </Greet> */}
      {/* <Greet name="pusyy" class="12"> */}
        {/* <button>pussy</button> */}
      {/* </Greet> */}
{/* 
      <Welcome name="Rushi" class="10"/>
      <Welcome name="pusyy" class="12"/> */}

      {/* state */}
      <Message/>
    </div>
  );
}

export default App;
