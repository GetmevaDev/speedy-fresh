import React from "react";
import "../css/washCard.css"


function WashCard({img, title, text}) {
  return (
    <div className="washCard">
      <img loading="lazy"  src={img} alt ={title} />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  )
}

export default WashCard
