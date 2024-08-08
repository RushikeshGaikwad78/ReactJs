import React, { Component } from 'react'
import LifecycleB from './LifecycleB';


class lifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Rushi"
      }
      console.log("lifecycleA constructor"); 
    }
    
    static getDerivedStateFromProps(props,state){ //1
        console.log('lifecycle A getDerivedStateFromProps');
        return null;
        //can return null and state/prop
    }
    
    //2
    shouldComponentUpdate(){
      console.log("lifecycle a should component update");
      return true;
    }

    //3
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("lifecycleA getSnapshotBeforeUpdate");
      return null;
    }

    //4
    componentDidUpdate(){
      console.log("lifecycleA componentDidUpdate");
    }
    
    changeState =() => {
      this.setState({
        name: "Codevolution"
      })
    }
  render() { //5
    console.log('lifecycleA render method');
    return (
      <div>
        Lifecycle A
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB/>
      </div>
    )
  }

  //4
  componentDidMount(){
    console.log('lifecycleA componenetdidmount');
  }
}

export default lifecycleA
