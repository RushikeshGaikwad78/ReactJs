import React from "react";

function Functionalclick() {
    function clickHandler(){
        console.log(1);
        return;
    }

    return ( 
        <>
            <button onClick={clickHandler}>Click</button> 
            {/*dont add () after event handlers name , it will be function call */}
        </>
     );
}

export default Functionalclick;