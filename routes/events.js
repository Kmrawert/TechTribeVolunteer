
const express = require('express')
const router = express.Router()
const Events = require('../models/event')
const sgMail = require("@sendgrid/mail");
const dB= require('../models')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// router.post("/createevents", function(req, res) {
router.post("/api/events", function(req, res) {
  // Create a new note and pass the req.body to the entry
  console.log(req.body)
  dB.event.create(req.body)
    .then(function() {
      res.json("success");
      const createMsg = {
        to: newUser,
        from: "mollyanne.patterson@outlook.com",
        subject: "You've Created a New Event",
        text: "Thank you for creating a new event! We will review your submission and reach out to you within 24 hours!",
        html: "<strong>Thank you for creating a new event!</strong>"
      };
      sgMail.send(createMsg);
    })
    //populates user who created event
    .populate("User")
    .catch(function(err) {
      res.json(err);
    });
});


router.get("/events/:zipcode", function(req, res) {
  // Events.find({zipcode: req.params.zipcode})
  const zip = req.params.zipcode;
  Events.find({
    zipcode: {
      $gt: zip - 20,
      $lt: zip + 20
    }
  })

    // .sort({ eventdate: -1 })
    .then(function(dbEvent) {
      // res.json(dbEvent);
      // if then for zip
      const sortedResponse = dbEvent.sort(function(previous, next) {
        return Math.abs(zip - previous.zipcode) - Math.abs(zip - next.zipcode)
      });
      res.json(sortedResponse);
    });
});


// router.get("/api/events", (req, res) => {
//  // console.log(req.query)
//   // axios
//   //   .get(eventsController.findAll)
//   //   .then( results => {
//   //     console.log("results",results.data)
//   //     res.json(results.data)})
//   //   .catch(err => res.status(422).json(err));

// });

//populate user when signing up for an event
//.populate("User")

// app.get("/events", function(req, res) {
//   db.events.find({}, function(err, found) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.json(found);
//     }
//   });
// });

module.exports = router;
