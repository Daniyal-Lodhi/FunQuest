import React from "react";
import ScienceLandingPage from "./ScienceLandingPage";
import "./Science.css";
import ScienceFunFact from "./ScienceFunFact";
import PlanetInfo from "./PlanetInfo";
import Mahamscreen2 from "../Mahamscreen2";
// import Navbar from "../Navbar";

function MainScience() {
  return (
    <div className="HmainScience">
      <ScienceLandingPage />
      <Mahamscreen2 />
      {/* <ScienceFunFact /> */}
      {/* Completed */}
      {/* <PlanetInfo /> */}
    </div>
  );
}

export default MainScience;
