import React, { Component } from "react";
import Childcomponent from "./Childcomponent";

class Parentcomponenet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentname: "Parent",
    }
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName){
    alert(`Hello ${this.state.parentname} from ${childName}`)
  }

  //we want to pass a method from parent component to child component , it will be done using props
  render() {
    return <div><Childcomponent greetHandler={this.greetParent}/></div>;
  }
}

export default Parentcomponenet;
