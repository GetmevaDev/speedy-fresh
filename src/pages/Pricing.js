import React from "react";
import "../css/pricing.css";
import Hero from "../components/Hero";
import hero_img from "../images/young-african-american-man.jpg";
import CardBanner from "../components/CardBanner";
import LoundryServiceCard from "../components/LoundryServiceCard";
import PriceCard from "../components/PriceCard";
import washing_machine from "../images/washing-mashines-appliance-store.png";
import pricing1 from "../images/pricing1.png";
import pricing2 from "../images/pricing2.png";
import loundry_basket from "../images/laundry-basket-blurred-backgroun.png";
import beds from "../images/beds.png";
import rug from "../images/rug.png";
import largeRug from "../images/large-rug.png";
import bathMat from "../images/bath-mat.png";
import mattress from "../images/mattress-cover.png";
import blanket from "../images/blanket.png";
import pillow from "../images/pillow.png";
import tide from "../images/tide.png";
import clorox from "../images/clorox.png";
import downy from "../images/Downy.png";
import seventh from "../images/seventh.png";
import clock from "../images/clock.png";
import { Helmet } from "react-helmet";

function Pricing() {
  return (
    <div className="pricing">
      <Helmet>
        <title>Best pricing for Laundry in Brooklyn, NY - Speedy Fresh Laundromat</title>
        <meta name="description" content="Fair cost laundry service in Brooklyn, NY: best price for laundromat service in Brooklyn at Speedy Fresh" />
      </Helmet>
      <Hero title="How much does laundry cost in NYC?" image={hero_img} />

      <CardBanner
        img={washing_machine}
        paragraph="Laundry pricing in New York can vary based on factors such as location, type of service, volume of laundry, turnaround time, special requirements, and competition. Prices may be higher in more affluent neighborhoods, for services such as dry cleaning or special treatments, and for expedited service. Shopping around is important to find the best pricing for your laundry needs. Speedy Fresh Laundry service offers several advantages for customers in New York, including top-quality washing, dryers, and same day laundry service. The laundry cost is competitive, and they also offer same day laundry services for those who need it. With Speedy Fresh laundry service, customers can have their laundry done quickly and efficiently, without sacrificing quality. Next day service included in the laundry cost!"
      />

      <section className="loundryService">
        <div className="container">
          <h3>How much is laundry service at Speedy Fresh, NY?</h3>
          <div className="loundryService__grid">
            <LoundryServiceCard
              img={pricing1}
              title="Fresh Wash and Fold Service"
              paragraph="Is convenient for those who may not have the time or resources to do their own laundry. Fresh wash and fold services are typically priced by weight, and the laundry service may offer options for detergent, fabric softener, and special requests such as hang drying or separating colors."
              btnText="$1.49/lb."
            />
            <LoundryServiceCard
              img={pricing2}
              title="Premium Fresh Wash and Fold Service"
              paragraph=" Is a laundry service that uses premium-quality cleaning products such as free and clear detergent, bleach, and fabric softener. The use of Free and Clear Detergent is beneficial for those with sensitive skin, bleach is used to remove tough stains, and fabric softener is used to leave clothes feeling soft and fresh."
              btnText="$1.69/lb."
              recemmended={true}
            />
          </div>
        </div>
      </section>

      <CardBanner
        img={loundry_basket}
        title="Same-day laundry service at Speedy Fresh, NY"
        reverse="reverse"
        paragraph="Same-day laundry service costs  +$0.40/LB at Speedy Fresh, NY and offers several benefits for customers who need their laundry done quickly. One of the main advantages is convenience, as customers can drop off their laundry and have it returned to them on the same day, saving them time and hassle. Same-day service can also be helpful for those who have unexpected laundry needs, such as a last-minute meeting or event, have limited wardrobe options or who need their."
      />

      <section className="loundryPrice">
        <div className="container">
          <h3>Laundry prices at Speedy Fresh Laundry Service, NY</h3>
          <h4>Bedding sets Laundry Cost in Brooklyn</h4>
          <p>
            Using a Speedy Fresh laundry service to wash bedding sets can be
            better than washing them at home for several reasons. First, our
            laundry service in Brooklyn, NY has commercial-grade equipment that
            can clean large items such as comforters, duvets, and blankets more
            effectively than a home washing machine. Second, we have access to
            high-quality detergents and fabric softeners that can help keep
            bedding sets fresh and clean. Third, washing large items at home can
            be time-consuming and may not always produce the desired results,
            whereas using a Speedy Fresh laundry service for bedding can save
            time and ensure that bedding sets are properly cleaned and cared
            for.
          </p>

          <div className="loundryPrice__grid">
            <PriceCard
              title="Twin-size  Comforter/Duvet"
              img={beds}
              btnText="$10"
            />
            <PriceCard
              title="Queen  Comforter/ Duvet"
              img={beds}
              btnText="$15"
            />
            <PriceCard
              title="King Size  Comforter/ Duvet"
              img={beds}
              btnText="$12"
            />
            <PriceCard title="FullComforter/  Duvet" img={beds} btnText="$12" />
          </div>

          <h4>Rugs Laundry Cost in Brooklyn</h4>
          <p>
            Rugs and small rugs can accumulate dirt, dust, and other particles
            over time, which can make them look dirty and dingy. Additionally,
            rugs can harbor bacteria and allergens, which can be harmful to
            people with allergies or respiratory issues. Regular laundry service
            for rugs in Brooklyn, NY at Speedy Fresh can help keep rugs and
            small rugs clean and hygienic, improving indoor air quality and
            prolonging the lifespan of the rugs. Our laundry service for rugs in
            New York has the expertise and equipment necessary to properly clean
            and care for different types of rugs, including delicate or antique
            rugs, ensuring they are not damaged during the cleaning process.
          </p>

          <div className="loundryPrice__grid">
            <PriceCard title="S Rug" img={rug} btnText="$5" />
            <PriceCard title="Bath Mats" img={bathMat} btnText="$5" />
            <PriceCard title="Large Rug" img={largeRug} btnText="$15" />
          </div>

          <h4>Pillows, Blankets laundry costs in Brooklyn</h4>
          <p>
            Over time, pillows and blankets can accumulate sweat, dirt, oils,
            and bacteria, which can cause unpleasant odors and potentially lead
            to health issues. Moreover, pillows and blankets can be difficult to
            clean thoroughly at home, especially those made from delicate
            materials or with complex designs. Speedy Fresh laundry services in
            Brooklyn, NY have the necessary equipment and expertise to clean
            pillows and blankets effectively, using high-quality detergents and
            fabric softeners to ensure they are clean, fresh, and free from
            harmful bacteria and allergens. Cleaning pillows and blankets at our
            laundry service in Brooklyn, NY can also help prolong their lifespan
            and maintain their appearance, ensuring that they continue to
            provide comfort and warmth for years to come.
          </p>

          <div className="loundryPrice__grid">
            <PriceCard title="Mattress Cover" img={mattress} btnText="$12" />
            <PriceCard title="Pillows" img={pillow} btnText="$6 each" />
            <PriceCard title="Blanket (SM)" img={blanket} btnText="$7" />
            <PriceCard title="Blanket (LG)" img={blanket} btnText="$11" />
          </div>

          <h3>We guarantee safety and hygiene!</h3>
          <ul>
            <li>Your clothes are never mixed with another customer </li>
            <li>
              {" "}
              Clothes separated whites washed with hot Water colors washed with
              cold waters{" "}
            </li>
          </ul>

          <h4>The Best washing materials</h4>
          <p>
            A laundry service that utilizes top-notch washing materials would
            generally provide superior laundry detergents, fabric conditioners,
            and other laundry supplements to guarantee that garments are
            cleansed efficiently and softly. This may involve environmentally
            friendly or allergen-free choices for individuals with susceptible
            skin. Incorporating premium washing materials can assist in avoiding
            harm to textiles and preserving the lifespan of clothing, as well as
            ensuring a clean and fragrant outcome.
          </p>
        </div>
      </section>

      <section className="brands">
        <div className="container">
          <div className="brands__grid">
            <img src={tide} alt="tide" />
            <img src={clorox} alt="clorox" />
            <img src={downy} alt="downy" />
            <img src={seventh} alt="seventh" />
          </div>
        </div>
      </section>

      <section className="loundryServiceBrooklyn">
        <div className="container">
          <h3>Self service laundry pricing at Speedy Fresh, Brooklyn</h3>
          <p>
            Self-service washing at Speedy Fresh laundry service in Brooklyn, NY
            typically involves customers using laundry machines to wash and dry
            their clothes. These machines are typically available in various
            sizes, allowing customers to choose the appropriate one for their
            needs. Customers can bring their own detergent and fabric softener,
            or purchase them on-site. The laundry service may also offer
            additional amenities such as vending machines, seating areas, and
            Wi-Fi for customer convenience.
          </p>
          <h4>Self-service washer prices in Brooklyn</h4>
          <div className="loundryServiceBrooklyn__grid">
            <div className="loundryServiceBrooklyn__card">
              <h5>20 lb. Washer</h5>
              <ul>
                <li>Roughly 7 shirts,</li>
                <li>5 pairs of pants,</li>
                <li>10 tees,</li>
                <li>4 pairs of shorts,</li>
                <li>5 towels,</li>
                <li>20 socks,</li>
                <li>15 undergarments</li>
              </ul>
              <h5>$3.29</h5>
            </div>
            <div className="loundryServiceBrooklyn__card">
                <h5>30 lb. Washer</h5>
              <ul>
                <li>Roughly 10 shirts,</li>
                <li>10 pairs of pants,</li>
                <li>15 tees,</li>
                <li>4 pairs of shorts,</li>
                <li>5 towels,</li>
                <li>20 socks,</li>
                <li>15 undergarments 1 set of bed sheets</li>
              </ul>
                <h5>$4.99</h5>
            </div>
            <div className="loundryServiceBrooklyn__card">
                <h5>40 lb. Washer</h5>
              <ul>
                <li>Roughly 14 shirts,</li>
                <li>10 pairs of pants,</li>
                <li>20 tees,</li>
                <li>8 pairs of shorts,</li>
                <li>10 towels,</li>
                <li>40 socks,</li>
                <li>30 undergarments</li>
              </ul>
                <h5>$6.29</h5>
            </div>
            <div className="loundryServiceBrooklyn__card">
                <h5>60 lb. Washer</h5>
              <ul>
                <li>Roughly 20 shirts,</li>
                <li>12 pairs of pants,</li>
                <li>20 tees,</li>
                <li>6 pairs of shorts,</li>
                <li>7 towels,</li>
                <li>20 socks,</li>
                <li>30 undergarments 2 set of bed sheets</li>
              </ul>
                <h5>$8.99</h5>
            </div>
            <div className="loundryServiceBrooklyn__card">
                <h5>80 lb. Washer</h5>
              <ul>
                <li>Roughly 14 shirts,</li>
                <li>10 pairs of pants,</li>
                <li>20 tees,</li>
                <li>8 pairs of shorts,</li>
                <li>10 towels,</li>
                <li>40 socks,</li>
                <li>30 undergarments 3 set of bed sheets</li>
              </ul>
                <h5>$11.49</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="drayerPricing">
          <div className="container">
            <h3>Self-service Dryer Pricing in Brooklyn</h3>  
            <div className="drayerPricing__grid">
              <div className="drayerPricing__card">
                <h5>30 lb. Dryer</h5>
                <p>7 minutes</p>
                <img  src={clock} alt  = "clock"/>
                <h5>$0.39</h5>                
              </div>
              <div className="drayerPricing__card">
                <h5>50 lb. Dryer</h5>
                <p>7 minutes</p>
                <img  src={clock} alt  = "clock"/>
                <h5>$0.49</h5>
              </div>
            </div>
          </div>     
      </section>
    </div>
  );
}

export default Pricing;
