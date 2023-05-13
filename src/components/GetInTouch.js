import React from "react";

import "../css/textBanner.css"

function GetInTouch({title,subtitle,  text}) {
  return (
    <div className="container"  >
      <div className="getInTouch">
      {title && <h3 >{title}</h3>}
      {subtitle && <h4 >{subtitle}</h4>}
     {text && <p >{text}</p>} 
     </div>
    </div>
  )
}

export default GetInTouch
