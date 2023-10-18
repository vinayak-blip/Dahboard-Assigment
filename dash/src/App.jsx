import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './pages/Header'
import Home from './pages/Home'

function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = ()=>{
    setOpenSidebarToggle(!openSidebarToggle);
  }
  return (
    <>
      {/* Dasboard */}
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Home/>
      </div>
    </>
  )
}

export default App
