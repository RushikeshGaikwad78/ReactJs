import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Functionalclick from "./components/Functionalclick";
import Classclick from "./components/Classclick";
import Eventbind from "./components/Eventbind";
import Parentcomponenet from "./components/Parentcomponenet";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
function App() {
  return (
    <div className="App">

      

      <NameList/>      List Rendering

      {/* <UserGreeting/>     4 types of rendering  */}

      {/* <Parentcomponenet/>    passing method as props & attributes to it from child to parent component */}

      {/* <Eventbind/>             all eventhandlers binding methods */}

      {/* <Functionalclick/>   onclick eventhandler in functional component */}
      {/* <Classclick/>      onclick eventhandler in class component */}


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
