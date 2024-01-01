import React from "react";
import board from "../../assets/mathBoard.png";
import cloud from "../../assets/lessonCloud.png";
import teacher from "../../assets/teacher.png";
import "./MathLesson01.css";
import { Link } from "react-router-dom";
// import "animate.css";
function MathLesson01() {
  return (
    <div className="HLesson01Outer">
      <h1 id="Hlesson01head" className="animate__bounceIn">
        Lesson 01
      </h1>
      <div className="HLessonFlex">
        <img src={teacher} alt="teacher" id="teacher" />
        <Link id="Hlesson01btn" to="/mathtest">
          Take Test!
        </Link>
      </div>
    </div>
  );
}

export default MathLesson01;
