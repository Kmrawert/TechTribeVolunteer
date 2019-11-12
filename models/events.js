var mongoose = require("mongoose");
var moment = require("moment");

var Schema = mongoose.Schema;

//Create event Form - title, description, location/zip, 
//link to website, picture, number of spots left, number of spots total

var eventsSchema = new Schema({
  // `string` must be of type String. We "trim" it to remove any trailing white space
  // `string` is a required field, and a custom error message is thrown if it is not supplied
  title: {
    type: String, trim: true, required: "Title is Required"
  },
  description: {
    type: String, trim: true, required: "Description is Required"
  },
  organization: {
    type: String, trim: true, required: "Organization is Required"
  },
  experience: {
    type: String, trim: true, required: "Experience is Required"
  },
  zipcode: {
    type: Number, unique: true, required: true,
    validate: [
			function(input) {
			  return input.length = 5;
			},
			"Zip Code is incorrect"
		  ],
  },
  numberofspots: {
    type: Number, unique: true, required: true
  },
  link: {
    type: String, trim: true, required: "Link is Required"
  },
  image: {
    //type: String
  },
  posteddate: {
    type: Date, default: Date.moment().format("MMM Do YY")  // time of post?
  },
  eventdate: {
    type: Date, default: Date.moment().format('MMMM Do YYYY, h:mm a')
    // min: '2019-11-20',
    // max: '2023-12-31'
  },
  // eventtime: {
  //   type: String, 
  // },
});

// This creates our model from the above schema, using mongoose's model method
var events = mongoose.model("Events", eventsSchema);

// Export the Example model
module.exports = events;
