import React, { Component } from 'react'

class Classclick extends Component {
    clickhandler() {
        console.log("class comp clicked!!!");
    }
  render() {
   
    return (
      <div>
        <button onClick={this.clickhandler}>
            click me
        </button>
      </div>
    )
  }
}

export default Classclick
