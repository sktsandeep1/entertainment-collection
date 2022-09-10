import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../Requests";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
import "./Content.css";
const Content = () => {
  const [movies, setMovies] = useState([]);
  // const [trailerUrl, setTrailerUrl] = useState();

  const moviesData = async () => {
    const request = await axios.get(requests.fetchTrending);
    setMovies(request.data.results);
  };

  useEffect(() => {
    moviesData();
  });

  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     autoplay: 1,
  //   },
  // };

  // const handleClick = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     movieTrailer(movie?.name || "")
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(urlParams.get("v"));
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "" : str;
  };

  return (
    <>
      <div className="container ">
        <div className="content_container">
          {movies.map((movies) => {
            const { id, backdrop_path } = movies;
            return (
              <div
                className="contents"
                // onClick={() => handleClick(movies)}
                key={id}
              >
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
                    {truncate(movies?.overview, 90)}
                  </article>
                </div>
              </div>
            );
          })}
        </div>
        {/* <YouTube videoId={trailerUrl} opts={opts} /> */}
      </div>
      <div className="content_fadeBottom"></div>
    </>
  );
};

export default Content;
