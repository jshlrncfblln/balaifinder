import DashboardNavbar from '../components/DashboardNavbar'
import Content from './DashboardContent'



const RealtorDashboard = ({sidebarToggle, setSidebarToggle}) =>{
    return(
        <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
            <DashboardNavbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
            <div>
                <Content/>
            </div>
        </div>
    )
}
export default RealtorDashboard