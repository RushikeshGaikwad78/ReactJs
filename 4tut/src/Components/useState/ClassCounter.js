import React, { Component } from 'react'
//1 step
class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {  //2 step
         count: 0
      }
    }
    
    incrementcount = () => {   //3 step
        this.setState({
            count: this.state.count + 1
        })
    }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.incrementcount}>click</button>
      </div>
    )
  }
}

export default ClassCounter
