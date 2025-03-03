import axios from "axios";

const instance = axios.create({
    quoteURL : "https://dummyjson.com/quotes"
})
export default instance