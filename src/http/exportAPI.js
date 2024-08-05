import {$host} from "./index.js";

const exportFile = async () => {
  console.log(import.meta.env.VITE_SERVER_BASE_URL)
  const response = await $host.get('/export', {
    responseType: "blob"
  })
  return response.data
}

export {
  exportFile
}