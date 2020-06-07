import axios from "axios";
import key from "./keys";

const searchAPI = "https://www.googleapis.com/youtube/v3/search";

export default {
  async getVideoList(keyword) {
    const res = await axios.get(searchAPI, {
      params: {
        type: "video",
        part: "snippet",
        maxResults: 25,
        q: keyword,
        key: key.API_KEY,
      },
    });

    console.log(res.data.items);
    return res.data.items;
  },
};
