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
import Renderpropclick from "./components/Renderpropclick";
import Renderprophover from "./components/Renderprophover";
import Renderpropuser from "./components/Renderpropuser";
import Renderpropcounter from "./components/Renderpropcounter";
import ComponentC from "./components/Context/ComponentC";
import { UserProvider } from "./components/Context/Usercontext";
import PostList from "./components/HTTP/PostList";

function App() {
  return (
    <div>

      <PostList/> 

      {/* Context : - provides a way to pass data through the component tree without having to pass props down 
                      manually at every level. */}
      {/* three steps :- 1.create the context, 2.Provide a context value , 3.Consume the context value */}

      {/* step 2 */}
      {/* <UserProvider value="Rushi"> */}
        {/* <ComponentC />   */}
      {/* </UserProvider> */}
       

      {/* Render Props :- sharing functionalities between components  
                          refers to a technique for sharing code between react components using a 
                          prop whose value is a function */}
      {/* <Renderpropclick />
      <Renderprophover />
      <Renderpropuser render={(isLoggedIN) => isLoggedIN ? "Rushi" : "Guest"} /> */}
      {/* <Renderpropcounter
        render={(count, incrementcount) => (
          <Renderpropclick count={count} incrementcount={incrementcount} />
        )}
      />
      
      <Renderpropcounter
      render = {(count,incrementcount) => (
        <Renderprophover count={count} incrementcount={incrementcount}/>
      )}/> */}

      {/* Higher order components : to share common functionality between components
                                    A pattern where a function takes a component as an arguement 
                                    returns a new component
                                    const newcomponent = higherordercomponent(originalcomponent) */}
      {/* <HOCcounter/>
      <HOChover/> */}

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
