import React, { Component } from 'react'

//steps
//1.write the html
//2.for the values as input create states
//3.to handle changes set those states using event handlers

export class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         comments : '',
         topic : 'vue'
      }
    }
    
    handleusernamechange = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    handlecommentschange = (event) => {
        this.setState({
            comments : event.target.value
        })
    }

    handletopicchange = (event) => {
        this.setState({
            topic : event.target.value
        })
    }

    handlesubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }
  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <div>
            <label htmlFor="">Username : </label>
            <input type='text' value={this.state.username} onChange={this.handleusernamechange}/>
        </div>
        <div>
            <label htmlFor="">Comments : </label>
            <textarea value={this.state.comments} onChange={this.handlecommentschange}></textarea>
        </div>
        <div>
            <label>Select</label>
            <select value={this.state.topic} onChange={this.handletopicchange}>
                <option value="react">React</option>
                <option value="angular">angular</option>
                <option value="vue">vue</option>
            </select>
        </div>

        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
