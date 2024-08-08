import React, { Component } from 'react'

class Regularcomp extends Component {
  render() {
    console.log("regular component render")
    return (
      <div>
        Regular component {this.props.name}
      </div>
    )
  }
}

export default Regularcomp
