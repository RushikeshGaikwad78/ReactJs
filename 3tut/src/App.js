import logo from './logo.svg';
import './App.css';
import LifecycleA from './components/lifecycleA';
import Fragmentdemo from './components/Fragmentdemo';
import Tables from './components/Tables';
import React from 'react';
import Purecomponenet from './components/Purecomponenet';
import Parentcomp from './components/Parentcomp';

function App() {
  return (
    <div>
      {/* <Parentcomp/>  Pure component    */}
      {/* regular component :- do not implement shouldComponentUpdate method and return true by default
      pure component :- implements shouldComponentUpdate with a shallow props and state comparision  
                        do not do unnecessary renders
      */}

      {/* <LifecycleA/>  mounting lifecycle methods */}
      {/* <Fragmentdemo/> */}
      {/* <Tables/> */}
    </div>
  );
}

export default App;
