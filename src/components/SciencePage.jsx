import React from "react";
import SciBlog from "../assets/sciblog.png";
import Sci from "../assets/sci.png";
import "./SciencePage.css";
import SciBackground from "../assets/SciBackground.png";
import { Link } from "react-router-dom";

export default function Science() {
  return (
    <>
      <div className="back">
        <img src={SciBackground} className="pic1" />
        <div className="new">
          <img src={SciBlog} />
          <div className="note">
            <img src={Sci} />
            <p>
              Our programs are designed to make learning enjoyable, offering a
              diverse range of tools and methods tailored to each child unique
              learning style{" "}
            </p>
            <Link className="btn3" to="/science">
              Explore{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
