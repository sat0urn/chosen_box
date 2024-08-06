import {exportFile} from "../http/exportAPI.js";
import {useState} from "react";

const Export = () => {

  const [isLoading, setIsLoading] = useState(false);

  const exportToExcel = async () => {
    setIsLoading(true)
    try {
      const data = await exportFile()
      const url = window.URL.createObjectURL(new Blob([data]))
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'export-survey.xlsx');
      document.body.appendChild(link);
      link.click();

      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.error("There was an error downloading export.", e);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="container d-flex min-vh-100">
        <div className={"m-auto w-100 text-center"}>
          {isLoading ?
            <button
              type={"button"}
              className={"btn btn-outline-dark w-50 p-4"}
              disabled
            >
              <span className={"spinner-grow spinner-grow-sm border-2 me-2"} aria-hidden="true"></span>
              <span role={"status"}>Exporting your soul...</span>
            </button>
            :
            <button
              id={"download-btn"}
              onClick={exportToExcel}
              className={"btn btn-outline-dark fw-bold w-50 p-4"}
            >
              EXPORT YOUR SOUL
            </button>
          }
        </div>
      </div>
    </>
  )
}

export default Export