const router = require("express").Router();
// const eventsController = require("../controller/eventsController.js");

const eventService = require('../services/event.service')
// router.get("/api/events", eventsController.findAll);



/**
 * Get all events
 * @example
 * axios.get('/api/events?zipcpde=60006)
 * axios.get('/api/events)
 */
router.get("/api/events", (req, res) => {

    const query = req.query
    console.log('api events', query)
    // res.end()
    let promise
    if (query.zipcode && Number.isInteger(query.zipcode)) {
        promise = eventService.findAll(Number(query.zipcode))
    } else {
        promise = eventService.findAll(query)
    }
    promise
        .then(dbEvent => res.json(dbEvent))
        .catch(err => res.status(422).json(err));
});

// router.post("/api/events", eventsController.create)
router.post("/api/events", (req, res) => {
    const event = req.body

    eventService.create(event)
        .then(dbEvent => res.json(dbEvent))
        .catch(err => res.status(422).json(err));
})



module.exports = router;
