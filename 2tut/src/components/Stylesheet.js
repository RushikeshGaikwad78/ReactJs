import React from "react";
import "./myStyles.css";
function Stylesheet(props) {
    let colorclass = props.primary ? 'primary': '' //conditionally giving name to class
  return (
    <div>
      {/* <h1 className={colorclass}>Stylesheets</h1> conditionally applying css */}
      <h1 className={`${colorclass} fontxl`}>Stylesheets</h1> {/*applying more than one classes */}
    </div>
  );
}

export default Stylesheet;
