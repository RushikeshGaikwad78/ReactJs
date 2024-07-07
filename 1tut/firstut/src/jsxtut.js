import React from "react";

const Hello = () => {
  //without jsx
  // return (
  //     <div>
  //         <h1>
  //             JSX TUT
  //         </h1>
  //     </div>
  // )

  //with jsx
  return React.createElement(
    "div",
    {id:'hello' , className:'hello'},
    React.createElement("h1", null, "JSX TUTTT")
  );
};

export default Hello;
