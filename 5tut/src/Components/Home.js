import React from "react";
import { useNavigate } from "react-router-dom";   //1


function Home() {
  const navigate = useNavigate()        //2

  return (
    <>
      <div>Home page</div>
      <button onClick={()=> navigate('order-summary',{replace:true})}>Place Order</button>         {/* 3 */}
    </>
  );
}

export default Home;
