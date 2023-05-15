import React from "react";

import Hero from "../components/Hero";
import "../css/map.css"
import hero_img from "../images/african-american-y.jpg";

import address from "../images/icon-address.svg";
import hours from "../images/icon-hours.svg";
import call from "../images/icon-call.svg";

function ContactUs() {
  return (
    <div>
      <Hero title="Contact us" image={hero_img} />

      {/* style for map_address is inside map.css  */}

      <section className="map_address container">
        <div className="map_address__grid">
          <div className="map_address__content">
            <div className="mapContent__text">
              <img src={address} alt="address" />
              <span>9702 Church ave, Brooklyn, NY</span>
            </div>
            <div className="mapContent__text">
              <img src={call} alt="call" />
              <span>
                (718) <b>490-0334</b>
              </span>
            </div>
            <div className="mapContent__text">
              <img src={hours} alt="hours" />
              <span>
                Store Hours <b>24/7</b>
              </span>
            </div>
          </div>
          <div className="map_address__img">
          <iframe title = "map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3026.837996159985!2d-73.9167836!3d40.6555014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25d2e957c05d9%3A0x86891cde58c51c79!2sSpeedy%20Fresh%20Laundromat!5e0!3m2!1sen!2s!4v1683313226793!5m2!1sen!2s"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
