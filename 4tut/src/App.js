import './App.css';
import ClassCounter from './Components/useState/ClassCounter';
import HookCounter from './Components/useState/HookCounter';

function App() {
  return (
    <>
      <ClassCounter/>   {/* class component  */}
      <HookCounter/>    {/* functional component */}  
      {/* rules to use hooks : -
        1.only call hooks at the top level
        2.dont call hooks inside loops,conditions or nested functions
        3.only call hooks from react functions */}
    </>
  );
}

export default App;
