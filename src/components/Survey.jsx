import {useState} from "react";
import {saveSurvey} from "../http/surveyAPI.js";

const Survey = () => {

  const [surveyData, setSurveyData] = useState({
    firstName: "",
    lastName: "",
    secret: "",
    sex: "Male",
    address: ""
  })

  const saveSurveyData = async (e) => {
    e.preventDefault()
    try {
      const data = await saveSurvey(surveyData)
      alert(data)
    } catch (e) {
      if (e.response.status === 302) {
        alert(e.response.data)
      }
    }
  }

  return (
    <>
      <div className={"container d-flex min-vh-100"}>
        <div className={"m-auto w-100"}>
          <div className={"text-center mb-3"}>
            <h3 className={"fw-bold"} style={{textShadow: '1px 1px gray'}}>
              SURVEY &ndash; DON&apos;T WORRY
            </h3>
          </div>
          <form onSubmit={saveSurveyData} className={"w-50 mx-auto"}>
            <div className="row mb-3">
              <label
                htmlFor="firstName"
                className="form-label"
              >
                What is your name?
              </label>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First name"
                  value={surveyData.firstName}
                  onChange={(e) => setSurveyData({...surveyData, firstName: e.target.value})}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className={"form-control"}
                  id="lastName"
                  placeholder="Last name"
                  value={surveyData.lastName}
                  onChange={(e) => setSurveyData({...surveyData, lastName: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className={"form-label"}
              >
                Can you share your secret here?
              </label>
              <textarea
                className={"form-control"}
                id="secret"
                placeholder="Your secret..."
                value={surveyData.secret}
                onChange={(e) => setSurveyData({...surveyData, secret: e.target.value})}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="shyness_"
                className="form-label"
              >
                What is your sex? Don&apos;t be shy :)
              </label>
              <div className={"d-flex flex-row"}>
                <div className="form-check me-4">
                  <input
                    type="radio"
                    className={"form-check-input"}
                    name={"radioSexButton"}
                    id="male"
                    onClick={() => setSurveyData({...surveyData, sex: 'Male'})}
                    defaultChecked={surveyData.sex === 'Male'}
                  />
                  <label htmlFor="male" className={"form-check-label"}>
                    Male
                  </label>
                </div>
                <div className="form-check me-4">
                  <input
                    type="radio"
                    className={"form-check-input"}
                    name={"radioSexButton"}
                    id="female"
                    onClick={() => setSurveyData({...surveyData, sex: 'Female'})}
                  />
                  <label htmlFor="female" className={"form-check-label"}>
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className={"form-check-input"}
                    name={"radioSexButton"}
                    id="animal"
                    onClick={() => setSurveyData({...surveyData, sex: 'Animal'})}
                  />
                  <label htmlFor="animal" className={"form-check-label"}>
                    Animal
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="city"
                className={"form-label"}
              >
                Where do you live? You can tell me, do not worry =:)
              </label>
              <input
                type="text"
                className={"form-control"}
                id="address"
                placeholder="Your sweet address..."
                value={surveyData.address}
                onChange={(e) => setSurveyData({...surveyData, address: e.target.value})}
                required
              />
            </div>
            <button type={"submit"} className={"btn btn-outline-dark w-100 mt-3"}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Survey