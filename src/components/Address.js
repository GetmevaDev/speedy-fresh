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
      <div className="  address-wrapper ">
        <AddressCard
          img={address}
          title="Address"
          subtitle="9702 Church ave, Brooklyn, NY"
        />
        <AddressCard img={hours} title="Opening Hours" subtitle="24/7" />
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