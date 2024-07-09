import React, { Component } from "react";

//conditional rendering ;-
class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: true,
    };
  }

  render() {
    //first method------>>>> if else 
    // if(this.state.isLoggedin){
    //     return(<h1>Welcome rushiiiii!!!!</h1>)
    // }
    // else{
    //     return(<h1>Welcome guest</h1>)
    // }

    //second method------>>>> element variable approach
    // let message
    // if(this.state.isLoggedin){
    //     message = <div>Welcome rushiiiii!!!!</div>
    // }else{
    //     message = <div>Welcome guest</div>
    // }
    // return(<div>{message}</div>)

    //third method------>>>> ternary operator
    // return this.state.isLoggedin ? <h1>Hello Rushi</h1> : <h1>Hello Guest</h1>;

    //fourth method ----->>>> short circuit operator
    return (this.state.isLoggedin && <h1>Welcome Rushi</h1>)
  }
}

export default UserGreeting;
