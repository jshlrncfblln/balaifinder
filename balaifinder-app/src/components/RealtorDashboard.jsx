import DashboardNavbar from '../components/DashboardNavbar'



const RealtorDashboard = ({sidebarToggle, setSidebarToggle}) =>{
    return(
        <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
            <DashboardNavbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
        </div>
    )
}
export default RealtorDashboard