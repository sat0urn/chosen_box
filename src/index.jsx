import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AuthContext} from "./context/index.js";
import MessageStore from "./store/MessageStore.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext.Provider value={{
    messages: new MessageStore()
  }}>
    <App/>
  </AuthContext.Provider>,
)
