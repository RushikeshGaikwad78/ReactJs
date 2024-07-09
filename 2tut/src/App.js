import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Functionalclick from "./components/Functionalclick";
import Classclick from "./components/Classclick";
function App() {
  return (
    <div className="App">
      {/* <Functionalclick/>   onclick eventhandler in functional component */}
      <Classclick/>      {/*onclick eventhandler in class component */}


      {/* <Counter/> */}    {/* about states*/}

      {/* <Greet name="Rushi" classname="10"> */}  {/*functional component and props in it*/}
        {/* {" "} */}
        {/* passing props */}
        {/* <button>Rushi</button> */}
      {/* </Greet> */}
      {/* <Greet name="pusyy" class="12"> */}
        {/* <button>pussy</button> */}
      {/* </Greet> */}

      {/* <Welcome name="Rushi" classname="10"/>   {/*class component and props in it}
      <Welcome name="pusyy" classname="12"/> */}

      {/* state */}
      {/* <Message/> */}
    </div>
  );
}

export default App;
