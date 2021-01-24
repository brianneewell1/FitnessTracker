const express = require("express");
//const logger = require("morgan");
const mongoose = require("mongoose");
//add seed file in//
require("./Develop/seeders/seed");

const appUrl = "mongodb://localhost/workout";

const PORT = process.env.PORT || 3001;

const app = express();

//app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect( process.env.MONGODB_URI || appUrl  , {
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(()=> console.log('Connected to database'))
.catch(err=> console.error('an error has occured', err));

//get routes
app.use(require("./routes/htmlroutes"));
app.use(require("./routes/apiroutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});