import React, { Component } from "react";

class Renderpropcounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementcount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return <div>
        {this.props.render(this.state.count,this.incrementcount)}
    </div>;
  }
}

export default Renderpropcounter;
