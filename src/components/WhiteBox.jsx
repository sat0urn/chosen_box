import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/index.js";
import {getAllWhiteMessages, removeMessage, saveMessage} from "../http/messageAPI.js";

const WhiteBox = observer(() => {
  const {messages} = useContext(AuthContext)
  const [whiteMessage, setWhiteMessage] = useState('')

  useEffect(() => {
    getAllWhiteMessages()
      .then(data => messages.setWhiteMessages(data))
      .catch(err => console.error(err))
  }, [messages.isChanged]);

  const sendWhiteMessage = async () => {
    try {
      let data = await saveMessage(whiteMessage, true)
      messages.toggleChanged()
      alert(data)
    } catch (e) {
      if (e.response.status === 404) {
        alert(e.response.data)
      }
    }
  }

  const removeWhiteMessage = async (id) => {
    try {
      let data = await removeMessage(id)
      messages.toggleChanged()
      alert(data)
    } catch (e) {
      if (e.response.status === 404) {
        alert(e.response.data)
      }
    }
  }

  return (
    <>
      <div className={"bg-light mt-5"}>
        <div className={"container min-vh-100 pt-5 bg-black"}>
          <div className={"d-flex justify-content-center"}>
            <div className="border border-2 border-light w-50 py-3 px-2">
              <h3 className={"text-center text-light"}>
                <i className="fa-solid fa-box"></i>
                <span className={"mx-4 fw-bold"}>
                  WHITE BOX
                </span>
                <i className="fa-solid fa-repeat"></i>
                <span className={"mx-4 text-secondary opacity-75 fw-bold"}>
                  XOB ETIHW
                </span>
                <i className="fa-solid fa-box text-secondary"></i>
              </h3>
            </div>
          </div>
          <div className={"d-flex justify-content-center mt-5"}>
            <div className={"text-center w-50"}>
              <textarea
                name="whiteThought"
                id="whiteThought"
                rows="6"
                className={"w-100 bg-light"}
                value={whiteMessage}
                onChange={(e) => setWhiteMessage(e.target.value)}
              />
              <button onClick={sendWhiteMessage} className={"btn btn-outline-light w-100 mt-2"}>
                Save
              </button>
            </div>
          </div>
          <div className={"d-flex flex-column justify-content-center mt-1"}>
            {messages.whiteMessages.map((msg, index) => (
              <div
                key={index}
                className={"d-flex justify-content-between align-items-center w-50 mx-auto border border-light rounded-3 px-3 py-2 mt-2"}
              >
                <div>
                  <h6 className={"m-0 text-light"}>{(index + 1) + ". " + msg.message}</h6>
                </div>
                <div>
                  <button
                    onClick={() => removeWhiteMessage(msg.id)}
                    className={"btn btn-outline-danger"}
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
})

export default WhiteBox