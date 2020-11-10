import axios from 'axios'
const ApiClient = axios.create({ baseURL: 'http://localhost:3001/api' })




// We will now using axios interceptors to generate a token when accessing our API from the client side to handle authorization.
//Authorization is one of the most common use cases for axios interceptors. Typically, the way a client app proves to a server 
// that the user is logged in is by sending a secret token in the authorization header. Interceptors let you set the authorization 
// header automatically on all requests.


// Step 1: Axios creates tokens -- COMPLETE!
// next step: the client must check that the token is valid with each user that is authenticated
// we'll need to use a new route in UserServices.js..
ApiClient.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)




export default ApiClient