import React, { Component } from "react";
import "./style.css";
import { render } from "@testing-library/react";

const styles ={
  img:{
    width: "200px",
    height: "200px",
    float: "left",
    margin:"25px",
    border:"4px inset gold",
    cursor:"pointer"
  }
  
}
class Sunny extends Component{
  constructor(props){
    super(props)
    this.click = () => props.click(this.props.id)
    // state={
    //   name:"holder"
    // };
  }

 
  render(){
  return <img style={styles.img} id={this.props.id} alt={this.props.name} src={this.props.image} onClick={()=>this.click(this.props.id)} />
  }
}

export default Sunny;
