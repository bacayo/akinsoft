import { createSlice } from "@reduxjs/toolkit";
import { getCurrencyAsync } from "../thunks/thunks";

const currencySlice = createSlice({
  name: "currencySlice",
  initialState: {
    isLoading: false,
    error: null,
    currency: [],
  },
  reducers: {
    //* search currecnt with given keyword
    searchCurrency: (state, action) => {
      const filteredCurrency = state.currency.filter(
        (cur) => cur.Isim._text.toLowerCase() === action.payload.toLowerCase()
      );
      console.log(filteredCurrency);
      state.currency = filteredCurrency;
    },
    //* sort currencies to ascending order
    sortAscending: (state) => {
      state.currency.sort((a, b) =>
        parseFloat(a.ForexBuying._text) > parseFloat(b.ForexBuying._text)
          ? 1
          : -1
      );
    },
    //* sort currencies to descending order
    sortDescending: (state, action) => {
      state.currency.sort((a, b) =>
        parseFloat(a.ForexBuying._text) > parseFloat(b.ForexBuying._text)
          ? -1
          : 1
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrencyAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCurrencyAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.currency = action.payload.Tarih_Date.Currency;
    });
    builder.addCase(getCurrencyAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default currencySlice.reducer;

export const { searchCurrency, sortAscending, sortDescending } =
  currencySlice.actions;
