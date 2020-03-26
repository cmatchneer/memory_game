import React from "react";
import sign from "../../assets/images/sign.jpg"
const styles={
    sign:{
        width:"100%",
        height:"250px",
        postion:"relative"
    }
}
function Sign() {
  return( <img style={styles.sign} src={sign}/>
         );
}

export default Sign;