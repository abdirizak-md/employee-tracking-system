import AsideBar from "./components/asidebar/AsideBar"
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header"


function App() {

  return (
    // <section className="">
    //   <header><Header/></header>

    //   <section className="w-full flex">
    //     <aside className="w-30%"><AsideBar/></aside>
    //     <main className="w-70%"><Outlet/></main>
    //   </section>

    // </section>



    
    <div className="container" >
       <div className="divider">
        <Header />
        <div className="lower-header">
          <AsideBar />
          <Outlet />
        </div> 
        </div>
       </div>
  )
}

export default App
