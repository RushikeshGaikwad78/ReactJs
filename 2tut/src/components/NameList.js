import React from "react";
import Person from "./Person";
function NameList() {
  const array = ["Rushi", "Pussy", "Sakshi"];

  const person = [
    { id: 1, name: "Rushiii", age: 19, skill: "nothing" },
    { id: 2, name: "Rushiii", age: 19, skill: "nothing" },
    { id: 3, name: "Rushiii", age: 19, skill: "nothing" },
    { id: 4, name: "Rushiii", age: 19, skill: "nothing" },
  ];

  const renderedarr = array.map((name) => <h1>{name}</h1>);

  // const personlist = person.map((person) => <h1>My name is {person.name} , id = {person.id} , age={person.age}, skill={person.skill}</h1>)

  //we need to pass key prop which is unique within list for each item,  this key prop is not accesible in child component
  //this key helps react to handle UI modifications nicely
  //a key is a special string attribute we need to include when creating list of elements
  //keys gives the elements a stable identity
  //efficient update of UI
  const personlist = person.map((person) => <Person key={person.id} person={person}/>) //good practice
  return (
    <div>

      {/* {array.map((name) => (
        <h2>{name}</h2>
      ))} */}


      {/* {renderedarr} */}


      {personlist}
    </div>
  );
}

export default NameList;
