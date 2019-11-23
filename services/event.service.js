const db = require("../models");

// Defining methods for the bookController
module.exports = {
  
  
  findAll: function(query) {
    return db.event.find(query)
  },


  // findByZip: function(zipcode) {
  //   return db.event.findByZip(zipcode)
  // },


  create: function(event) {

    return db.event.create(event)
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
