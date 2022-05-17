import axios from 'axios'

const API_VERSION = 'v' + process.env["REACT_APP_API_VERSION"]
const BACKEND_URL = process.env["REACT_APP_BACKEND_URL"]

export default axios.create({
    baseURL: `${BACKEND_URL}/${API_VERSION}`
});


