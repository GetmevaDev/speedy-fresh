import React from 'react'
import "../css/priceCard.css"


function PriceCard({title, img, btnText}) {
  return (
    <div className='priceCard'>
        <h4>{title}</h4>
        <img loading="lazy" src={img} alt={title} />
        <button>{btnText}</button>
    </div>
  )
}

export default PriceCard
