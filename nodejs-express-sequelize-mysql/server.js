// Import modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// create an Express app
const app = express();

// add body-parser and cors middlewares using app.use() method
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// db import
const db = require("./app/models");

// In development: drop existing tables and re-sync database (force: true)
// For production: just use sync() without parameters to avoid dropping data
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// define a GET route which is simple for test
app.get("/", (req, res) => {
  res.json({ message: "Welcome to User authentication application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen on port 8080 for incoming requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});