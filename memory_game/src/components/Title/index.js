import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="title">Your Score: {props.score}</h1>;
}

export default Title;
