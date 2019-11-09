const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//27017 is the default mongoDB port

//const uri = process.env.MONGODB_URI || process.env.LOCALHOST_URI
const uri = 'mongodb://localhost:27017/volunteer' 

mongoose.connect(uri).then(
    () => {  
        console.log('Connected to Mongo');
    },
    err => {
         console.log('error connecting to Mongo: ')
         console.log(err);
         
        }
  );

module.exports = mongoose.connection