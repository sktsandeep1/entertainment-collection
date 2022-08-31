import React from "react";
import "./Hero.css";
import { FaPlay } from "react-icons/fa";
import { BiErrorAlt } from "react-icons/bi";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div>hero content</div>
        <div>
          <div className="play">
            <button>
              <FaPlay />
              <span>Play</span>
            </button>
          </div>
          <div className="more-info">
            <button>
              <BiErrorAlt />
              <span>More Info</span>
            </button>
          </div>
          <div className="under-age">
            <p>U/A 13+</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
