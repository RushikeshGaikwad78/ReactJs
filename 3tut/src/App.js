import logo from "./logo.svg";
import LifecycleA from "./components/lifecycleA";
import Fragmentdemo from "./components/Fragmentdemo";
import Tables from "./components/Tables";
import React from "react";
import Purecomponenet from "./components/Purecomponenet";
import Parentcomp from "./components/Parentcomp";
import Refsdemo from "./components/Refsdemo";
import Focusinput from "./components/Focusinput";
import FRParentinput from "./components/FRParentinput";
import Portaldemo from "./components/Portaldemo";
import ErrorHero from "./components/ErrorHero";
import Errorboundary from "./components/Errorboundary";
import HOCcounter from "./components/HOCcounter";
import HOChover from "./components/HOChover";

function App() {
  return (
    <div>

      {/* Higher order components : to share common functionality between components */}
      <HOCcounter/>
      <HOChover/>

      {/* error boundaries are react components that catch js error in their child component tree,log
      those errors ,and display a faalback UI */}
      {/* <Errorboundary>
        <ErrorHero heroName={"Batman"} />
      </Errorboundary>

      <Errorboundary>
        <ErrorHero heroName={"JOKER"} />
      </Errorboundary> */}

      {/* <Portaldemo/>*/}
      {/* portals give ability to break out of the DOM tree */}

      {/* <FRParentinput/>  forwarding refs */}

      {/* <Focusinput/>  refs*/}

      {/* <Parentcomp/> */}
      {/* memo is same as what pure component is to class component to functional component */}

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
