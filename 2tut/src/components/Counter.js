//rce
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    //rconst
    super(props);

    this.state = {
      //only in constructor we can use this.State other wise this.setState
      count: 0,
    };
  }

  //if state is modified without this.setState method then react will not rerender the componenet and the value
  //remains same in ui

  handleChange() {
    this.setState(
      (prevState) => (
        {
          count: prevState.count + 1,
        },
        () => {
          //callback
          //code which need to be handled whenever set has been changed
        }
      )
    );
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={() => this.handleChange}>Increment</button>
      </div>
    );
  }
}

export default Counter;
