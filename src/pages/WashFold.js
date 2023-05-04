import CardBanner from "../components/CardBanner";
import Hero from "../components/Hero";
import WashCard from "../components/WashCard";

import "../css/washCard.css";

import hero_img from "../images/asian-people-using.jpg";
import woman_reading_book from "../images/shot-attractive-young-woman-reading.png";
import wash_process1 from "../images/wash-process1.png";
import wash_process2 from "../images/wash-process2.png";
import wash_process3 from "../images/wash-process3.png";
import arrow_right_full from "../images/arrow-right-full.png";
import close_up from "../images/close-up-shooting-with-hand.png";
import process_washing from "../images/process-washing-clothes.png";
import TextBanner from "../components/TextBanner";

function WashFold() {
  return (
    <div>
      <Hero
        title="Wash and Fold Services at Speedy Fresh"
        subtitle="Leave Your Laundry Worries Behind"
        image={hero_img}
      />

      <CardBanner
        img={woman_reading_book}
        paragraph="At Speedy Fresh, we understand the challenges of juggling work, family, and other daily responsibilities. Our Wash and Fold service is designed to make your life easier by taking the hassle out of laundry day. Our professional team ensures your clothes are expertly washed, dried, and folded, so you can focus on the more important aspects of your life."
      />

      {/* style for washProcess is inside washCard.css */}
      <section className="washProcces container">
        <h3>Our Wash and Fold Process</h3>
        <div className="washProcess__card-wprapper">
          <WashCard
            img={wash_process1}
            title="Sorting & Pre-treating"
            text="Upon receiving your laundry, our experienced staff carefully sorts your garments by color and fabric type, ensuring each item is treated appropriately. We also pre-treat any visible stains to ensure they are effectively removed during the washing process."
          />

          <img
            className="arrow-right-full"
            src={arrow_right_full}
            alt="arrow"
          />
          <WashCard
            img={wash_process2}
            title="Washing and Drying"
            text="Next, we wash your clothes using our state-of-the-art machines and eco-friendly, high-quality detergents. Our staff carefully selects the appropriate wash cycle and temperature for each load, ensuring your garments are thoroughly cleaned without damage. Once washed, your clothes are efficiently dried in our energy-saving dryers, maintaining their softness and minimizing shrinkage."
          />

          <img
            className="arrow-right-full"
            src={arrow_right_full}
            alt="arrow"
          />
          <WashCard
            img={wash_process3}
            title="Folding and Packaging"
            text="After drying, our team meticulously folds each item, taking care to maintain its shape and minimize wrinkles. We then package your freshly laundered clothes in protective, reusable laundry bags, ready for you to pick up or have them delivered to your doorstep."
          />
        </div>
      </section>

      <CardBanner
        img={close_up}
        title="Customizable Laundry Preferences"
        paragraph="Your Clothes, Your Choice We understand that everyone has different laundry preferences. That's why we offer customization options to cater to your specific needs. You can choose from various detergents, fabric softeners, and dryer sheets to ensure your laundry in Brooklyn is cleaned exactly to your liking. Just let us know your preferences when you drop off your garments or during the scheduling process."
      />
      <CardBanner
        img={process_washing}
        reverse="reverse"
        title="Special Care for Delicate Items"
        paragraph="Gentle and Thorough Cleaning
        At Speedy Fresh, we take special care of your delicate items, such as silk, cashmere, and lace. Our staff is trained in handling these fabrics with precision and care, ensuring they are cleaned gently and thoroughly. We also provide hand-washing and air-drying options for particularly delicate or cherished garments, preserving their quality and prolonging their lifespan."
      />
      
     <TextBanner text = "Experience the Speedy Fresh difference by entrusting us with your laundry needs. Our Wash and Fold service guarantees expert care, convenience, and satisfaction. Give yourself the gift of time and let us handle your laundry with professionalism and care in Brooklyn, NY." />
    </div>
  );
}

export default WashFold;
