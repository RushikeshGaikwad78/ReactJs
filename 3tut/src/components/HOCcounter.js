import React, { Component } from 'react'
import HOCwithcounter from './HOCwithcounter'
class HOCcounter extends Component {
   
    
  render() {
    return (
      <div>
            {this.props.count}
            <button onClick={this.props.incrementCount}>Clicked {this.props.count} times</button>
      </div>
    )
  }
}

export default HOCwithcounter(HOCcounter)
