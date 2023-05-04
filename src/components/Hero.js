// import { useLocation } from "react-router-dom";
import "../css/hero.css";
function Hero({title, subtitle, image}) {

  return (
    <div className="container ">
      <div className="hero">
      
      <div className="hero__content">
       {title && <h2 >{title}</h2>}
        {subtitle && <h4>{subtitle}</h4>}
        <div className="hero__cta">
          <a href="#!" className="btn btn--primary">Schedule a Pickup</a>
          <a href="tel:+7184900334" className="btn btn--secondary">Click to call</a>
        </div>
      </div>
      <div className="hero__image">
        <img src={image} alt="hero"/>
      </div>
      </div>

      {/* <div className="breadcrumbs">
        <p className="previous">Home</p>
        <p className="current">Contact</p>
      </div> */}
    </div>
  );
}

export default Hero;
