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


module.exports = router