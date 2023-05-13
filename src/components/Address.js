
import React from "react";

import "../css/address.css";
import address from "../images/icon-address.svg";
import hours from "../images/icon-hours.svg";
import call from "../images/icon-call.svg";
function AddressCard({ img, title, subtitle }) {
  return (
    <div className="address-card">
      <img src={img} alt={title} />
      <h5>{title} </h5>
      <h4>{subtitle}</h4>
    </div>
  );
}
function Address() {
  return (
    <div className="container">
      <h3 className="address__title">Visit Us Today!</h3>
      <div className="  address-wrapper ">
        <AddressCard
          img={address}
          title="Address"
          subtitle="9702 Church Avenue, Brooklyn, NY"
        />
        <AddressCard img={hours} title="Opening Hours" subtitle="Mon - Sun:  6:00 AM - 10:00 PM" />
        <AddressCard
          img={call}
          title="Have a question?"
          subtitle="(718) 490-0334"
        />
      </div>
    </div>
  );
}

export default Address;
