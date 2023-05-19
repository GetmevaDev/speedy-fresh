import React, { useEffect } from "react";
import "../css/commercialLaundry.css";
import CardBanner from "../components/CardBanner";
import Hero from "../components/Hero";
import TextBanner from "../components/TextBanner";
import hero_img from "../images/grayscale-shot-washing.jpg";
import singapure_orchard from "../images/singapore-orchard.png";
import woman_picking from "../images/woman-choosing-clothes.jpg";
import bucket_loundry from "../images/basket-laundry-near.png";
import GetInTouch from "../components/GetInTouch";
import { Helmet } from "react-helmet";

function CommercialLaundry() {
  useEffect(() => {
    return function() {
      document.querySelector(".parent-link").classList.remove("active");
    };
  });
  return (
    <div className="commercialLaundry">
       <Helmet>
        <title>Commercial Laundry Service in Brooklyn, NY - best price</title>
        <meta name="description" content="Laundry service for commercial clients in Brooklyn, NY: best commercial Laundry in Brooklyn at Speedy Fresh" />
      </Helmet>
      <Hero
        title="Commercial Laundry Services in Brooklyn, NY"
        subtitle="Reliable and Efficient Laundry Solutions for Your Business"
        image={hero_img}
      />
      <div className="commercialLaundry__little-banner">
        <CardBanner
          img={singapure_orchard}
          paragraph="At Speedy Fresh, we understand the unique challenges businesses face when it comes to maintaining clean, fresh linens and uniforms. Our Commercial Laundry services are designed to cater specifically to the needs of businesses, providing reliable and efficient laundry solutions that save you time, effort, and resources. From restaurants to hotels, medical facilities, and more, our experienced team ensures your business receives the professional laundry care it deserves."
        />
      </div>
      <GetInTouch
        title="Customized Solutions for Your Business"
        subtitle='Tailored Services to Meet Your Needs.'
        text = 'Every business has its own set of requirements, and at Speedy Fresh, we strive to provide personalized laundry solutions that cater to your unique needs. Our flexible service options include pickup and delivery, various turnaround times, and customizable cleaning preferences, ensuring that your business receives the most suitable laundry service.'
      />
      <CardBanner
        img={woman_picking}
        title="State-of-the-Art Equipment and Eco-Friendly Detergents"
        paragraph="Superior Cleaning with a Focus on Sustainability
        Speedy Fresh utilizes advanced, commercial-grade equipment to handle the high volume and varied demands of business laundry needs. Our state-of-the-art machines ensure thorough cleaning and efficient drying, while our eco-friendly detergents provide powerful stain removal without compromising the quality or lifespan of your linens and uniforms. Our commitment to sustainability means that you can trust us to deliver outstanding results while minimizing our impact on the environment."
      />
      <CardBanner
        img={bucket_loundry}
        reverse="reverse"
        title="Expert Care for a Wide Range of Industries"
        paragraph="Professional Laundry Services for Various Businesses
        Our team has extensive experience in catering to the laundry requirements of various industries, including:
        "
        listArr={[
          "Restaurants and Catering Services: Clean table linens, napkins, and staff uniforms",
          "Hotels and Hospitality: Fresh bed linens, towels, and other guest amenities",
          "Medical Facilities: Hygienic laundering of scrubs, lab coats, patient gowns, and linens ",
          "Salons and Spas: Immaculate towels, robes, and treatment linens",
          "Fitness Centers and Gyms: Clean and fresh towels, workout gear, and staff uniforms",
          "Educational Institutions: Sanitized uniforms, lab coats, and other institutional laundry needs",
        ]}
      />

      <TextBanner text="Trust Speedy Fresh for all your commercial laundry needs and experience the difference that our professional and reliable services can make for your business. With our efficient processes, superior cleaning, and commitment to customer satisfaction, you can focus on your core operations while we take care of your laundry. Contact us today to learn more about our Commercial Laundry services and discover how we can help your business thrive." />
    </div>
  );
}

export default CommercialLaundry;
