import React, { Component } from "react";
import "./style.css";

function WinningButton (props){
    return(<div>
        <button onClick= {props.winning}>Winner</button>
        </div>
        )

}

export default WinningButton;