import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Main = () => {

  const base_link = "/chosen_box/"

  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  const navigate = useNavigate()

  return (
    <>
      <svg
        className={"position-absolute top-0"}
        style={{pointerEvents: "none"}}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path fill="#E9ECEF" fillOpacity="1"
              d="M0,256L14.1,229.3C28.2,203,56,149,85,154.7C112.9,160,141,224,169,218.7C197.6,213,226,139,254,138.7C282.4,139,311,213,339,256C367.1,299,395,309,424,272C451.8,235,480,149,508,128C536.5,107,565,149,593,149.3C621.2,149,649,107,678,122.7C705.9,139,734,213,762,218.7C790.6,224,819,160,847,165.3C875.3,171,904,245,932,256C960,267,988,213,1016,186.7C1044.7,160,1073,160,1101,149.3C1129.4,139,1158,117,1186,128C1214.1,139,1242,181,1271,181.3C1298.8,181,1327,139,1355,144C1383.5,149,1412,203,1426,229.3L1440,256L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"></path>
      </svg>

      <div className={"container-fluid vh-100"}>
        <div className={"row row-cols-2 h-100"}>
          <div
            onMouseEnter={() => setIsLeftHovered(true)}
            onMouseLeave={() => setIsLeftHovered(false)}
            className={`bg-black ${isLeftHovered && 'bg-dark bg-opacity-75'}`}
            onClick={() => navigate(base_link + 'black')}
          >
            <div className={"d-flex h-100 justify-content-center align-items-center"}>
              <h1 className={"text-white fw-bold m-0"} style={{textShadow: '2px 3px gray'}}>
                BLACK BOX
              </h1>
            </div>
          </div>
          <div
            onMouseEnter={() => setIsRightHovered(true)}
            onMouseLeave={() => setIsRightHovered(false)}
            className={`bg-white ${isRightHovered && 'bg-dark-subtle'}`}
            onClick={() => navigate(base_link + 'white')}
          >
            <div className={"d-flex h-100 justify-content-center align-items-center"}>
              <h1 className={"text-black fw-bold m-0"} style={{textShadow: '2px 3px gray'}}>
                WHITE BOX
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main