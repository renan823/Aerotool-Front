import axios from "axios";

axios.defaults.baseURL = process.env.SERVER_URL;
axios.defaults.headers.common["Authorization"] = "TOKEN EXAMPLE";

// url must be '/endpoint/'

const request = async (endpoint, method, payload={}) => {
    const response = await axios({ url: endpoint, method: method, data: payload });
    return response.data;
}

export default request;

