import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: '', // api base_url
  timeout: 3000 // request timeout
  // headers: {
  //   'Content-type': 'application/json'
  // }
  // withCredentials: true,
})

service.interceptors.request.use((config) => {
  config.headers.access_token_key = '9ce660abc59977cc35680d27cbc6bf69aec8a88d6862c4dadb6f08b071710090'
  return config
})

export default service
