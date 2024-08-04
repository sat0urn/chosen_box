import {$host} from "./index.js";

const saveMessage = async (message, type) => {
  let response = await $host.post(
    "/messages",
    {
      message: message,
      type: type
    }
  );
  console.log(response)
  return response.data
}

const removeMessage = async (id) => {
  let response = await $host.delete("/messages/" + id)
  console.log(response)
  return response.data
}

const getAllBlackMessages = async () => {
  let response = await $host.get("/messages/black")
  console.log(response)
  return response.data
}

const getAllWhiteMessages = async () => {
  let response = await $host.get("/messages/white")
  console.log(response)
  return response.data
}

export {
  saveMessage,
  removeMessage,
  getAllBlackMessages,
  getAllWhiteMessages
}