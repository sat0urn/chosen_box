import {exportFile} from "../http/exportAPI.js";

const Export = () => {

  const exportToExcel = async () => {
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
    }
  }

  return (
    <>
      <div className="container d-flex min-vh-100">
        <div className={"m-auto w-100 text-center"}>
          <button
            id={"download-btn"}
            onClick={exportToExcel}
            className={"btn btn-outline-dark w-50 p-4"}
          >
            EXPORT SURVEY DATA
          </button>
        </div>
      </div>
    </>
  )
}

export default Export