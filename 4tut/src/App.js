import "./App.css";
import HookCounterone from "./Components/useEffect/HookCounterone";
import ClassCounter from "./Components/useState/ClassCounter";
import HookCounter from "./Components/useState/HookCounter";
import HookCounterFour from "./Components/useState/HookCounterFour";
import HookCounterThree from "./Components/useState/HookCounterThree";
import HookCounterTwo from "./Components/useState/HookCounterTwo";

function App() {
  return (
    <>

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
