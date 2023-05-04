import "../css/dryers.css";
import DryersCard from "./DryersCard";
import dryers1 from "../images/dryers1.png";
import dryers2 from "../images/dryers2.png";
import dryers3 from "../images/dryers3.png";
function Dryers() {
  return (
    <div className="dryers">
      <div className="container">
        <h3>Gains from Our Dryers</h3>
        <div className="dryers__card-wrapper">
          <DryersCard
            img={dryers1}
            title="Safe"
            text="Stainless steel drums are used in our dryers. Because stainless steel has no openings, it is almost impossible for dust, germs, or viruses to accumulate there."
          />
          <DryersCard
            img={dryers2}
            title="Completely Dry"
            text="Make drying less speculative. Get enough time to dry most clothes with just one swipe of your laundry card."
          />
          <DryersCard
            img={dryers3}
            title="Specially Large Capacity"
            text="To manage your ggest washing tasks, choose from our 28 Large and 8 Extra-Large Dryers."
          />
        </div>
      </div>
    </div>
  );
}

export default Dryers;
