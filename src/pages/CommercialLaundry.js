import React, { useEffect } from "react"

import CardBanner from "../components/CardBanner";
import Hero from "../components/Hero";
import TextBanner from "../components/TextBanner";
import hero_img from "../images/grayscale-shot-washing.jpg";
import singapure_orchard from "../images/singapore-orchard.png";
import woman_picking from "../images/woman-picking-clothes-form-inside.png";
import bucket_loundry from "../images/basket-laundry-near.png";

function CommercialLaundry() {
  useEffect(()=> {
   
    return function() {
    document.querySelector(".parent-link").classList.remove("active")
    }
  })
  return (
    <div>
      <Hero
        title="Commercial Laundry Services in Brooklyn, NY"
        subtitle="Reliable and Efficient Laundry Solutions for Your Business"
        image={hero_img}
      />

      <CardBanner
        img={singapure_orchard}
        paragraph="At Speedy Fresh, we understand the unique challenges businesses face when it comes to maintaining clean, fresh linens and uniforms. Our Commercial Laundry services are designed to cater specifically to the needs of businesses, providing reliable and efficient laundry solutions that save you time, effort, and resources. From restaurants to hotels, medical facilities, and more, our experienced team ensures your business receives the professional laundry care it deserves."
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
          "Educational Institutions: Sanitized uniforms, lab coats, and other institutional laundry needs"
        ]}
      />

      <TextBanner text="Trust Speedy Fresh for all your commercial laundry needs and experience the difference that our professional and reliable services can make for your business. With our efficient processes, superior cleaning, and commitment to customer satisfaction, you can focus on your core operations while we take care of your laundry. Contact us today to learn more about our Commercial Laundry services and discover how we can help your business thrive." />
    </div>
  );
}

export default CommercialLaundry;
