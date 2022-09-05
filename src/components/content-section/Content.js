import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../Requests";
import "./Content.css";
const Content = () => {
  const [movies, setMovies] = useState([]);

  const moviesData = async () => {
    const request = await axios.get(requests.fetchNetflixOriginals);
    setMovies(request.data.results);
  };

  useEffect(() => {
    moviesData();
  });

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "" : str;
  };

  return (
    <>
      <div className="container ">
        <div className="content_container">
          {movies.map((movies) => {
            const { id, title, backdrop_path } = movies;
            return (
              <div className="contents" key={id}>
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + backdrop_path}
                  alt="poster"
                  className="movie_poster"
                />

                <div className="content_items">
                  <h1 className="title">
                    {movies?.title || movies?.name || movies?.original_title}
                  </h1>
                  <article className="content_description">
                    {truncate(movies?.overview, 150)}
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="content_fadeBottom"></div>
    </>
  );
};

export default Content;
