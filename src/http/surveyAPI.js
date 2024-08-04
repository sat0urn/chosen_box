import {$host} from "./index.js";

const saveSurvey = async (surveyData) => {
  const response = await $host.post(
    "/survey",
    surveyData
  )
  return response.data
}

export {
  saveSurvey
}