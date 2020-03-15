import React from "react";
import background from "../../assets/images/back.jpg"
import "./style.css";
const styles ={
  background: {backgroundImage: `url("${background}")`}

}

function Wrapper(props) {
  return <div style={styles.background} className="wrapper">{props.children}</div>;
}

export default Wrapper;
