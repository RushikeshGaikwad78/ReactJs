import React, { useContext } from "react"; //1
import ComponentC from "./ComponentC";
import { userContext, ChannelContext } from "../../App"; //2

function ComponentB() {
    //3
  const user = useContext(userContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <ComponentC />
      {user} {channel}
    </div>
  );
}

export default ComponentB;
