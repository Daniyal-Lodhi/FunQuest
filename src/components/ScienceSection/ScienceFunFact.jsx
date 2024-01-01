import React from "react";
import "./ScienceFunFact.css";
import fact from "../../assets/factImg.png";
import read from "../../assets/astReading.png";
import factStars from "../../assets/factStars.png";

function ScienceFunFact() {
  return (
    <>
      <div className="HFunFactOuter">
        <div className="HFunFactLeft">
          <img src={fact} alt="fact" id="HfactImg" />
        </div>

        <div id="HfunFactHead">
          <p className="HfunFactHeads" id="HleftHeadFun">
            FUN
          </p>
          <p className="HfunFactHeads">FACT</p>
        </div>

        <div className="HFunFactRight">
          <img src={read} alt="fact" id="HAstReadImg" />
        </div>

        <img src={factStars} alt="stars" id="HfactStars" />
      </div>
    </>
  );
}

export default ScienceFunFact;
