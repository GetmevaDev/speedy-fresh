import React from "react";
import "../css/textBanner.css"


function TextBanner({text}) {
  return (
  
       <div  className="container ">
        <div className="textBanner">
        <h4>{text}</h4>
        </div>
      </div>
   
  )
}

export default TextBanner
