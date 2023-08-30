import  axios from "axios";

axios.defaults.baseURL = process.env["REACT_APP_API_URL"]



export default class Https {
   protected get = axios.get
   protected post = axios.post
   protected put = axios.put
   protected patch = axios.patch
}