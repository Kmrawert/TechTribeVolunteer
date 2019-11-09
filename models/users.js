const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({

	username: { type: String,  
		match: [/.+@.+\..+/, "Please enter a valid e-mail address"], 
		unique: true, required: true },
    // email: {
    //     type: String,
    //     match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    //   },
	password: { type: String, unique: true, required: true },
	name: {type: String},
	//interests: [{type: String}], // update with checkboxes?
	interests: { 
		one: {type: Boolean, default: false},
		two: {type: Boolean, default: false},
	}

})

// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');

		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model('User', userSchema)
module.exports = User