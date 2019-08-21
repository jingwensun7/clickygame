import React from "react";
import Message from "../Message";

function Nav(props) {
  return (
    <nav className="navbar">
      <li>
        <Message score={props.score} topScore={props.topScore} />
      </li>
      <li>
        Score: {props.score} 
      </li>
      <li>
        Top Score: {props.topScore}
      </li>
    </nav>
  );
}

export default Nav;
