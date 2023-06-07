const key = "a61bc14633f92266c563b32a638ee0ac";

const requests = {
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
};

export default requests;
