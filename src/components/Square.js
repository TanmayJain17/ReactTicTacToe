import React from "react";

export default function Square(props){
    /* console.log(props) */
    return(
       <button onClick={props.handleClick} className="square">
           {props.value}
       </button> 
    );
}