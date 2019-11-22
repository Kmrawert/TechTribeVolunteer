const axios = require("axios");
const router = require("express").Router();
const eventsController = require("../controller/eventsController.js");

router.get("/api/events", eventsController.findAll);

router.post("/api/events", eventsController.create)


module.exports = router;
