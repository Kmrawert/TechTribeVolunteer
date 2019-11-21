
const express = require('express')
const router = express.Router()
const dB= require('../models')
const eventsController = require('../controller/eventsController')


router.post("/api/events", function(req, res) {
  // Create a new note and pass the req.body to the entry
  console.log(req.body)
  dB.event.create(req.body)
    .then(function() {
      res.json("posted successfully");
    })
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
