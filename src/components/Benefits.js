import React from "react";

import "../css/benefits.css";
import washingMachine1 from "../images/washing-machine1.png";
import washingMachine2 from "../images/washing-machine2.png";
import washingMachine3 from "../images/washing-machine3.png";
import washingMachine4 from "../images/washing-machine4.png";
import washingMachine5 from "../images/washing-machine5.png";
import washingMachine6 from "../images/washing-machine6.png";

function BenefitsCard({ img, title, description }) {
  return (
    <div className="BenefitsCard">
      <img loading="lazy" src={img} alt={title} />
      <h4>{title}</h4>
      <span>{description}</span>
    </div>
  );
}
export default function Benefits() {
  return (
    <div className="benefits">
      <h3>Our Benefits</h3>
      <p className="benefits__subtitle">Experience the Laundry Difference</p>
      <div className="benefitsCard-wrappper container">
        <BenefitsCard
          img={washingMachine1} 
          title="State-of-the-art Equipment"
          description= "Our modern, high-performance washing machines and dryers are designed to provide you with efficient and effective laundry solutions."
        />
        <BenefitsCard
          img={washingMachine2}
          title="Eco-friendly Practices"
          description= "We are committed to reducing our environmental impact by using eco-friendly detergents and promoting water and energy-saving practices."
        />
        <BenefitsCard
          img={washingMachine3}
          title="Time-saving Convenience"
          description= "Say goodbye to long waiting times. Our spacious facility and numerous machines ensure you can get your laundry done quickly and hassle-free."
        />
        <BenefitsCard
          img={washingMachine4}
          title="Expert Service"
          description= "Our friendly and knowledgeable staff are always on hand to assist you with any questions or concerns you may have about our services."
        />
        <BenefitsCard
          img={washingMachine5}
          title="Free Wi-Fi"
          description= "Enjoy complimentary high-speed Wi-Fi while you wait, making your laundry experience even more comfortable and enjoyable."
        />
        <BenefitsCard
          img={washingMachine6}
          title="Loyalty Program"
          description= "Join our rewards program and earn points towards free washes and other exclusive benefits. Your loyalty deserves to be rewarded!"
        />
      </div>
    </div>
  );
}
