import React from "react";


//functional component
//props.
const Greet = (props) => {
  return (
    <>
      <h1>
        Hellooo {props.name} !!! studies in {props.class}
        {props.children}    
        {/* this the children prop passed as button in app.js  as ATTRIBUTES*/}
      </h1>
    </>
  );
};

export default Greet;
