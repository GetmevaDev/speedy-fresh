import React from "react";
import "../css/selfService.css"
import BannerWithText from "../components/BannerWithText";
import Hero from "../components/Hero";
import hero_img from "../images/public-laundry-with-washing.jpg";

import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.jpg";
import Efficient from "../components/Efficient";
import CardBanner from "../components/CardBanner";

import img from "../images/woman-doing-washing-m.jpg";
import Efficient2 from "../components/Efficient2";
import Dryers from "../components/Dryers";
import { Helmet } from "react-helmet";

function SelfService() {
  return (
    <section className="selfService">
      <Helmet>
        <title>Self Service Laundry in Brooklyn, NY - best price</title>
        <meta name="description" content="Affordable cost Self Service Laundry in Brooklyn, NY: self-service laundromat with best pricing on Church Ave in Brooklyn, New York at Speedy Fresh" />
      </Helmet>
      <Hero
        title="Brooklyn’s Premier  Laundromat"
        subtitle="Drop-Off – Self-Service"
        image={hero_img}
      />
      <BannerWithText
        img={banner1}
        title="Reasons to Use Our Laundry Services"
        subtitle="23-Minute Express Quick Wash Cycle"
      />

      <Efficient   />     
    

      <CardBanner
        img={img}
        title="High Extract"
        paragraph="Compared to most other laundromats, our dryers remove more water from your garments. Clothing comes out fresh rather than saturated, which reduces drying time by up to 25%."
      />

      <Efficient2 />
      
      <BannerWithText
        img={banner2}
        title="Expandable Clothing Really Soiled? Engage in SuperWash!"
      />
      <Dryers />

    </section>
  );
}

export default SelfService;
