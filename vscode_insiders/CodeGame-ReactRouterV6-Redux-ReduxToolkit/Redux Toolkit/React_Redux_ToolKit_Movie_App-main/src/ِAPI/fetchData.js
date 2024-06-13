import { buildUrl } from "./buildUrl";
import axios from "axios";

export const fetchData = async (arg, thunkAPI ) => {
    let url = buildUrl(arg);
    let rejectWithValue = thunkAPI.rejectWithValue;
    try {
      let response = await axios.get(url);
      return response.data;
  
    } catch (error) {
      return rejectWithValue(error.message);
    }
  };
  
  