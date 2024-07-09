import React, { Component } from "react";

//class component
//this.props.propname
//props are read only
// class Welcome extends Component{
//     render(){
//         return (
//             <h1>Welcomee {this.props.name} from class {this.props.class}</h1>
//         )
//     }
// }

//destructuring props
class Welcome extends Component {
  render() {
    const { name, classname } = this.props;
    return (
      <h1>
        Welcomee {name} from class {classname}
      </h1>
    );
  }
}

export default Welcome;
