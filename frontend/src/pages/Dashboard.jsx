import Sidebar from "../components/Sidebar"
import RealtorDashboard from "../components/RealtorDashboard"
import {useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
export default function Dashboard(){
    const [sidebarToggle, setSidebarToggle] = useState(false)
    return(
        <div className="flex h-screen">
            <Sidebar sidebarToggle={sidebarToggle} />
            <RealtorDashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
        </div>
    )
}