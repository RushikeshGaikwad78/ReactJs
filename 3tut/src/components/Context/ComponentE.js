import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './Usercontext'

class ComponentE extends Component {
    //second method
    
    static contextType = UserContext

  render() {
    return (
      <div>
            <ComponentF/>
            <div>
                ComponentE context {this.context}
            </div>
      </div>
    )
  }
}

// ComponentE.contextType = UserContext

export default ComponentE
