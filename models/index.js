module.exports = {
  event: require("./events"),
  users: require("./users")
};

// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise

// //27017 is the default mongoDB port

// const uri = process.env.MONGODB_URI || process.env.LOCALHOST_URI || 'mongodb://heroku_pncrmznv:lf7o7n7qfbqssgsoi7te6h38po@ds061199.mlab.com:61199/heroku_pncrmznv' 
// //const uri = 'mongodb://localhost:27017/volunteer' 

// mongoose.connect(uri).then(
//     () => {  
//         console.log('Connected to Mongo');
//     },
//     err => {
//          console.log('error connecting to Mongo: ')
//          console.log(err);

//         }
//   );

// module.exports = mongoose.connection