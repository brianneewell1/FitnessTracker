const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            distance: {
                type: Number,
            },
            duration: {
                type: Number,
            },
            name: {
                type: String,
                trim: true,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            type: {
                type: String,
                trim: true,
            },
            weight: {
                type: Number,
            },
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
