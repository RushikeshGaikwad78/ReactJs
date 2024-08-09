import './App.css';
import ClassCounter from './Components/useState/ClassCounter';
import HookCounter from './Components/useState/HookCounter';
import HookCounterThree from './Components/useState/HookCounterThree';
import HookCounterTwo from './Components/useState/HookCounterTwo';

function App() {
  return (
    <>

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
