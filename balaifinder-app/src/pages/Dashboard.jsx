import Sidebar from "../components/Sidebar"
import RealtorDashboard from "../components/RealtorDashboard"
import {useState} from 'react'

export default function Dashboard(){
    const [sidebarToggle, setSidebarToggle] = useState(false)
    return(
        <div className="flex">
            <Sidebar sidebarToggle={sidebarToggle} />
            <RealtorDashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
        </div>
    )
}