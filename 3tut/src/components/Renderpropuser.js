import React, { Component } from 'react'

class Renderpropuser extends Component {
  render() {
    return (
      <div>
            {this.props.render(false)}
      </div>
    )
  }
}

export default Renderpropuser
