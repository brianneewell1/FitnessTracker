const express = require("express");
//const logger = require("morgan");
const mongoose = require("mongoose");
//add seed file in//
require("./seeders/seed");

const PORT = process.env.PORT || 3001;

const app = express();

//app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect( 
  process.env.MONGODB_URI || 'mongodb://localhost/fitness_db', 
  {
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(()=> console.log('Connected to database'))
.catch(err=> console.error('an error has occured', err));

//get routes
app.use(require("./routes/htmlroutes"));
app.use(require("./routes/apiroutes"));

// app.listen(process.env.PORT || 3000, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });
app.listen(process.env.PORT || 3001, function() {
  console.log(`App running on port ${PORT}!`);
});