import React, { Component } from 'react'


class lifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Rushi"
      }
      console.log("lifecycleA constructor"); //1
    }
    
    static getDerivedStateFromProps(props,state){ //2
        console.log('lifecycle A getDerivedStateFromProps');
        return null;
        //can return null and state/prop
    }

  render() { //3
    console.log('lifecycleA render method');
    return (
      <div>
        Lifecycle A
      </div>
    )
  }

  //4
  componentDidMount(){
    console.log('lifecycleA componenetdidmount');
  }
}

export default lifecycleA
