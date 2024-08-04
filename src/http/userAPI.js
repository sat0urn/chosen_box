import {$host} from "./index.js";
import {jwtDecode} from "jwt-decode";

const registration = async (userData) => {
  const {data} = await $host.post("/users/registration", userData)
  // localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export {}