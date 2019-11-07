var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create event Form - title, description, location/zip, 
//link to website, picture, number of spots left, number of spots total

var eventsSchema = new Schema({
  // `string` must be of type String. We "trim" it to remove any trailing white space
  // `string` is a required field, and a custom error message is thrown if it is not supplied
  title: {
    type: String, trim: true, required: "String is Required"
  },
  description: {
    type: String, trim: true, required: "String is Required"
  },
  organization: {
    type: String, trim: true, required: "String is Required"
  },
  zipcode: {
    type: Number, unique: true, required: true
  },
  numberofspots: {
    type: Number, unique: true, required: true
  },
  link: {
    type: String, trim: true, required: "String is Required"
  },
  image: {
    //type: String
  },
  posteddate: {
    type: Date, default: Date.now
  },
  eventdate: {
    type: Date, 
    //default: Date.now
  },
  eventtime: {
    type: Date, 
    //default: Date.now
  },
});

// This creates our model from the above schema, using mongoose's model method
var events = mongoose.model("Events", eventsSchema);

// Export the Example model
module.exports = events;
