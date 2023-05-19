import React from "react";
import "../css/home.css"
import Address from "../components/Address";
import Benefits from "../components/Benefits";
import Hero from "../components/Hero";
import HomePriceBanner from "../components/HomePriceBanner";
import Map from "../components/Map";
import hero_img from "../images/logo.svg"
import { Helmet } from "react-helmet";


function Home() {
  return (
    <div className="home">
      <Helmet >
        <title>Speedy Fresh Laundromat in Brooklyn, NY - Laundry service</title>
        <meta name="description" content="Laundry service in Brooklyn: Speedy Fresh Laundromat in Brooklyn, NY - top-quality laundry on Church Ave in New York" />
      </Helmet>
      <Hero
        title="Fresh & Clean Laundry Solutions"
        subtitle="Exceptional Service for Your Everyday Needs"
        image={hero_img}
      />
      <Address />
      <Benefits />
      <HomePriceBanner />
      <Map />
    </div>
  );
}

export default Home;
