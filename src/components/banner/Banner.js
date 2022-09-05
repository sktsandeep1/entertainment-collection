import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../Requests";
import { BiErrorAlt } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import "./Banner.css";
const Banner = () => {
  const [movies, setMovies] = useState([]);

  const moviesData = async () => {
    const request = await axios.get(requests.fetchTrending);
    setMovies(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ]
    );
  };

  useEffect(() => {
    moviesData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "" : str;
  };

  return (
    <>
      <div
        className="container banner-section"
        // banner

        style={{
          backgroundImage: `url( "https://image.tmdb.org/t/p/original${movies?.backdrop_path}" )`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          {/* title */}
          <h1 className="banner_title">
            {movies?.title || movies?.name || movies?.original_name}
          </h1>
          {/* descriptions */}
          <h1 className="banner_description">
            {truncate(movies?.overview, 200)}
          </h1>
          {/* buttons */}

          <div className="banner-items">
            <div className="banner_item-1">
              <div className="play_section">
                <button className="btn_play">
                  <FaPlay className="play_icon" />
                  <span className="play">Play</span>
                </button>
              </div>
              <div className="more_info_section">
                <button className="btn_more_info">
                  <BiErrorAlt className="more_info_icon" />
                  <span className="more_info">More Info</span>
                </button>
              </div>
            </div>
            <div className="banner_item-2">
              <div className="underAge">
                <p>U/A 13+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner_fadeBottom"></div>
    </>
  );
};

export default Banner;
