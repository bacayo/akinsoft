import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAsync } from "../redux/thunks/thunks";
import { useNavigate } from "react-router-dom";

import "./styles.css";

function App() {
  // React States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.loginSlice);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    dispatch(userLoginAsync({ username, password }));
  };

  useEffect(() => {
    if (status === 200) {
      navigate("home");
    }
  }, [status, navigate]);

  //*check if user is valid or not
  if (error === "Request failed with status code 400") {
    alert("username or password is wrong");
  }

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input
                type="text"
                name="uname"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input
                type="password"
                name="pass"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
