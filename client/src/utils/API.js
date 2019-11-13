import axios from "axios";

export default {
  Events: function() {
    return axios.post("/api/events");
  }
};
  