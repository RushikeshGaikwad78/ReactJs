import React, { Component } from "react";
import Regularcomp from "./Regularcomp";
import Purecomponenet from "./Purecomponenet";
import Memocomp from "./Memocomp";

class Parentcomp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rushi",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Rushi" });
    }, 2000);
  }

  render() {
    console.log("parent component render");
    return <div>parent component
                {/*for class component */}
               {/* <Regularcomp name={this.state.name}/>
               <Purecomponenet name={this.state.name}/> */}

                {/*for functional component */}
               <Memocomp name={this.state.name}/>
    </div>;
  }
}

export default Parentcomp;
