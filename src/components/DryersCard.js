import React from "react";
import '../css/dryers.css'


function DryersCard({img, title, text}) {
  return (
    <div className='dryers__card'>
        <img loading="lazy" src={img} alt ={title} />
        <h4>{title}</h4>
        <p>{text}</p>
    </div>
  )
}

export default DryersCard
