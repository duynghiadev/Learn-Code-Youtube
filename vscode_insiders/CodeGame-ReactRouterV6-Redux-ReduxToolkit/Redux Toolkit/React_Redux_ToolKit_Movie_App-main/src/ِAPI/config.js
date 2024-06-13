export const API_KEY = 'd456d9d8aa986fda3a4b533396101a74';
export const API_BASE_URL = 'https://api.themoviedb.org/3';


export const initialParams = {
  type: "",
  endpoint: '',
  queryParameters: {
  language: "en-US"
  },
};

export const moviesTopParams = {
  ...initialParams,
  type: "movies",
  endpoint: '/movie/top_rated',

};

export const seriesTopParams = {
  ...initialParams,
  type: "series",
  endpoint: '/tv/top_rated',
};

export const trendParams = {
  ...initialParams,
  type: "trend",
  endpoint: '/trending/all/day',
};

export const moviesParams = {
  ...initialParams,
  type: "movies",
  endpoint: '/discover/movie',
};
export const seriesParams = {
  ...initialParams,
  type: "series",
  endpoint: '/discover/tv',
};

export const moviesGenreParams = {
  ...initialParams,
  type: "movies",
  endpoint: "/genre/movie/list",

};

export const seriesGenreParams = {
  ...initialParams,
  type: "series",
  endpoint: "/genre/tv/list",
};