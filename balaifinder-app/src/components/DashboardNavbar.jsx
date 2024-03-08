import { MdOutlineMenu } from "react-icons/md"
import { IoIosSearch } from "react-icons/io"
import { FaRegUser } from "react-icons/fa6"
import Content from "./DashboardContent"

const DashboardNavbar = ({sidebarToggle, setSidebarToggle}) => {
    return(
        <div>
            <nav className="bg-white px-4 py-3 flex justify-between shadow">
                <div className="flex items-center text-xl">
                    <MdOutlineMenu className="text-gray-800 me-4 cursor-pointer" onClick={() => setSidebarToggle(!sidebarToggle)}/>
                    <span className="text-gray-800 font-semibold">Dashboard</span>
                </div>
                <div className="flex items-center gap-x-5">
                    <div className="relative md:w-65">
                        <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
                            <button className="p-1 focus:outline-none text-white md:text-black"><IoIosSearch className="text-black"  /></button>
                        </span>
                        <input type="text" placeholder="Search Here ..." className="w-full px-4 py-1 pl-12 rounded shadow outline outline-1 outline-sky-700 hidden md:block"></input>
                    </div>
                    <div className="relative">
                        <button className="group">
                            <FaRegUser className="size-6 mt-1"/>
                            <div className="z-10 mt-4 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0">
                                <ul className="py-2 px-3 text-base text-gray-800 ">
                                    <li  className="hover:bg-sky-100 rounded-lg m-2"><a href="">Profile</a></li>
                                    <li className="hover:bg-red-100 rounded-lg m-2"><a href="">Logout</a></li>
                                </ul>
                            </div>  
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default DashboardNavbar