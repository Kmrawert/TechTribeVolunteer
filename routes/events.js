const express = require('express')
const router = express.Router()
const Events = require('../models/events')


router.post("/events", function(req, res) {
    // Create a new note and pass the req.body to the entry
    Events.create(req.body)
      .then(function() {
        // If we were able to successfully update an Article, send it back to the client
        res.json("success");
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
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

module.exports = router