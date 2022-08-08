import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyC8To5B7KpLM8KEmGsbEjR_96-PqBGbkZA",
  },
});
