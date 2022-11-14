import { createSlice } from "@reduxjs/toolkit";

import { userLoginAsync } from "../thunks/thunks";

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    isLoading: false,
    user: [],
    error: null,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLoginAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLoginAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data;
      state.status = action.payload.status;
    });
    builder.addCase(userLoginAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default loginSlice.reducer;
