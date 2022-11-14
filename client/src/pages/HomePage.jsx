import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCurrencyAsync } from "../redux/thunks/thunks";
import Table from "../components/Table";
import { Searchbar } from "../components/Searchbar";

function HomePage() {
  const dispatch = useDispatch();
  const { currency } = useSelector((state) => state.currencySlice);

  useEffect(() => {
    dispatch(getCurrencyAsync());
  }, [dispatch]);

  return (
    <div>
      <Searchbar />
      <Table data={currency} />
    </div>
  );
}

export default HomePage;
