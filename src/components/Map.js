import React from "react";
import "../css/map.css"
import address from "../images/icon-address.svg";
import hours from "../images/icon-hours.svg";
import call from "../images/icon-call.svg";
function MapContent() {
  return(
    <div className="mapContent">
      <h4>Contact Us</h4>
      <div className="mapContent__text">
        <img loading="lazy"  src={address} alt="address"/>
        <span>9702 Church Avenue, Brooklyn, NY</span>
      </div>
      <div className="mapContent__text">
        <img loading="lazy"  src={call} alt="call"/>
       <a className="mapContent__tel" href="tel:(718)4900334" > <span>(718) <b>490-0334</b> </span></a> 
      </div>
      <div className="mapContent__text">
        <img  loading="lazy" src={hours} alt="hours"/>
        <span>Store Hours <b>Mon - Sun: 6:00 AM - 10:00 PM</b> </span>
      </div>
    </div>
  )
}
function Map() {
  return (
    <div className="container">
      <div className="map-container">
        <MapContent />
     
      <iframe  title = "map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3026.837996159985!2d-73.9167836!3d40.6555014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25d2e957c05d9%3A0x86891cde58c51c79!2sSpeedy%20Fresh%20Laundromat!5e0!3m2!1sen!2s!4v1683313226793!5m2!1sen!2s"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Map
