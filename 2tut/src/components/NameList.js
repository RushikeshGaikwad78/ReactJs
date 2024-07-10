import React from "react";

function NameList() {
  const array = ["Rushi", "Pussy", "Sakshi"];
  const renderedarr = array.map((name) => <h1>{name}</h1>);
  return (
    <div>
      {/* {array.map((name) => (
        <h2>{name}</h2>
      ))} */}
      {renderedarr}
    </div>
  );
}

export default NameList;
