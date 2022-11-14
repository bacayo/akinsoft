var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");

const users = [
  {
    id: "1",
    username: "batuhan",
    password: "batuhan0102",
  },
  {
    id: "2",
    username: "cagatay",
    password: "cagatay1213",
  },
];

router.post("/", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });
  if (user) {
    //* generate access token
    const accessToken = jwt.sign({ id: user.id }, "mySecretKey");
    res.json({
      username: user.username,
      accessToken,
    });
  } else {
    res.status(400).json("Username or password incorrect");
  }
});

module.exports = router;
