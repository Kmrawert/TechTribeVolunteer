import axios from "axios";


export default {
  getEvents: function() {
    return axios.get("/api/events");
  },
  getEventbyId: function (id) {
    return axios.get("/api/events/" + id);
  },
  saveEvent: function(eventData) {
    console.log(eventData)
    return axios.post("/api/events", eventData);
  }

};
  