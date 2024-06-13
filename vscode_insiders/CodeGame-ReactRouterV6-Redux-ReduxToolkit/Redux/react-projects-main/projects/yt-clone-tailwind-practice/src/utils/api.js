import axios from "axios";

// configure an axios instance with alays required things

const rapidApiAxiosInstance = axios.create({
  baseURL: "https://youtube-v31.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
  params: {
    part: "snippet,id",
    regionCode: "US",
    maxResults: "50",
    order: "date",
  },
});

export const fetchDataFromApi = async (url, params = {}) => {
  const { data } = await rapidApiAxiosInstance.get(url, {
    params,
  });
  return data;
};

// import axios from "axios";

// const BASE_URL = "https://youtube138.p.rapidapi.com";

// const options = {
//   params: { hl: "en", gl: "US" },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
//     "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
//   },
// };

// export const fetchDataFromApi = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   return data;
// };
