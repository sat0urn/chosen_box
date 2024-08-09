import ProfileTopImg from '../assets/profile_top_img.png'
import ProfileMiddleImg from '../assets/profile_middle_img.png'
import ProfileBottomImg from '../assets/profile_bottom_img.png'
import ProfileBG_0 from '../assets/bg_profile_0.jpg'
import ProfileBG_1 from '../assets/bg_profile_1.avif'
import ProfileBG_2 from '../assets/bg_profile_2.avif'
import ProfileBG_3 from '../assets/bg_profile_3.avif'
import ProfileBG_4 from '../assets/bg_profile_4.avif'
import {useState} from "react";

const Profile = () => {
  const [isGateOpen, setIsGateOpen] = useState(false)
  const [bgCount, setBgCount] = useState(0)
  const [secretCounter, setSecretCounter] = useState(0)
  const backgrounds = [
    ProfileBG_0,
    ProfileBG_1,
    ProfileBG_2,
    ProfileBG_3,
    ProfileBG_4,
  ]
  const puzzleColors = ['red', 'blue', 'green']
  const [puzzleCounts, setPuzzleCounts] = useState([
    {color_1: ''},
    {color_2: ''},
    {color_3: ''},
    {color_4: ''},
    {color_5: ''},
    {color_6: ''},
    {color_7: ''},
    {color_8: ''},
    {color_9: ''},
  ])

  const checkToContinue = (order) => {
    // const allGates = document.querySelectorAll('#gate-1, #gate-2, #gate-3, #gate-4')
    const firstRG = document.getElementById('gate-' + order).firstChild
    const bgColor = firstRG.classList.item(0)

    console.log(bgColor + " -> " + secretCounter)

    if (bgColor === 'bg-danger') {
      firstRG.classList.replace('bg-danger', 'bg-white')
      setSecretCounter(secretCounter - 1)
      setIsGateOpen(false)
      return
    }

    if (secretCounter < 4) {
      firstRG.classList.replace('bg-white', 'bg-danger')
      setSecretCounter(secretCounter + 1)
    }

    if (secretCounter === 3) {
      const modalButton = document.getElementById("modalOn")
      modalButton.click()
      // Array.from(new Array(allGates.length), (el, index) => {
      //   allGates.item(index).className = ' d-none'
      // })
      setIsGateOpen(true)
    }
  }

  return (
    <>
      <div className="modal fade"
           id="exampleModal"
           tabIndex="-1"
           aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-transparent border-0">
            <div className="modal-header mx-auto">
              <h1 className="modal-title text-white fs-4 fw-bold"
                  style={{textShadow: '1.5px 1.5px black'}}>
                You Know What To Do
              </h1>
            </div>
            <div className="modal-body">
              <form className={"text-white"}>
                <div className="mb-3">
                  <label htmlFor="email"
                         style={{textShadow: '1.5px 1.5px black'}}
                         className="form-label text-danger fs-5 fw-bold w-100 text-center">
                    Secret Key
                  </label>
                  <input type="email"
                         className="form-control"
                         id="email"/>
                </div>
                <div className="row g-0 mb-3">
                  {puzzleCounts.map((pc, index) => (
                    <div key={index} className={"col-4"}>
                      <button className={"btn btn-outline-light w-100"}
                              style={{backgroundColor: pc.color, height: '130px'}}>
                      </button>
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <button id={"modalOn"} type="button" className="btn btn-primary d-none" data-bs-toggle="modal"
              data-bs-target="#exampleModal">
      </button>


      <div className="bg-body-tertiary bg-gradient d-flex min-vh-100">
        <div className={"container m-auto w-100"}>
          <div
            onClick={() => setBgCount((prev) => {
              return prev + 1 === backgrounds.length ? 0 : prev + 1
            })}
            className={"d-flex flex-column border border-1 p-4 bg-white shadow-lg"}
            style={{
              userSelect: "none",
              backgroundImage: `url(${backgrounds[bgCount]})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div
              className={`${isGateOpen ? 'align-self-center' : 'align-self-start'} w-50 mb-4`}
              draggable={"false"}
            >
              <div>
                <img
                  className={"img-fluid selectDisable"}
                  style={{boxShadow: `${isGateOpen ? '' : '-40px -40px black'}`}}
                  draggable={"false"}
                  src={ProfileTopImg}
                  alt=""
                />
              </div>
            </div>
            <div className={"position-relative align-self-center w-50 mb-4"}>
              <div
                id={"gate-1"}
                className={"position-absolute top-0 bg-transparent d-flex justify-content-center"}
                style={{width: '30px', height: '30px', boxShadow: '-10px -10px black'}}
                onClick={() => checkToContinue(1)}
              >
                <div
                  className={"bg-white d-flex justify-content-center border border-2 border-black align-self-center rounded-circle"}
                  style={{width: '20px', height: '20px'}}
                >
                  <div
                    className={"bg-black align-self-center border border-1 border-black align-self-center"}
                    style={{width: '12px', height: '12px'}}
                  >
                  </div>
                </div>
              </div>
              <div
                id={"gate-2"}
                className={"position-absolute bottom-0 bg-transparent d-flex justify-content-center"}
                style={{width: '30px', height: '30px', boxShadow: '-10px 10px black'}}
                onClick={() => checkToContinue(2)}
              >
                <div
                  className={"bg-white d-flex justify-content-center border border-2 border-black align-self-center rounded-circle"}
                  style={{width: '20px', height: '20px'}}
                >
                  <div
                    className={"bg-black align-self-center border border-1 border-black align-self-center"}
                    style={{width: '12px', height: '12px'}}
                  >
                  </div>
                </div>
              </div>
              <img
                className={"img-fluid selectDisable"}
                src={ProfileMiddleImg}
                draggable={"false"}
                alt=""
              />
              <div
                id={"gate-3"}
                className={"position-absolute bottom-0 end-0 bg-transparent d-flex justify-content-center"}
                style={{width: '30px', height: '30px', boxShadow: '10px 10px black'}}
                onClick={() => checkToContinue(3)}
              >
                <div
                  className={"bg-white d-flex justify-content-center border border-2 border-black align-self-center rounded-circle"}
                  style={{width: '20px', height: '20px'}}
                >
                  <div
                    className={"bg-black align-self-center border border-1 border-black align-self-center"}
                    style={{width: '12px', height: '12px'}}
                  >
                  </div>
                </div>
              </div>
              <div
                id={"gate-4"}
                className={"position-absolute top-0 end-0 bg-transparent d-flex justify-content-center"}
                style={{width: '30px', height: '30px', boxShadow: '10px -10px black'}}
                onClick={() => checkToContinue(4)}
              >
                <div
                  className={"bg-white d-flex justify-content-center border border-2 border-black align-self-center rounded-circle"}
                  style={{width: '20px', height: '20px'}}
                >
                  <div
                    className={"bg-black align-self-center border border-1 border-black align-self-center"}
                    style={{width: '12px', height: '12px'}}
                  >
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${isGateOpen ? 'align-self-center' : 'align-self-end'} w-50`}
              draggable={"false"}
            >
              <img
                className={"img-fluid selectDisable"}
                style={{boxShadow: `${isGateOpen ? '' : '40px 40px black'}`}}
                draggable={"false"}
                src={ProfileBottomImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile