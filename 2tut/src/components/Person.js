import React from 'react'

function Person(props) {
  return (
    <div><h1>My name is {props.person.name} , id = {props.person.id} , age={props.person.age}, skill={props.person.skill}</h1></div>
  )
}

export default Person