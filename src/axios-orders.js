import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-course-burger-9912f.firebaseio.com/"
});

export default instance;
