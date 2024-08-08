import React, { Component } from 'react'

//older way for ref is callback refs.

class Refsdemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef(); //1
    }
    
    componentDidMount(){
        this.inputRef.current.focus(); //3
        console.log(this.inputRef);
    }

    clickHandler= () => {   //3
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/> {/* 2 */}
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default Refsdemo
