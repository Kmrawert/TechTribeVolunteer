const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    db.event.find(req.query)
      .then(dbEvent => res.json(dbEvent))
      .catch(err => res.status(422).json(err));
  },
  findByZip: function(req, res) {
    db.event.findByZip(req.params.zipcode)
      .then(dbEvent => res.json(dbEvent))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.event.create(req.body)
      .then(dbEvent => res.json(dbEvent))
      .catch(err => res.status(422).json(err));
  }
  // update: function(req, res) {
  //   db.event.findOneAndUpdate({ id: req.params.id }, req.body)
  //     .then(dbEvent => res.json(dbEvent))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Event.findById(req.params.id)
  //     .then(dbEvent => dbEvent.remove())
  //     .then(dbEvent => res.json(dbEvent))
  //     .catch(err => res.status(422).json(err));
  // }
};
