//const router = require("express").Router();
const db = require("../models");
const Workout = require("../models/workout");

module.exports = function(app) {
 //gets information for workouts page
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    })
   //range page
    app.get("/api/workouts/range", ({}, res) => {
      db.Workout.find({}).then((dbWorkout) => {
        res.json(dbWorkout);
      }).catch(err => {
        res.status(400).json(err);
      });
    });
    //create new workouts
    app.post("/api/workouts/", (req, res) => {
        db.Workout.create(req.body).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
          });
      });
     //updates database
      app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
          { _id: req.params.id }, { exercises: req.body }
        ).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
          res.status(400).json(err);
        });
    });
};

//module.exports = router