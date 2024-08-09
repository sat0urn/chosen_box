import {Link} from "react-router-dom";
import {Blogs} from "../data/blogs.js";
import Pagination from "./commonParts/Pagination.jsx";
import {useMemo, useState} from "react";

const Blog = () => {
  const maxBlogsPerPage = 5;
  const pages = Math.ceil(Blogs.length / maxBlogsPerPage)
  const [currentPage, setCurrentPage] = useState(0)

  const getAllBlogs = useMemo(() => {
    return Blogs.slice(currentPage * maxBlogsPerPage, (currentPage + 1) * maxBlogsPerPage);
  }, [currentPage])

  return (
    <>
      <svg
        className={"position-absolute"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path fill="#E9ECEF" fillOpacity="1" d="M0,288L720,128L1440,288L1440,0L720,0L0,0Z"></path>
      </svg>
      <div className={"bg-black bg-gradient mt-5"}>
        <div className={"container min-vh-100 pt-5"}>
          <div className={"w-75 mx-auto"}>
            {/* Blog starts */}
            {getAllBlogs.map((blog, index) => (
              <div key={index}>
                <div className="row mb-5 g-0">
                  <div className="col-md-4">
                    <Link to={'/blog/' + blog.link}>
                      <img
                        className={"img-fluid border border-light-subtle rounded-3 position-relative"}
                        src={blog.image}
                        style={{width: '250px', boxShadow: '6px 6px #E9ECEF'}}
                        alt="lrb logo"
                      />
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="card h-100 border border-light-subtle bg-dark"
                         style={{boxShadow: '6px 6px #E9ECEF', color: blog.color}}>
                      <div className="card-body p-5">
                        <div className="d-flex h-100 align-items-start flex-column">
                          <div className={""}>
                            <h4 className="fw-bold">
                              <Link to={'/blog/' + blog.link} className={"nav-link"}>
                                {blog.title}
                              </Link>
                            </h4>
                          </div>
                          <div className="mt-3">
                            {blog.description}
                          </div>
                          <div className={"mt-auto ms-auto"}>
                            <span className={"small"}>
                              {blog.date}
                            </span>
                            <span className={"px-3"}>|</span>
                            <span className={"small"}>
                              {blog.tag}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Blog ends */}
            <div className={"d-flex"}>
              <Pagination
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
        {/*<svg*/}
        {/*  xmlns="http://www.w3.org/2000/svg"*/}
        {/*  viewBox="0 0 1440 320"*/}
        {/*>*/}
        {/*  <path fill="#E9ECEF" fillOpacity="1" d="M0,288L720,128L1440,288L1440,320L720,320L0,320Z"></path>*/}
        {/*</svg>*/}
      </div>
    </>
  )
}
export default Blog