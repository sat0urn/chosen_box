import {useParams} from "react-router-dom";
import {Blogs} from "../data/blogs.js";

const BlogPage = () => {

  const {name} = useParams()
  const currentBlog = Blogs.find(({link}) => link === name);

  return (
    <>
      <svg
        className={"position-absolute"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path fill="#E9ECEF" fillOpacity="1" d="M0,288L720,128L1440,288L1440,0L720,0L0,0Z"></path>
      </svg>
      <div className={"bg-black bg-gradient mt-5 py-5"}>
        <div className={"container min-vh-100"}>
          <div className="card w-50 mx-auto p-4 text-white" style={{backgroundColor: '#3A3A3A'}}>
            <div className="card-body">
              <h1 className="card-title fw-bold text-white">
                {currentBlog.title}
              </h1>
              <div className={"mb-3"}>
                <span className={"small opacity-25"}>
                  {currentBlog.date}
                </span>
                <span className={"px-3"}>|</span>
                <span className={"small fst-italic"}>
                  {currentBlog.tag}
                </span>
              </div>
              <div className="card-text">
                {currentBlog.description}
              </div>
              {currentBlog.body.map((b, index) => (
                <div key={index}>
                  <h2 className="card-title my-3 fw-bold">
                    {b.title}
                  </h2>
                  <div className="card-text">
                    {b.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPage