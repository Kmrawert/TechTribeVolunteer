import axios from "axios";

// const baseUrl = ''
const baseUrl = 'http://localhost:3001'
// uncoment for prod
// const baseUrl = 'http://url.to.heroku.com'


export default {
  getEvents: function() {
    return axios.get(`${baseUrl}/api/events`);
  },
  getEventbyId: function (id) {
    return axios.get(`${baseUrl}/api/events/` + id);
  },
  saveEvent: function(eventData) {
    console.log(eventData)
    return axios.post("/api/events", eventData);
  }, 
  

};
  