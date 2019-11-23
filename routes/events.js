const express = require("express");
const router = express.Router();
const dBevents = require("../models/events");

const eventsController = require('../controller/eventsController')


router.post("/api/events", function(req, res) {
  // Create a new note and pass the req.body to the entry
  console.log(req.body);
  dBevents.event
    .create(req.body)
    .then(function() {
      res.json("success");
      res.json("posted successfully");
    })
    //populates user who created event
    // .populate("User")
    .catch(function(err) {
      res.json(err);
    });
});

router.route("/")
.get(eventsController.findAll);

router.get("/events/:zipcode", function(req, res) {
  // Events.find({zipcode: req.params.zipcode})
  const zip = req.params.zipcode;
  Events.find({
    zipcode: {
      $gt: zip - 20,
      $lt: zip + 20
    }
  })
    //populate user on sign up
    // .populate("User")
    // .sort({ eventdate: -1 })
    .then(function(dbEvent) {
      // res.json(dbEvent);
      const sortedResponse = dbEvent.sort(function(previous, next) {
        return Math.abs(zip - previous.zipcode) - Math.abs(zip - next.zipcode);
      });
      res.json(sortedResponse);
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
