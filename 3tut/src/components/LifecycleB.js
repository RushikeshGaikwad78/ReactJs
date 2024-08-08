import React, { Component } from 'react'


class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Rushi"
      }
      console.log("lifecycleB constructor"); //1
    }
    
    static getDerivedStateFromProps(props,state){ //2
        console.log('lifecycle B getDerivedStateFromProps');
        return null;
        //can return null and state/prop
    }

  render() { //3
    console.log('lifecycleB render method');
    return (
      <div>
        Lifecycle B
      </div>
    )
  }

  //4
  componentDidMount(){
    console.log('lifecycleB componenetdidmount');
  }
}

export default LifecycleB
