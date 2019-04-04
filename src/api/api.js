import axios from 'axios'

const Api = axios.create({
  baseURL: `${process.env.VUE_APP_BASE_URL}/api`,
  // validateStatus: () => true,
})

Api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // When network error is ocurred response value will be 'undefined'.
    // In code we use checks like ```if(response.status === XXX)```
    // so to avoid getting status from response: undefined and get rid of 
    // double checks ```if(response && response.status)```,
    // set response to empty object here.
    if(error.response === undefined) {
      error.response = {}
    }

    return Promise.resolve(error)
    //return Promise.reject(error);
  }
)

export default Api