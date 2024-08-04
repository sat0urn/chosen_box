import {$host} from "./index.js";

const exportFile = async () => {
  const response = await $host.get('/export', {
    responseType: "blob"
  })
  return response.data
}

export {
  exportFile
}