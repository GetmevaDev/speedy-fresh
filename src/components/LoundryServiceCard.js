import React from "react";
import '../css/loundryServiceCard.css'

function LoundryServiceCard({img, title, paragraph, btnText, recemmended}) {
  return (
    <div className="loundryServiceCard">
      { recemmended && 
      <div className="recommended">
        <span>Recommended</span>
      </div>
      }
      <img loading="lazy"  src={img} alt={title}/>
      {title && <h4>{title}</h4>}
      {paragraph  && <p>{paragraph}</p>}
      {btnText &&  <button>{btnText}</button>}
    </div>
  );
}

export default LoundryServiceCard;
