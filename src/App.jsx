import AsideBar from "./components/asidebar/AsideBar"
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header"


function App() {

  return (
    <div className="container" >
       <div className="divider">
        <Header />
        <div className="lower-header">
          <AsideBar />
          <Outlet/>
        </div> 
        </div>
       </div>
  )
}

export default App
