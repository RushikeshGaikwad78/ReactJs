import React, { Component } from 'react'
import Input from './Input'

class Focusinput extends Component {
    constructor(props) {
      super(props)
    
      this.classref = React.createRef();
    }
    
    clickhandler = () => {
        this.classref.current.focusinput();
    }

  render() {
    return (
      <div>
            <Input ref={this.classref}/>
            <button onClick={this.clickhandler}>Focus input</button>
      </div>
    )
  }
}

export default Focusinput
