import React from "react";
import earth from "../assets/earth1.png";
import saturn from "../assets/saturn1.png";
import moon from "../assets/moon.png";
import mars from "../assets/mars.png";
import { FaClock } from "react-icons/fa";
import PinkButton from "./button";
import { Link } from "react-router-dom";

const Mahamscreen2 = () => {
  return (
    <div>
      <div className="flex flex-col w-full h-screen sm:hidden">
        <div className="D-mahams2a h-[25%] w-full relative">
          <p className="text-3xl ml-4 mt-2 text-center text-white D-lazydog font-bold">
            SOLAR SYSTEM
          </p>
          <img src={earth} className="w-32 absolute bottom-[-40px] right-0" />
          <img src={saturn} className="w-20 absolute top-10  right-[110px] " />
        </div>
        <div className="D-mahams2b h-[75%] w-full">
          <img src={moon} className="w-40" />
          <div className="flex flex-col">
            <h2 className="D-lazydog mx-auto mt-5 text-3xl font-bold underline decoration-white text-[#c61569] ">
              LET’S LEARN
            </h2>
            <p className="D-glacialFont text-xl text-center mt-5">
              The solar system is a family of planets, moons, and other things
              that go around the Sun. There are eight planets, and Earth is one
              of them. The Sun is in charge, and each planet is unique. The Moon
              is Earth's friend. It's like a big playground in space we can
              explore!
            </p>
          </div>
          <div className="flex space-x-1 mt-3 items-center justify-center">
            <FaClock className="w-13" />
            <p className="D-glacialFont text-lg">1h 30 min</p>
          </div>
        </div>

        <div></div>
      </div>

      <div className="h-screen sm:flex w-full hidden">
        <img src={moon} className="w-60   absolute right-0" />
        <div className="D-mahams2a flex w-[30%] relative">
          <h1 className="D-lazydog text-3xl font-bold text-white mt-5 ml-3">
            SOLAR SYSTEM
          </h1>
          <img src={mars} className="h-56 absolute top-[-30px] right-[-85px]" />
          <img src={earth} className="h-60 absolute top-52 left-16 " />
          <img src={saturn} className="h-44  absolute bottom-2 right-[-75px]" />
        </div>
        <div className="D-mahams2b flex w-[70%] overflow-hidden items-center ">
          <div className="flex flex-col w-[100%] ml-20   relative">
            <div className="w-[80%] ">
              <h1 className="text-[#c61569] text-[45px] font-bold mb-6 underline D-lazydog">
                LET’S LEARN
              </h1>
              <p className="text-2xl D-glacialFont">
                The solar system is a family of planets, moons, and other things
                that go around the Sun. There are eight planets, and Earth is
                one of them. The Sun is in charge, and each planet is unique.
                The Moon is Earth's friend. It's like a big playground in space
                we can explore!
              </p>
              <div className="flex space-x-1 mt-3 items-center ">
                <FaClock className="w-13" />
                <p className="D-glacialFont text-xl text-slate-700 font-thin ">
                  1h 30 min
                </p>
              </div>
              <Link to="/solarsystem">
                <PinkButton />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mahamscreen2;
