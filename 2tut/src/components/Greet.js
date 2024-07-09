import React from "react";


//functional component
//props.
// const Greet = (props) => {
//   return (
//     <>
//       <h1>
//         Hellooo {props.name} !!! studies in {props.class}
//         {props.children}    
//         {/* this the children prop passed as button in app.js  as ATTRIBUTES*/}
//       </h1>
//     </>
//   );
// };


//destructing props


//#####destructuring in parameters
// const Greet = ({name, classname}) => {
//   return (
//     <>
//       <h1>
//         Hellooo {name} !!! studies in {classname}
//       </h1>
//     </>
//   );
// };



//#####destructuring in function body
const Greet = (props) => {
  const {name,classname} = props
  return (
    <>
      <h1>
        Hellooo {name} !!! studies in {classname}
      </h1>
    </>
  );
};


export default Greet;
