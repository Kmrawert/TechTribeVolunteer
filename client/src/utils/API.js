import axios from "axios";

export default {
  getEvents: function() {
    return axios.post("/api/events");
  },
  getUser: function() {
    return axios.get("/api/users");
  },
  // getSearchTerm: function() {
  //   return axios.post("/api/events" + searchTerm);
  // }
};
  