const db = require("../models");

module.exports = function(app) {
    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
};