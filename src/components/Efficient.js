import RoundIcon from "./RoundIcon";
import "../css/efficient.css";
import efficient1 from "../images/efficient1.png";
import efficient2 from "../images/efficient2.png";
import efficient3 from "../images/efficient3.png";
import efficient4 from "../images/efficient4.png";
import arrow from "../images/right-arrow.png";

function Efficient() {
  return (
    <div className="efficient">
      <div className="container">
        <h3>Efficient</h3>
        <p>
          A wash, rinse, final rinse, and extraction are all included in each
        </p>
        <div className="efficient-wrapper">
          <RoundIcon img={efficient1} text="Wash" />
          <img className="arrow" src={arrow} alt="arrow" />
          <RoundIcon img={efficient2} text="Rinse" />
          <img  className="arrow"src={arrow} alt="arrow" />
          <RoundIcon img={efficient3} text="Final Rinse" />
          <img className="arrow" src={arrow} alt="arrow" />
          <RoundIcon img={efficient4} text="Extract" />
        </div>
      </div>
    </div>
  );
}

export default Efficient;
