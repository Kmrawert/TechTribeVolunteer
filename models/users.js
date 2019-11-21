const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

const userSchema = new Schema({
  username: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    unique: true,
    required: true
  },
  password: {
    type: String,
    unique: true,
    required: true,
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password needs to be at least 6 characters long."
    ]
  },
  name: { type: String },
  // interests: {
  //   one: { type: Boolean, default: false },
  //   two: { type: Boolean, default: false },
  //   three: { type: Boolean, default: false },
  //   four: { type: Boolean, default: false },
  //   five: { type: Boolean, default: false }
  // },
  userattendee: { type: Schema.Types.ObjectId, ref: "Event" },
  usercreator: { type: Schema.Types.ObjectId, ref: "Event" }
});

userSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

// Define hooks for pre-saving
userSchema.pre("save", function(next) {
  if (!this.password) {
    console.log("models/user.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/user.js hashPassword in pre save");

    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
