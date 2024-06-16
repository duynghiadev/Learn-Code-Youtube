import axios from "axios";

const topMovieIds = [
  "tt0107290",
  "tt0110912",
  "tt0076759",
  "tt1375666",
  "tt0133093",
  "tt0120737",
  "tt0816692",
  "tt0110357",
  "tt0167260",
  "tt0468569",
];

const topMoviesInfo = topMovieIds.map((id) =>
  axios.get(`http://www.omdbapi.com/?i=${id}&apiKey=fe5a9562`)
);

export default topMoviesInfo;
