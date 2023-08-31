import  axios from "axios";
import LogService from "../Service/LogService";

axios.defaults.baseURL = process.env["REACT_APP_API_URL"]


// Currently as we have, all errors that could possibly
//occur have been handled in this response interceptor. If we happen
// to want to expand our app, we can always extend this code.
axios.interceptors.response.use(data => {
    if(data.data["Error"])
      return Promise.reject(data)
    
      return Promise.resolve(data)
    
}, error => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
   
    if (!expectedError) {
     LogService.logException(error)
    }
    return Promise.reject(error);
  })

export default class Https {
   protected get = axios.get
   protected post = axios.post
   protected put = axios.put
   protected patch = axios.patch
}

