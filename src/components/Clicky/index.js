import React from "react";

function Clicky(props) {
  return (
    <div
      onClick={() => props.click(props.id)}
      role="img"
      aria-label="clicky"
      style={{backgroundImage:`url("${props.image}")`}}
      className={`clicky${props.shake ? " shake" : ""}`}/>
  );
}

export default Clicky;
