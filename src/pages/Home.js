import Address from "../components/Address";
import Benefits from "../components/Benefits";
import Hero from "../components/Hero";
import HomePriceBanner from "../components/HomePriceBanner";
import Map from "../components/Map";
import hero_img from "../images/washing-machines-laundromat.jpg";

function Home() {
  return (
    <div>
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
