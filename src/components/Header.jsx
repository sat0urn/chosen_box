import {Link} from "react-router-dom";

const Header = () => {

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-secondary">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <span className={"me-auto"}>
              <i className="fa-solid fa-chevron-left"></i>
              <i className="fa-solid fa-chevron-left"></i>
              <i className="fa-solid fa-chevron-left"></i>
              <i className="fa-solid fa-chevron-left"></i>
            </span>
            <i className="fa-solid fa-ellipsis-vertical"></i>
            <ul className="navbar-nav px-5">
              <li className="nav-item">
                <Link to={'/export'} className={"nav-link"}>
                  EXPORT
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/survey'} className="nav-link">
                  SURVEY
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="navbar-brand nav-link mx-2">
                  <span className={"fw-bolder"} style={{textShadow: '1.5px 1.5px gray'}}>
                    TALOS
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/blog'} className={"nav-link"}>
                  BLOGS
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/profile'} className={"nav-link"}>
                  PROFILE&nbsp;
                </Link>
              </li>
            </ul>
            <i className="fa-solid fa-ellipsis-vertical"></i>
            <span className={"ms-auto"}>
              <i className="fa-solid fa-chevron-right"></i>
              <i className="fa-solid fa-chevron-right"></i>
              <i className="fa-solid fa-chevron-right"></i>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header