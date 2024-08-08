import React, { Component } from 'react'


class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Rushi"
      }
      console.log("lifecycleB constructor"); 
    }
    
    static getDerivedStateFromProps(props,state){ //1
        console.log('lifecycle B getDerivedStateFromProps');
        return null;
        //can return null or object representing current state
    }
 
    //2 used rarely
    shouldComponentUpdate(){
      console.log("lifecycleB should component update");
      return true;
    }

    //3 used rarely
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("lifecycleB getSnapshotBeforeUpdate");
      return null;
    }

    //4
    componentDidUpdate(){
      console.log("lifecycleB componentDidUpdate");
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
