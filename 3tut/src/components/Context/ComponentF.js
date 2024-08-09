import React, { Component } from "react";
import { UserConsumer } from "./Usercontext";

class ComponentF extends Component {
  render() {
    return (
      //step 3
      <UserConsumer>
        {(userName) => {
          return <div>Hello {userName}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
