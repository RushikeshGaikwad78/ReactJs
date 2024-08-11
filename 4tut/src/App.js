import "./App.css";
import React from "react";
import ComponentA from "./Components/useContext/ComponentA";
import DataFetching from "./Components/useEffect/DataFetching";
import HookCounterone from "./Components/useEffect/HookCounterone";
import HookMouse from "./Components/useEffect/HookMouse";
import IntervalHookCounter from "./Components/useEffect/IntervalHookCounter";
import MouseContainer from "./Components/useEffect/MouseContainer";
import ClassCounter from "./Components/useState/ClassCounter";
import HookCounter from "./Components/useState/HookCounter";
import HookCounterFour from "./Components/useState/HookCounterFour";
import HookCounterThree from "./Components/useState/HookCounterThree";
import HookCounterTwo from "./Components/useState/HookCounterTwo";

//step 1 creation of context
export const userContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <>

      {/* USE REDUCER :-  it is a hook used for the state management
                          it is an alternative to useState
                          useState is built using useReducer
                          useReducer(reducer,initalState)
                          newState = reducer(currentState,action)
                          useReducer returns a pair of values. [newState,dispatch]  */}

      {/* step 2 : -  providing a context*/}
      {/* <userContext.Provider value={"Rushiiiii"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentA />
        </ChannelContext.Provider>
      </userContext.Provider> */}
      {/* CONTEXT :- context provides a way to pass data through the component tree without having to pass props down
          manually at every level */}

      {/* fetching individual post by passing post id */}
      {/* <DataFetching/> */}

      {/* fetching data from end point */}
      {/* <DataFetching/> */}

      {/* <IntervalHookCounter/>  multiple use effects , function within use effect, preserving previous state and using it */}

      {/* <MouseContainer/>   mimicing componentWillUnmount in class component */}

      {/* <HookMouse/> running use effect only once ... mimicing componentDidMount in class component*/}

      {/* conditonally running the use effect hook */}
      {/* second parameter is sent in array */}
      {/* <HookCounterone/> */}

      {/* <HookCounterone />   implementation of use effect hook   */}

      {/* USE EFFECT HOOK */}
      {/* The Effect hook lets you perform side effects in functional components. It is a close replacement 
          for componentDidMount, componentDidUpdate and componentWillUnmount */}
      {/* Updating DOM , fetching data from api endpoint, setting up subscriptions or timers */}

      {/* <HookCounterFour/>  
      using useState hook in arrays
      use of spread operator */}

      {/* <HookCounterThree/> */}
      {/* using object as state variable with useState hook 
          use of spread operator to save the previous state of an object*/}

      {/* <HookCounterTwo/>   Updating hook based on the previous value of the state */}

      {/* <ClassCounter/>   class component  */}
      {/* <HookCounter/>    functional component   */}
      {/* rules to use hooks : -
        1.only call hooks at the top level
        2.dont call hooks inside loops,conditions or nested functions
        3.only call hooks from react functions */}
    </>
  );
}

export default App;
