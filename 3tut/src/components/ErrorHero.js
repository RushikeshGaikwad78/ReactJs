import React from 'react'

function ErrorHero({heroName}) {
    if(heroName==="JOKER"){
        throw new Error ('Not a hero');
    }
  return (
    <div>{heroName}</div>
  )
}

export default ErrorHero