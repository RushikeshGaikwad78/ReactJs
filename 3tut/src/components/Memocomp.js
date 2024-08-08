import React from 'react'

function Memocomp ({name}) {
    console.log("rendering memo comp")
  return (
    <div>{name}</div>
  )
}

export default React.memo(Memocomp)