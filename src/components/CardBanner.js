import React from "react";
import "../css/cardBanner.css";

function CardBanner({ img, title, paragraph, reverse, listArr }) {
  // console.log(listArr);
  return (
    <div className="container">
      <div className={reverse ? "reverse" : "aboutBanner"}>
        <div className="aboutBanner__text">
          {title && <h3>{title}</h3>}
          {paragraph && <p>{paragraph}</p>}
          {listArr &&
          <ul>
            {listArr.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>}
        </div>
        <div className="aboutBanner__img">
          <img loading="lazy" src={img} alt="wash machine" />
        </div>
      </div>
    </div>
  );
}

export default CardBanner;
