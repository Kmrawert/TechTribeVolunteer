var mongoose = require("mongoose");
// var moment = require("moment");

var Schema = mongoose.Schema;

//Create event Form - title, description, location/zip,
//link to website, picture, number of spots left, number of spots total

var eventsSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  description: {
    type: String,
    trim: true,
    required: "Description is Required"
  },
  organization: {
    type: String,
    trim: true,
    required: "Organization is Required"
  },
  experience: {
    type: String,
    trim: true,
    required: "Experience is Required"
  },
  zipcode: {
    type: Number,
    unique: false,
    required: true,
    validate: [
      function(input) {
        return (input.length = 5);
      },
      "Zip Code is incorrect"
    ]
  },
  numberofspots: {
    type: Number,
    unique: false,
    required: true
  },
  link: {
    type: String,
    required: "Link is Required"
  },
  image: {
    type: String
  },
  posteddate: {
    type: Date,
    default: new Date()
    //use moment on front end, save as string
  },
  eventdate: {
    type: Date,
    default: new Date(),
    min: "2019-11-20",
    max: "2023-12-31"
  },
  eventtime: {
    type: String
  },
  userattendee: { type: Schema.Types.ObjectId, ref: "User" },
  usercreator: { type: Schema.Types.ObjectId, ref: "User" }
});

var event = mongoose.model("event", eventsSchema);

module.exports = event;
