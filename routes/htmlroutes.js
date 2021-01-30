const router = require("express").Router();
const path = require("path");

    router.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
    });

    router.get("/exercise", function(req, res) {
      res.sendFile(path.join(__dirname, "../Develop/public/exercise.html"));
    });

    router.get("/stats", function(req, res) {
      res.sendFile(path.join(__dirname, "../Develop/public/stats.html"));
    });

  

  module.exports = router