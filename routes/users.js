const express = require("express");
const router = express.Router();
const User = require("../models/users");
const passport = require("../passport");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// var dataUsers = {
//     username: "molly_patterson@test.com",
//     password: "testing",
//     interests: {
//       one: false,
//       two: false,
//       three: false,
//       four: false,
//       five: false,
//     }
// }

router.post("/", (req, res) => {
  console.log("user signup");

  const { username, password } = req.body;
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`
      });
    } else {
      const newUser = new User({
        username: username,
        password: password
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser);
      });
      const WelcomeMsg = {
        to: newUser,
        from: "mollyanne.patterson@outlook.com",
        subject: "Welcome to Community Connect!",
        text: "Thank you for joining Community Connect!",
        html: "<strong>Thank you for joining Community Connect!</strong>"
      };
      sgMail.send(WelcomeMsg);
    }
  }).populate("Event");

});

router.post(
  "/login",
  function(req, res, next) {
    console.log("routes/users.js, login, req.body: ");
    console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("logged in", req.user);
    var userInfo = {
      username: req.user.username
    };
    res.send(userInfo);
  }
  // ,

  // // put in route, create what user inputs
  // User.create(User)
  // .then(function(dbUsers) {
  //   console.log(dbUsers);
  // })
  // .catch(function(err) {
  //   console.log(err.message);
  // })
);

router.get("/", (req, res, next) => {
  console.log("===== user!!======");
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

module.exports = router;
