const express = require("express");
const app = express();
const dotenv = require("dotenv");
const database = require("./config/database");
dotenv.config({ path: "/BackendJW/config/config.env" });
const res = require("express/lib/response");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const port = process.env.PORT || 5000;
var morgan = require("morgan");
var fs = require("fs");
var path = require("path");

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const user = require("./routes/users");

// database();

const mongoose = require('mongoose');

require('dotenv').config();


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


app.use("/", user);
const orgrouter = require('./routes/organizations')
const usersrouter = require('./routes/users')
const resumerouter = require('./routes/resume')

app.use('/resume',resumerouter);
app.use('/organizations',orgrouter);
app.use('/users',usersrouter);

const server = app.listen(5000, (req, res) => {
  console.log(`Server started on 5000!!!`);
});
