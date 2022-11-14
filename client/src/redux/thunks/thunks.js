import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:9000/";

//*fetch userLogin data from api
export const userLoginAsync = createAsyncThunk(
  "loginSlice/userLoginAsync",
  async (data) => {
    const response = await axios.post("login", {
      username: data.username,
      password: data.password,
    });
    return response;
  }
);

//* fetch currency data from api
export const getCurrencyAsync = createAsyncThunk(
  "currencySlice/getCurrencyAsync",
  async () => {
    const response = await axios.get("testApi");
    console.log(response.data);
    return response.data;
  }
);
