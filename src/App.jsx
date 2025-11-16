import AsideBar from "./components/asidebar/AsideBar"
import Header from "./components/header/Header"
import Main from "./components/main/Main"

function App() {

  return (
    <div className="container" >
       <div className="divider">
        <Header />
        <div className="lower-header">
          <AsideBar />
          <Main />
        </div>
       </div>
    </div>
  )
}

export default App
