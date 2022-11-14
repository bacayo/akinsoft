import React from "react";

import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { searchCurrency } from "../redux/currencySlice/currencySlice";
import { useDispatch } from "react-redux";
import { getCurrencyAsync } from "../redux/thunks/thunks";
import { SelectCard } from "./SelectCard";

//* Searchbar and button components using react material library
export const Searchbar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  //* dispatch search currency
  const handleSearchCurrency = () => {
    dispatch(searchCurrency(text));
  };

  //*clear search
  const handleClear = () => {
    dispatch(getCurrencyAsync());
    setText("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
      }}
    >
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="outlined-basic"
        label="search"
        variant="outlined"
      />
      <Button
        onClick={handleSearchCurrency}
        style={{ margin: 10, padding: 18, width: 100 }}
        variant="contained"
      >
        Search
      </Button>
      <Button
        onClick={handleClear}
        style={{ margin: 10, padding: 18, width: 100 }}
        variant="contained"
      >
        Clear
      </Button>
      <div style={{ marginLeft: "auto" }}>
        <SelectCard />
      </div>
    </div>
  );
};
