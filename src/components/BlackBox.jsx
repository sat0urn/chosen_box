import {getAllBlackMessages, removeMessage, saveMessage} from "../http/messageAPI.js";
import {useContext, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {AuthContext} from "../context/index.js";
import {Link} from "react-router-dom";

const BlackBox = observer(() => {
  const {messages} = useContext(AuthContext)
  const [blackMessage, setBlackMessage] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const [removeIsLoading, setRemoveIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getAllBlackMessages()
      .then(data => messages.setBlackMessages(data))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false))
  }, [messages.isChanged]);

  const sendBlackMessage = async () => {
    setIsLoading(true)
    try {
      let data = await saveMessage(blackMessage, false)
      messages.toggleChanged()
      alert(data)
    } catch (e) {
      if (e.response.status === 404) {
        alert(e.response.data)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const removeBlackMessage = async (id) => {
    setRemoveIsLoading(true)
    try {
      let data = await removeMessage(id)
      messages.toggleChanged()
      alert(data)
    } catch (e) {
      if (e.response.status === 404) {
        alert(e.response.data)
      }
    } finally {
      setRemoveIsLoading(false)
    }
  }

  return (
    <>
      <div className={"bg-black mt-5"}>
        <div className={"container min-vh-100 pt-5 bg-light"}>
          <div className={"d-flex justify-content-center"}>
            <div className={"border border-2 border-black w-50 py-3 px-2"}>
              <h3 className={"text-center"}>
                <i className="fa-solid fa-box"></i>
                <span className={"mx-4 fw-bold"}>
                  BLACK BOX
                </span>
                <Link to={'/white'} className={"text-black"}>
                  <i className="fa-solid fa-repeat"></i>
                </Link>
                <span className={"mx-4 text-secondary opacity-75 fw-bold"}>
                  XOB KCALB
                </span>
                <i className="fa-solid fa-box text-secondary"></i>
              </h3>
            </div>
          </div>
          <div className={"d-flex justify-content-center mt-5"}>
            <div className={"text-center w-50"}>
              <textarea
                name="blackThought"
                id="blackThought"
                rows={"6"}
                className={"w-100 bg-light"}
                value={blackMessage}
                onChange={(e) => setBlackMessage(e.target.value)}
              />
              {isLoading ?
                <button
                  type={"button"}
                  className={"btn btn-outline-dark w-100 mt-2"}
                  disabled
                >
                  <span className={"spinner-border spinner-border-sm"}></span>
                </button>
                :
                <button onClick={sendBlackMessage} className={"btn btn-outline-dark w-100 mt-2"}>
                  Save
                </button>
              }
            </div>
          </div>
          <div className={"d-flex flex-column justify-content-center mt-1"}>
            {messages.blackMessages.map((msg, index) => (
              <div
                key={index}
                className={"d-flex justify-content-between align-items-center w-50 mx-auto border rounded-3 px-3 py-2 mt-2"}
              >
                <div>
                  <h6 className={"m-0"}>{(index + 1) + ". " + msg.message}</h6>
                </div>
                <div>
                  {removeIsLoading ?
                    <button
                      type={"button"}
                      className={"btn border border-0"}
                    >
                        <span className={"spinner-border spinner-border-sm text-danger"}></span>
                    </button>
                    :
                    <button onClick={() => removeBlackMessage(msg.id)} className={"btn btn-outline-danger"}>
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
})

export default BlackBox