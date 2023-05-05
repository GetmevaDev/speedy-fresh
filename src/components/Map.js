import "../css/map.css"
import address from "../images/icon-address.svg";
import hours from "../images/icon-hours.svg";
import call from "../images/icon-call.svg";
function MapContent() {
  return(
    <div className="mapContent">
      <h4>Contact Us</h4>
      <div className="mapContent__text">
        <img  src={address} alt="address"/>
        <span>9702 Church ave, Brooklyn, NY</span>
      </div>
      <div className="mapContent__text">
        <img  src={call} alt="call"/>
        <span>(718) <b>490-0334</b> </span>
      </div>
      <div className="mapContent__text">
        <img  src={hours} alt="hours"/>
        <span>Store Hours <b>24/7</b> </span>
      </div>
    </div>
  )
}
function Map() {
  return (
    <div className="container">
      <div className="map-container">
        <MapContent />
     
      <iframe title="map"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12107.220778953988!2d-73.9142582!3d40.6562244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25d2e957c05d9%3A0x86891cde58c51c79!2sSpeedy%20Fresh%20Laundromat!5e0!3m2!1sru!2s!4v1683309927753!5m2!1sru!2s"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Map
