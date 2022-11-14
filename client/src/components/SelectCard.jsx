import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  sortAscending,
  sortDescending,
} from "../redux/currencySlice/currencySlice";
import { getCurrencyAsync } from "../redux/thunks/thunks";

export const SelectCard = () => {
  const dispatch = useDispatch();

  //* sort ascending order
  const handleAscending = () => {
    dispatch(sortAscending());
  };

  //* sort descending order
  const handleDesc = () => {
    dispatch(sortDescending());
  };

  //* no sorting
  const noSort = () => {
    dispatch(getCurrencyAsync());
  };

  return (
    <FormControl style={{ width: 150, margin: 30 }}>
      <InputLabel id="demo-simple-select-label">Sırala</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Sırala"
      >
        <MenuItem onClick={handleAscending}>Artan</MenuItem>
        <MenuItem onClick={handleDesc}>Azalan</MenuItem>
        <MenuItem onClick={noSort}>Normal Görünüm</MenuItem>
      </Select>
    </FormControl>
  );
};
