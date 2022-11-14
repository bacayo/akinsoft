var express = require("express");
var router = express.Router();
var url = "https://www.tcmb.gov.tr/kurlar/today.xml";
const convert = require("xml-js");
var axios = require("axios");
router.get("/", (res, req) => {
  axios
    .get(url)
    .then((response) => {
      // console.log(response);
      const data = JSON.parse(
        convert.xml2json(response.data, { compact: true, spaces: 2 })
      );
      req.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
