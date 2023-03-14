const putData = require("./putData");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Making the user schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  class: String,
  cookieID: String,
});
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const ClassTimetable = putData.putData();

app.get("/getTimetable", (req, res) => {
  ClassTimetable.find({}, (err, timetables) => {
    res.send({ data: timetables });
  });
});

app.post("/timetable", (req, res) => {
  ClassTimetable.find({ class: req.body.class }, (err, timetableFound) => {
    if (err) {
      console.log(err);
    } else {
      switch (_.lowerCase(req.body.day)) {
        case "monday":
          res.send({ timetable: timetableFound[0].monday });
          break;
        case "tuesday":
          res.send({ timetable: timetableFound[0].tuesday });
          break;
        case "wednesday":
          res.send({ timetable: timetableFound[0].wednesday });
          break;
        case "thursday":
          res.send({ timetable: timetableFound[0].thursday });
          break;
        case "friday":
          res.send({ timetable: timetableFound[0].friday });
          break;
        case "saturday":
          res.send({ timetable: timetableFound[0].saturday });
          break;
        default:
          break;
      }
    }
  });
});

app.post("/signIn", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  req.login(user, (err) => {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, () => {
        // console.log(req);
        req.user.cookieID = req.body.cookieID;
        req.user.save();
        res.send({ msg: "900", userData: req.user });
      });
    }
  });
});
app.post("/retain-session", (req, res) => {
  console.log(req.body);
  if (req.body.cookieID !== "") {
    User.findOne({ cookieID: req.body.cookieID }, (err, userFound) => {
      if (userFound) {
        res.send({ msg: "901" });
      }
    });
  }
});

app.post("/signup", (req, res) => {
  if (req.body.password === req.body.confirmPassword) {
    User.register(
      {
        username: req.body.username,
        class: req.body.class,
        cookieID: req.body.cookieID,
      },
      req.body.password,
      (err, user) => {
        if (err) {
          console.log(err);
        } else {
          passport.authenticate("local")(req, res, () => {
            res.send({ msg: "901" });
          });
        }
      }
    );
  } else {
    res.send({ msg: "902" });
  }
});

app.listen(8000, () => {
  console.log("The server is running on port 8000");
});
