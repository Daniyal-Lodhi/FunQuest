import React from "react";
import add from "../../assets/addition.png";
import sub from "../../assets/sub.png";
import mult from "../../assets/mult.png";
import divide from "../../assets/div.png";
import child from "../../assets/mathLandChild.png";
import "./MathLanding.css";
import { Link } from "react-router-dom";

function MathLanding() {
  return (
    <div className="MathMainGrid">
      <div className="MathLandingLeft">
        <Link id="add" to="/lesson01" className="HMathDivs">
          <img src={add} id="MathAddImg" />
          <button className="HMathButtons">Addition</button>
        </Link>
        <Link id="multiply" to="/multiply" className="HMathDivs">
          <img src={mult} id="MathMultImg" />
          <button className="HMathButtons">Multiplication</button>
        </Link>
        <Link id="subtract" to="/subtract" className="HMathDivs">
          <img src={sub} id="MathMultImg" />
          <button className="HMathButtons">Subtraction</button>
        </Link>
        <Link id="divide" to="/Divide" className="HMathDivs">
          <img src={divide} id="MathDivImg" />
          <button className="HMathButtons" id="MathDivideBtn">
            Division
          </button>
        </Link>
      </div>

      <div className="MathLandingRight">
        <img src={child} alt="Kid" id="mathlandchild" />
      </div>
    </div>
  );
}

export default MathLanding;
