import React from "react";

const heading = {
  fontSize: "72px",   //creation of object
  color: "blue",
};

function Inline() {
  return (
    <div>
      <h1 style={heading}>INLINE</h1> {/*Applying css inline */}
    </div>
  );
}

export default Inline;
