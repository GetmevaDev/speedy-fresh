import React from "react";

import CardBanner from "../components/CardBanner";
import GetInTouch from "../components/GetInTouch";
import Hero from "../components/Hero";
import hero_img from "../images/about_hero.png";

import img1 from "../images/washing-machine-bathroom.jpg";
import img2 from "../images/washing-machines-laundromatt.jpg";
import img3 from "../images/woman-using-wm.jpg";
import img4 from "../images/public-laundry-with.jpg";
function About() {
  return (
    <div>
      <Hero
        title="Speedy Fresh"
        subtitle="Quality Laundry Services in Brooklyn, NY."
        image={hero_img}
      />
      <GetInTouch text="Welcome to Speedy Fresh, your one-stop solution for all your laundry needs. Located at 9702 Church Ave., Brooklyn, NY, we pride ourselves on delivering top-notch services that not only meet but exceed our customers' expectations. With our commitment to high-quality service, we utilize the best detergents available in the market and follow industry best practices to ensure your clothes are treated with the utmost care." />

      <CardBanner
        img={img1}
        title="Our Story"
        paragraph="Established with a mission to provide the community with a convenient and efficient laundry service, Speedy Fresh has grown into a trusted name in the Brooklyn area. We understand that life can be hectic, and laundry can often feel like just another chore to add to your to-do list. Our goal is to make the laundry experience hassle-free and enjoyable, giving you more time to focus on the things that matter most to you."
      />
      <CardBanner
        reverse={true}
        img={img2}
        title="Quality Service  You Can Trust  "
        paragraph="At Speedy Fresh, we believe that quality matters. Our team of dedicated and experienced professionals is always ready to offer personalized service to ensure your laundry needs are met. We constantly update our processes and equipment to stay ahead of the curve, providing you with a consistently exceptional laundry experience."
      />
      <CardBanner
        img={img3}
        title="The Best  Detergents for  Your Clothes  "
        paragraph="We understand that the quality of the detergent plays a significant role in the outcome of your laundry. That's why at Speedy Fresh, we only use top-rated, eco-friendly detergents that are gentle on your clothes and the environment. Our detergents effectively remove stains, dirt, and odors, leaving your garments looking and smelling fresh. "
      />
      <CardBanner
      reverse={true}
        img={img4}
        title="A Comprehensive Range of Services "
        paragraph="We cater to a variety of laundry needs, including washing, drying, folding, and ironing. Our spacious facility houses state-of-the-art machines capable of handling loads of all sizes. Additionally, our services extend to delicate items, such as silk, linen, and cashmere, ensuring they are treated with the care they deserve."
      />

      <GetInTouch
        title="Get in Touch"
        text="We'd love to hear from you! If you have any questions or concerns about our services, please don't hesitate to reach out. You can call us at (718) 490-0334 or visit our facility at 9702 Church Avenue, Brooklyn, NY. Our friendly staff is always available to provide assistance and ensure your laundry experience is nothing short of exceptional. Choose Speedy Fresh for a laundry service that truly cares about you and your garments."
      />
    </div>
  );
}

export default About;
