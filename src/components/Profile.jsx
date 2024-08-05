import ProfileTopImg from '../assets/profile_top_img.png'
import ProfileMiddleImg from '../assets/profile_middle_img.png'
import ProfileBottomImg from '../assets/profile_bottom_img.png'
import ProfileBG_1 from '../assets/bg_profile.avif'
import ProfileBG_2 from '../assets/bg_profile_2.avif'
import ProfileBG_3 from '../assets/bg_profile_3.avif'
import ProfileBG_4 from '../assets/bg_profile_4.avif'
import {useState} from "react";

const Profile = () => {

  const [bgCount, setBgCount] = useState(0)

  const backgrounds = [
    ProfileBG_1,
    ProfileBG_2,
    ProfileBG_3,
    ProfileBG_4,
  ]

  return (
    <div className="bg-body-tertiary bg-gradient d-flex min-vh-100">
      <div className={"container m-auto w-100"}>
        <div
          onClick={() => setBgCount((prev) => {
            return prev + 1 === 4 ? 0 : prev + 1
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
            className={"align-self-start w-50 mb-4"}
            draggable={"false"}
          >
            <img
              className={"img-fluid selectDisable"}
              style={{boxShadow: '-40px -40px black'}}
              draggable={"false"}
              src={ProfileTopImg}
              alt=""
            />
          </div>
          <div className={"position-relative align-self-center w-50 mb-4"}>
            <div
              className={"position-absolute top-0 bg-transparent d-flex justify-content-center"}
              style={{width: '30px', height: '30px', boxShadow: '-10px -10px black'}}
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
              className={"position-absolute bottom-0 bg-transparent d-flex justify-content-center"}
              style={{width: '30px', height: '30px', boxShadow: '-10px 10px black'}}
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
              className={"position-absolute bottom-0 end-0 bg-transparent d-flex justify-content-center"}
              style={{width: '30px', height: '30px', boxShadow: '10px 10px black'}}
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
              className={"position-absolute top-0 end-0 bg-transparent d-flex justify-content-center"}
              style={{width: '30px', height: '30px', boxShadow: '10px -10px black'}}
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
            className={"align-self-end w-50"}
            draggable={"false"}
          >
            <img
              className={"img-fluid selectDisable"}
              style={{boxShadow: '40px 40px black'}}
              draggable={"false"}
              src={ProfileBottomImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile