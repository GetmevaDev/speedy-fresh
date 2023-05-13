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
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.805194738497!2d-73.91425819999999!3d40.6562244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25c8d6173b9c1%3A0xde54b1d45f9dfa2a!2zOTcwMiBDaHVyY2ggQXZlLCBCcm9va2x5biwgTlkgMTEyMTIsINCh0KjQkA!5e0!3m2!1sru!2s!4v1682618533750!5m2!1sru!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
