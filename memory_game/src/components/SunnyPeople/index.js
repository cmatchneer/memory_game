import React from "react";
import "./style.css";

const styles ={
  img:{
    width: "200px",
    height: "200px",
    float: "left",
    margin:"25px"
    
  }
}

function Sunny(props) {
 
  
  return (
    
     
        <img style={styles.img} id={props.id} alt={props.name} src={props.image} onClick={()=>props.click(props.id)} />
     
   
  );
}

export default Sunny;
