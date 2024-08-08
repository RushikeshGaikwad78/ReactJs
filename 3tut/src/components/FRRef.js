import React from "react";

// function FRRef() {
//   return (
//     <div>
//         <input type='text' />
//     </div>
//   )
// }

const FRRef = React.forwardRef((props,ref) => {
    return (
      <div>
        <input type="text" ref={ref}/>
      </div>
    );
  });

export default FRRef;
