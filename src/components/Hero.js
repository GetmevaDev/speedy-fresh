import "../css/hero.css";
function Hero({title, subtitle, image}) {
  return (
    <div className="container hero">
      <div className="hero__content">
       {title && <h2 >{title}</h2>}
        {subtitle && <h4>{subtitle}</h4>}
        <div className="hero__cta">
          <button className="btn btn--primary">Schedule a Pickup</button>
          <button className="btn btn--secondary">Click to call</button>
        </div>
      </div>
      <div className="hero__image">
        <img src={image} alt="hero"/>
      </div>
    </div>
  );
}

export default Hero;
