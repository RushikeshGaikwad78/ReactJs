import React from "react";
import ReactDOM from "react-dom";

function Portaldemo() {
  return ReactDOM.createPortal(
    <div>Portals demo</div>,
    document.getElementById("portal-root")
  );
}

export default Portaldemo;
