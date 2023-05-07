import { useState } from 'react'
// import DashboardDrawer from './components/DashboardDrawer'
import DashboardHome from "./components/Dashboard/DashboardHome.jsx"
import ManagementHome from './components/Management/ManagementHome.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{backgroundColor:"#EDF2F6",height:"100vh"}}>
       {/* <DashboardHome/> */}
       <ManagementHome/>
    </div>
  )
}

export default App
