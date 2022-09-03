const API_KEY = "c2da798d2b21f12d72eacfb1c80e277f";

const Requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discovery/movie?api_key=${API_KEY}&with_genres=99`,
};

export default Requests;
