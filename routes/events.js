
const express = require('express')
const router = express.Router()
const dB= require('../models')


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
    })
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
    .populate("User")
    // .sort({ eventdate: -1 })
    .then(function(dbEvent) {
      // res.json(dbEvent);
      // if then for zip
      const sortedResponse = dbEvent.sort(function(previous, next) {
        return Math.abs(zip - previous.zipcode) - Math.abs(zip - next.zipcode)
      });
      res.json(sortedResponse);

      // if (dbEvent === zipcode) {
      // } else {
      //   return zipcode + 5, zipcode - 5;
      //   //seach within 3 up or 3 down of zip until have 10 search results
      // }
    });
});

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
