import React, { Component } from 'react'

class Renderpropclick extends Component {
    
  render() {
    return (
      <div>
            <button onClick={this.props.incrementcount}>Clicked {this.props.count} times</button>
      </div>
    )
  }
}

export default Renderpropclick
