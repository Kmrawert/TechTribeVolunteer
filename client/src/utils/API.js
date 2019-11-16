import axios from "axios";

export default {
  getEvents: function() {
    return axios.post("/api/events");
  }
  // getSearchTerm: function() {
  //   return axios.post("/api/events" + searchTerm);
  // }
};
  