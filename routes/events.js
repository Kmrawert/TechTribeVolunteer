
const express = require('express')
const router = express.Router()
const Events = require('../models/event')



router.get("/api/events", function(req, res) {
  // res.json({})
  // console.log("hahahah")
  Events.find({}, function(err, found) {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});


router.post("/api/events", function(req, res) {
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

router.get("/api/events/:zipcode", function(req, res) {
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
