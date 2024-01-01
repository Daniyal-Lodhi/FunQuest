import React from "react";
import jupiter from "../../assets/jupiter1.png";
import saturn from "../../assets/saturn.png";
import uranus from "../../assets/uranus.png";
import "./PlanetInfo.css";
function PlanetInfo() {
  return (
    <div className="HMainPlanetInfoGrid">
      <div className="HPlanteInfoSaturn">
        <h1 className="HPlanetInfoHeads">Saturn</h1>
        <img src={saturn} id="Hsaturnpic" className="HPlanetInfoPics" />
        <desc className="HPlanetDesc" id="Hsaturndesc">
          Saturn is the sixth planet from the Sun in our solar system and is
          easily recognizable by its stunning system of rings, which are
          composed primarily of ice particles and rocky debris. It is a gas
          giant with a diameter about nine times that of Earth, making it the
          second-largest planet in our solar system. Saturn is known for its low
          density, which allows it to float in water
        </desc>
      </div>

      <div className="HPlanteInfoJupiter">
        <h1 className="HPlanetInfoHeads">Jupiter</h1>
        <img src={jupiter} id="Hjupiterpic" className="HPlanetInfoPics" />
        <div className="HPlanetDesc" id="Hjupiterdesc">
          Jupiter is the largest planet in our solar system, located fifth from
          the Sun. It is a gas giant with a diameter more than 11 times that of
          Earth, and it has a powerful magnetic field, approximately 20,000
          times stronger than Earth's. Jupiter is known for its distinctive
          bands of clouds, including the famous Great Red Spot, a massive storm
          that has been raging for centuries.
        </div>
      </div>

      <div className="HPlanteInfoUranus">
        <h1 className="HPlanetInfoHeads">Uranus</h1>
        <img src={uranus} id="Huranuspic" className="HPlanetInfoPics" />
        <div className="HPlanetDesc" id="Huranusdesc">
          Uranus is the seventh planet from the Sun in our solar system and is
          classified as an ice giant. It is unique among the planets due to its
          distinctive sideways rotation, with its axis tilted at an extreme
          angle of about 98 degrees. This peculiar tilt causes Uranus to
          essentially roll on its side as it orbits the Sun.
        </div>
      </div>
    </div>
  );
}

export default PlanetInfo;
