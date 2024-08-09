const Pagination = (
  {
    pages,
    currentPage,
    setCurrentPage
  }
) => {
  return (
    <>
      {pages > 1 &&
        <>
          <nav className={"mx-auto"}>
            <ul className={"pagination"}>
              {currentPage !== 0 &&
                <li className={"page-item"}>
                  <button className={"btn btn-outline-light rounded-3 me-3"}
                          onClick={() => setCurrentPage(currentPage - 1)}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                </li>
              }
              {Array.from(new Array(pages), (el, index) => (
                <li key={index} className={"page-item"}>
                  <button type={"button"}
                          className={`btn ${(currentPage === index) ? 'btn-light' : 'btn-outline-light'} rounded-3 me-2`}
                          onClick={() => setCurrentPage(index)}
                          disabled={currentPage === index}>
                    {index + 1}
                  </button>
                </li>
              ))}
              {currentPage !== (pages - 1) &&
                <li className={"page-item"}>
                  <button className={"btn btn-outline-light rounded-3 ms-2"}
                          onClick={() => setCurrentPage(currentPage + 1)}>
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </li>
              }
            </ul>
          </nav>
        </>
      }
    </>
  )
}

export default Pagination