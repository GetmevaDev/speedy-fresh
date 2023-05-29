import React from "react";


function RoundIcon({img, text}) {
  return (
    <div className="roundIcon-wrapper">
        <div className="roundIcon">
          <img loading="lazy" src={img} alt="icon"/>
        </div>
        <span>{text}</span>
    </div>  
  )
}

export default RoundIcon
