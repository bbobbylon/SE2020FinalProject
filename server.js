const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/users")
const path = require("path"); // on top
const cors = require('cors')
require('dotenv').config()


const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());


/*
//added some stuff to test
app.use(express.static('./client/build'));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build",     
    "index.html"));
 });


 app.set('port', process.env.PORT || 5000);
 console.log("++++++++++++++++" + app.get('port'));
*/

// DB Config
const db = require("./config/keys").mongoURI;



// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));



/*connect to mongo
const uri = process.env.ATLAS_URI

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open' , () => {
  console.log("MongoDB database is up and running")
})

*/
//Passport middleware
app.use(passport.initialize());
//passport config
require("./config/passport")(passport);


//routes 
app.use("/api/users" , users)
const templateRouter = require('./routes/templates')
app.use('/templates' , templateRouter)


const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there




app.use(cors())
app.use(express.json())
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); // change this if your dir structure is different
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


app.listen(port, () => console.log(`Server up and running on port ${port} !`));


