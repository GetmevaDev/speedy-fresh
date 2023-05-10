import React from "react";

import "../css/textBanner.css"

function GetInTouch({title, text}) {
  return (
    <div className="container"  >
      <div className="getInTouch">
      {title && <h3 >{title}</h3>}
     {text && <p >{text}</p>} 
     </div>
    </div>
  )
}

export default GetInTouch
