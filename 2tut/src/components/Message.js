import React, { Component } from "react";

//state is object privately maintained in the component
//can be changed in componenet unlike props

class Message extends Component {
  constructor() {
    super(); //class has to be made to base class constructor thats why
    this.state = {
      message: "Welcome visitor",
      subscriptioncount: 0
    };
  }

  changeMessage(){
    this.setState((prevState) => ({
        message: "Thank you for subscribing",
        subscriptioncount: prevState.subscriptioncount+1
    }))
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={()=>{this.changeMessage()}}>Subscribe</button>
        <h2>Number of Subscribers = {this.state.subscriptioncount}</h2>
      </>
    );
  }
}

export default Message;
