import React, { Component } from "react";
import UpdatedComponent from "./HOCwithcounter";
import HOCwithcounter from "./HOCwithcounter";

class HOChover extends Component {
  
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.incrementCount}>Hover {this.props.count} times</h1>
      </div>
    );
  }
}

export default HOCwithcounter(HOChover);
