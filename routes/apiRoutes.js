// const axios = require("axios");
const router = require("express").Router();
// const eventsController = require("../controller/eventsController.js");
// const eventsRoutes = require("./books");
const userRoutes = require("./users")

router.use("../users", userRoutes)

router.get("/api/events", (req, res) => {
 console.log(req.query)
  axios
    .get(eventsController.findAll)
    .then( results => {
      console.log("results",results.data)
      res.json(results.data)})
    .catch(err => res.status(422).json(err));

module.exports = router;

// router.get("/api/events", (req, res) => {
//  // console.log(req.query)
//   // axios
//   //   .get(eventsController.findAll)
//   //   .then( results => {
//   //     console.log("results",results.data)
//   //     res.json(results.data)})
//   //   .catch(err => res.status(422).json(err));

// });

router.post("/api/events", eventsController.create)
// router.post("/api/events", (req, res) => {
//   console.log(req.query)
//    axios
//      .post(c)
//      .then( results => {
//        console.log("results",results.data)
//        res.json(results.data)})
//      .catch(err => res.status(422).json(err)); 
//  });


// router.route("/")
//   .get(eventsController.findAll)
//   .post(eventsController.create).then(()=>{});

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(eventsController.findById)
//   .put(eventsController.update)
//   .delete(eventsController.remove);


