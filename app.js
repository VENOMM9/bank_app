const express = require("express");
const userRoute = require("./routes/user");
const transactionRoute = require("./routes/transaction");
const authRoute = require("./routes/auth");

const path = require("path");
const logger = require('./config/logger');
const winston = require('winston');



require("dotenv").config();
const { connectionToMongodb } = require("./db/connect");


const cookieParser = require("cookie-parser");
const { title } = require("process");

const PORT = process.env.PORT || 5800;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

//connect to mongodb instance
connectionToMongodb();

// Middleware
app.use(express.json());
// Add other middleware like CORS, logging, etc.

// Routes
app.use('/auth', userRoute );
app.use('/users', transactionRoute);
app.use('/transactions', authRoute);


app.get("/", (req, res) => {
  res.render("home");
});





app.get("/create", (req, res) => {
  res.render("createblog");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/existinguser", (req, res) => {
  res.render("existinguser");
});

app.get("/invalidinfo", (req, res) => {
  res.render("invalidinfo");
});

app.get("/unknown", (req, res) => {
  res.render("unknown");
});

app.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.redirect("/login");
});

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl} ${req.ip}`);
  next();
});


app.use((err, req, res, next) => {
  logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  // Handle errors and send a response
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




module.exports = app