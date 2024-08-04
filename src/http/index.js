import axios from "axios";

const $authHost = axios.create({
  baseURL: 'https://chosen-box-server.onrender.com/api',
})

const $host = axios.create({
  baseURL: 'https://chosen-box-server.onrender.com/api',
})

const authInterceptor = config => {
  if (localStorage.getItem('token') != null) {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
  } else {
    return config
  }
}

$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
  $authHost
}