import axios from "axios";
import { zomatoKey } from "./config";

export default axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1",
  headers: {
    "user-key": zomatoKey,
  },
});
