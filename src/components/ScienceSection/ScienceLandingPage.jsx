import React from "react";
import "./ScienceLandingPage.css";
import aestroid from "../../assets/aestroid.png";
import rocket from "../../assets/rocket.png";
import astronout from "../../assets/astronout.png";
import earth from "../../assets/earth.png";
import star from "../../assets/star.png";

// import "animate.css";
{
  /* <img src={star} id="ScienceLandingStar" /> */
}
function ScienceLandingPage() {
  return (
    <div className="HmainContainerScienceLanding">
      <div className="HScienceEmpty"></div>
      <div className="HScienceLandingGrid">
        <div className="HScienceObject" id="HscienceAestroid">
          <img
            className="HScienceLandingImages"
            src={aestroid}
            id="Haestroid"
          />
        </div>

        <div className="HScienceObject" id="HscienceAstronout">
          <img className="HScienceLandingImages" src={astronout} />
        </div>

        <div className="HScienceObject " id="HscienceStar">
          <img className="HScienceLandingImages" src={star} />
        </div>

        <div className="HScienceObject" id="HscienceEarth">
          <img className="HScienceLandingImages" src={earth} />
        </div>

        <div className="HscienceLandingInner">
          <h1 className="HscienceLandingHeading">my name is:</h1>
          <input type="text" className="HscienceLandingInput"></input>
          <h1 className="HscienceLandingHeading">
            and I am ready to explore space
          </h1>
        </div>

        <div
          className="HScienceObject animate__animated animate__swing"
          id="HscienceRocket"
        >
          <img className="HScienceLandingImages" src={rocket} />
        </div>
      </div>
    </div>
  );
}

export default ScienceLandingPage;
