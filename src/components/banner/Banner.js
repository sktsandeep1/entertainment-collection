import React, { useEffect, useState } from "react";
import Play from "../sub-components/Play";
import MoreInfo from "../sub-components/MoreInfo";
import UnderAge from "../sub-components/UnderAge";
import axios from "../../axios";
import requests from "../../Requests";
import "./Banner.css";

import { BiErrorAlt } from "react-icons/bi";

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
              <Play />
              <MoreInfo />
            </div>
            <div className="banner_item-2">
              <UnderAge />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
