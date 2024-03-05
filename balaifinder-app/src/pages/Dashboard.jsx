import SidebarDashboard from "../components/DashboardSidebar"


export default function Dashboard(){
    return(
        <aside class="flex items-center justify-center w-screen h-screen p-10 space-x-6 bg-gray-300">
            <SidebarDashboard/>
        </aside>
    )
}