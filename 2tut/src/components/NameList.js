import React from "react";
import Person from "./Person";
function NameList() {
  const array = ["Rushi", "Pussy", "Sakshi"];

  const person = [
    { id: 1, name: "Rushiii", age: 19, skill: "nothing" },
    { id: 1, name: "Rushiii", age: 19, skill: "nothing" },
    { id: 1, name: "Rushiii", age: 19, skill: "nothing" },
    { id: 1, name: "Rushiii", age: 19, skill: "nothing" },
  ];

  const renderedarr = array.map((name) => <h1>{name}</h1>);

  const personlist = person.map((person) => <Person person={person}/>) //good practice
  // const personlist = person.map((person) => <h1>My name is {person.name} , id = {person.id} , age={person.age}, skill={person.skill}</h1>)
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
