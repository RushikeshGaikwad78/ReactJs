import React from "react";
//updated component       original component
const HOCwithcounter = (WrappedComponent,incrementnumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementnumber };
      });
    };
    render() {
      return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}  {...this.props}/>;
    }
  }
  return NewComponent;
};

export default HOCwithcounter;
