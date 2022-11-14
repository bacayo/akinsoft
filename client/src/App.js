import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "../src/redux/store";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {/* <LoginPage /> */}
        <Router />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
