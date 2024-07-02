const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });

const app = express();

const salt = bcrypt.genSaltSync(10);

// env variables

const secret = process.env.SECRET;
const mongodbUrl = process.env.MONGODB_URL;
const PORT = process.env.PORT;

// app.use(cors());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Handle preflight OPTIONS requests

app.options("*", cors());

// middleware to set headers

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// middlewares

app.use(express.json());

app.use(cookieParser());

// connect to database

mongoose.connect(mongodbUrl, {});

// test server

app.get("/test", (req, res) => {
  res.json("Hello World");
});

// register user

app.post("/register", async (req, res) => {
  const {
    username,
    password,
    email,
    age,
    country,
    state,
    city,
    pincode,
    firstName,
    lastName,
    type,
    address,
    isdCode,
    mobileNumber,
    fax,
    // phoneNumber,
    confirmPassword,
  } = req.body;
  try {
    const user = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
      email,
      age,
      country,
      state,
      city,
      pincode,
      firstName,
      lastName,
      type,
      address,
      isdCode,
      mobileNumber,
      fax,
      // phoneNumber,
      confirmPassword,
    });
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

// login user

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, user.password);
  if (passOk) {
    //loggedin
    jwt.sign(
      {
        username,
        id: user._id,
      },
      secret,
      {
        expiresIn: "1h",
      },
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          id: user._id,
          username,
        });
      }
    );
  } else {
    //not logged in
    res.status(400).json("wrong credentials");
  }
});

// logout user

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("Logged Out");
});

// get user profile

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

// listen to port

app.listen(PORT, () => {
  console.log("Server running on port 4000");
});
