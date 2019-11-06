var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var eventsSchema = new Schema({
  // `string` must be of type String. We "trim" it to remove any trailing white space
  // `string` is a required field, and a custom error message is thrown if it is not supplied
  string: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  number: {
    type: Number, unique: true, required: true
  },
  // `boolean` must be of type Boolean
  boolean: Boolean,
  // `array` must be an Array
  array: Array,
  // `date` must be of type Date. The default value is the current date
  date: {
    type: Date, default: Date.now
  },
});

// This creates our model from the above schema, using mongoose's model method
var events = mongoose.model("Events", eventsSchema);

// Export the Example model
module.exports = events;
