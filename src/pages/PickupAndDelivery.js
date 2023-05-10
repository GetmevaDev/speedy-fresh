import React from "react";

import CardBanner from "../components/CardBanner";
import Hero from "../components/Hero";
import TextBanner from "../components/TextBanner";
import WashCard from "../components/WashCard";

import hero_img from "../images/woman-uniform-standing-van.jpg";
import smiling_girls from "../images/smiling-young-latin.png";
import arrow_right_full from "../images/arrow-right-full.png";
import pickup1 from "../images/pickup1.png";
import pickup2 from "../images/pickup2.png";
import pickup3 from "../images/pickup3.png";
import pickup4 from "../images/pickup4.png";
import pickup5 from "../images/pickup5.png";
import work_loundry from "../images/work-laundry.png";
import side_view from "../images/side-view-cheerful-girl-talkin.png";

function PickupAndDelivery() {
  return (
    <div>
      <Hero
        title="Convenient Pickup & Delivery Services at Speedy Fresh"
        subtitle="Experience Laundry Service Made Easy"
        image={hero_img}
      />

      <CardBanner
        img={smiling_girls}
        paragraph="At Speedy Fresh, we believe that convenience is key to a stress-free laundry experience. That's why we offer seamless and reliable Pickup & Delivery services, allowing you to enjoy expertly laundered clothes without even leaving your home or office. Our flexible scheduling options and commitment to punctuality ensure that your laundry is picked up and delivered according to your preferred timeline."
      />

      {/* style for pickUpProcess is inside washCard.css */}

      <section className="pickUpProcess ">
        <div className="container">
          <h3>Our Pickup & Delivery Process</h3>
          <div className="pickUpProcess__card-wrapper">
            <WashCard
              img={pickup1}
              title="Schedule a Pickup"
              text="To schedule a pickup, simply call us at (718) 490-0334 or use our convenient online scheduling tool. Choose a date and time that works best for you, and provide any specific instructions or preferences for your laundry."
            />

            <img
              className="arrow-right-full"
              src={arrow_right_full}
              alt="arrow"
            />
            <WashCard
              img={pickup2}
              title="Prepare Your Laundry"
              text="Gather your laundry in a bag, and if desired, separate it into specific categories (e.g., delicates, colors, whites). If you have any special care instructions, please include a note with the relevant information."
            />

            <img
              className="arrow-right-full"
              src={arrow_right_full}
              alt="arrow"
            />
            <WashCard
              img={pickup3}
              title="Laundry Pickup"
              text="Our friendly and punctual driver will arrive at your location during the scheduled pickup window. Hand over your laundry, and we'll take care of the rest."
            />

            <img
              className="arrow-right-full"
              src={arrow_right_full}
              alt="arrow"
            />
            <WashCard
              img={pickup4}
              title="Expert Cleaning & Care"
              text="Our team will wash, dry, and fold your clothes according to your preferences, using high-quality, eco-friendly detergents and state-of-the-art equipment."
            />

            <img
              className="arrow-right-full"
              src={arrow_right_full}
              alt="arrow"
            />

            <WashCard
              img={pickup5}
              title="Delivery of Fresh Laundry"
              text="Once your laundry is ready, we will notify you and schedule a convenient delivery time. Our driver will return your freshly laundered clothes, neatly folded and packaged, right to your doorstep."
            />
          </div>
        </div>
      </section>

      <CardBanner
        img={work_loundry}
        title="Flexible Scheduling Options"
        paragraph="Your Laundry, On Your Time
        We understand that life can be busy, which is why we offer various pickup and delivery windows to accommodate your schedule. Choose a time that works best for you, and we'll be there, punctual and ready to serve."
      />
      <CardBanner
        img={side_view}
        reverse="reverse"
        title="Safe and Secure Laundry Handling"
        paragraph="Trustworthy and Professional Service
        At Speedy Fresh, the security and care of your garments are our top priorities. Our experienced drivers and staff are trained to handle your laundry with the utmost respect and professionalism, ensuring your items are treated with care from the moment they're picked up until they're delivered back to you."
        
      />

      {/* last section */}
      <TextBanner text="Discover Speedy Fresh's Pickup & Delivery services' excellence and ease. Let us handle the burden of washing day so you can spend more time thinking about what really matters. Set up your delivery immediately and take advantage of a washing service that puts your requirements and happiness first." />
    </div>
  );
}

export default PickupAndDelivery;
