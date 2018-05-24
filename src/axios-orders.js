import axios from "axios";

const instance = axios.create({
    baseURL: "https://burger-react-bc897.firebaseio.com/"
});

export default instance;
