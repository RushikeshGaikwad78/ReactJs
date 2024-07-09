import React, { Component } from 'react'

class Classclick extends Component {
    clickhandler() {
        console.log("class comp clicked!!!");
        console.log(this)
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
