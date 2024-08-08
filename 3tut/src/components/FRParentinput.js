import React, { Component } from 'react'
import FRRef from './FRRef'

 class FRParentinput extends Component {

    constructor(props) {
      super(props)
      this.inputRef = React.createRef();
    }
    
    handleclick = () => {
        this.inputRef.current.focus();
    }

  render() {
    return (
      <div>
            <FRRef ref={this.inputRef} />
            <button onClick={this.handleclick}>focus input</button>
      </div>
    )
  }
}

export default FRParentinput
