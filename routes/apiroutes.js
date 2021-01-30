const router = require("express").Router();
const db = require("../models");
const Workout = require("../models/workout");

module.exports = function(app) {
 //gets information for workouts page
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
          dbWorkout.forEach(workout => {
            var total = 0;
            workout.exercises.forEach(e => {
              total += e.duration;
            });
            workout.totalDuration = total;
          });
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
   //range page
    app.get("/api/workouts/range", (req, res) => {
      db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
      }).catch(err => {
        res.status(400).json(err);
      });
    });
    //create new workouts
    app.post("/api/workouts/", ({ body }, res) => {
    db.Workout.create(body).then((dbWorkout => {
      res.json(dbWorkout);
    })).catch(err => {
      res.json(err);
    });
    });
   
     //updates database
      app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findOneAndUpdate(
          { _id: req.params.id }, 
          {
          $inc: {totalDuration: req.body.duration},
          $push: { exercises: req.body }  
          },
          {new: true}).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
          res.status(400).json(err);
        });
    });
};

module.exports = router