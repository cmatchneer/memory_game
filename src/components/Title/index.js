import React from "react";
import "./style.css";

function Title(props) {
  return( <h1 className="title">Your Score: {props.score} HighScore: {props.highscore}</h1> 
         );
}

export default Title;
