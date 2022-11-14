import { configureStore } from "@reduxjs/toolkit";

import loginSlice from "./loginSlice/loginSlice";
import currencySlice from "./currencySlice/currencySlice";

//* creating store for redux and add all reducers in store
const store = configureStore({
  reducer: {
    loginSlice,
    currencySlice,
  },
});

export default store;
