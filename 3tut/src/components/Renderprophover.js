import React, { Component } from 'react'

class Renderprophover extends Component {

  render() {
    return (
      <div>
         <h1 onMouseOver={this.props.incrementcount}>Hover {this.props.count} times</h1>
      </div>
    )
  }
}

export default Renderprophover
