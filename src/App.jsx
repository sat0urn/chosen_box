import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import AppRouter from "./components/AppRouter.jsx"

const App = () => {
  return (
    <BrowserRouter basename={"/chosen_box"}>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}

export default App
