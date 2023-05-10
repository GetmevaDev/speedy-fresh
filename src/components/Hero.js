import React from "react";
import {  useNavigate} from "react-router-dom";
import "../css/hero.css";
import { useSelector } from "react-redux";


function Hero({title, subtitle, image}) {
  const navigate = useNavigate()
  const currentPage = useSelector(store=> store.getLocation.name)
  const prevPage = useSelector(store=> store.getLocation.prevName)
  


  return (
    <div className="container ">
      <div className="hero">
      
      <div className="hero__content">
       {title && <h2 >{title}</h2>}
        {subtitle && <h4>{subtitle}</h4>}
        <div className="hero__cta">
          <a href="#!" className="btn btn--primary">Schedule a Pickup</a>
          <a href="tel:(718)4900334" className="btn btn--secondary">Click to call</a>
        </div>
      </div>
      <div className="hero__image">
        <img src={image} alt="hero"/>
      </div>
      </div>


      <div className="breadcrumbs">
        <p className="previous" onClick={()=>{navigate(-1)}}>{prevPage}</p>
        <p className="current">» {currentPage}</p>
      </div>
    </div>
  );
}

export default Hero;
