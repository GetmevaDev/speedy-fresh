import React from "react";
import RoundIcon from "./RoundIcon"
import "../css/efficient.css"
import eff1 from "../images/eff1.png"
import eff2 from "../images/eff2.png"
import eff3 from "../images/eff3.png"
import eff4 from "../images/eff4.png"
import eff5 from "../images/eff5.png"
import eff6 from "../images/eff6.png"
import eff7 from "../images/eff7.png"
import arrow from "../images/right-arrow.png"


function Efficient2() {
  return (
   
      <div className="efficient2">
      <div className="container">
        <h3>Prewash, Extended Wash, and Extra Rinse are the extra three processes that SuperWash offers for your heaviest-soiled clothing.</h3>
        
        <div className="efficient2-wrapper">
          <RoundIcon img={eff1} text="Prewash" />
          <img className="arrow" src={arrow} alt="arrow" />
          <RoundIcon img={eff2} text="Wash" />
          <img  className="arrow"src={arrow} alt="arrow" />
          <RoundIcon img={eff3} text="Extended Wash" />
          <img className="arrow" src={arrow} alt="arrow" />
          <RoundIcon img={eff4} text="Rinse" />
          <img className="arrow" src={arrow} alt="arrow" />
          <RoundIcon img={eff5} text="Extra Rinse" />
          <img className="arrow" src={arrow} alt="arrow" />
          <RoundIcon img={eff6} text="Final Rinse" />
          <img className="arrow" src={arrow} alt="arrow" />
          <RoundIcon img={eff7} text="Extract" />
        </div>
      </div>
    </div>
   
  )
}

export default Efficient2
