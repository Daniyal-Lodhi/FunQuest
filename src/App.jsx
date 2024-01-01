import "./App.css";
import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Game from "./components/Game";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ChildEdu from "./Components/ChildEdu";
import Subject from "./Components/Subject";
import MathPage from "./Components/MathPage";
import SciencePage from "./Components/SciencePage";
import ArtMain from "./Components/ArtFirst";
import Art from "./Components/Artpage";
import Ocean from "./Components/Ocean";
import Education from "./Components/Edu";
import Mahamscreen1 from "./components/Mahamscreen1";
import Mahamscreen2 from "./components/Mahamscreen2";
import Science from "./Components/SciencePage";
// import Math from "./components/MathSection/Math";
import MainScience from "./components/ScienceSection/Science";
import PlanetInfo from "./components/ScienceSection/PlanetInfo";
import ScienceFunFact from "./components/ScienceSection/ScienceFunFact";
import MathLesson01 from "./components/MathSection/MathLesson01";
import MathLanding from "./components/MathSection/MathLanding";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/game" Component={Game} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          {/* Art and craft main page */}
          {/* <Route path="/ArtMain" element={<ArtMain />} /> */}
          <Route
            path="/art"
            element={
              <>
                <ArtMain />
                <Art />
              </>
            }
          />
          <Route path="/ocean" element={<Ocean />} />

          {/* Education section Mainpage */}
          <Route path="ChildEdu" element={<ChildEdu />} />
          {/* Subject page containing Math and Science Subject */}
          <Route path="/Subject" element={<Subject />} />

          {/* Math Section */}
          <Route path="/MathPage" element={<MathPage />} />

          {/* Science Section */}
          <Route path="/SciencePage" element={<SciencePage />} />

          {/* Upcoming Courses page */}
          <Route path="/Education" element={<Education />} />

          {/* <Route path="/mahams1" Component={Mahamscreen1} /> */}
          <Route path="/mathlesson" element={<MathLesson01 />} />
          <Route path="/mathtest" element={<Mahamscreen1 />} />
          <Route path="/Science" element={<MainScience />} />
          <Route
            path="/SolarSystem"
            element={
              <>
                <ScienceFunFact />
                <PlanetInfo />
              </>
            }
          />

<Route path="/sciencea" element={<Science />} />
<Route path="/matha" element={<MathPage />} />
<Route path="/Math" element={<MathLanding />} />
<Route path="/Math" element={<MathLanding />} />
<Route path="/arta" element={<Art />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
