import { BsHouseGearFill } from "react-icons/bs"    
import { RiDashboardFill } from "react-icons/ri"
import { BiSolidMessageDetail } from "react-icons/bi"
import { FaClipboardList } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"
import { IoMdArrowDropdown } from "react-icons/io"
import React, { useState, useRef, useEffect } from 'react'
const Sidebar = ({sidebarToggle}) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false)  
    const toggleDropdown = () => {
      setIsDropdownVisible(!isDropdownVisible)
    }

  

  return (
    <div className={`transition-all duration-300 transform ${sidebarToggle ? "-translate-x-full" : "translate-x-0"} w-64 bg-whitesmoke fixed h-full px-4 py-2 shadow sm:text-sm`}>
      <div className="my-2 mb-4">
        <h1 className="text-2xl text-black font-bold">Realtor Dashboard</h1>
      </div>
      <hr />
      <ul className="mt-5 text-black font-base items-center justify-center">
        <li className="mb-2 rounded hover:shadow active:bg-sky-100 hover:bg-sky-100 py-2">
          <a href="" className="px-3">
            <RiDashboardFill className="inline-block size-6 mr-2 -mt-2" />
            Dashboard
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-sky-100 py-2">
            <button className="px-3" onClick={toggleDropdown}>
                <BsHouseGearFill className="inline-block size-6 mr-2 -mt-2" />
                Manage Property
                <IoMdArrowDropdown className="inline-block size-6 ml-2 -mt-0.5" />
            </button>
            <ul
                className={`justify-center mt-2 h-auto ${isDropdownVisible ? '' : 'hidden'}`}>
                <li>
                    <a
                    href=""
                    className="block text-sm px-4 py-2 text-gray-800 hover:bg-white"
                    >
                    Add Property
                    </a>
                </li>
                <li>
                    <a
                    href=""
                    className="block text-sm px-4 py-2 text-gray-800 hover:bg-white"
                    >
                    Delete Property
                    </a>
                </li>
                <li>
                    <a
                    href=""
                    className="block text-sm px-4 py-2 text-gray-800 hover:bg-white"
                    >
                    Update Property
                    </a>
                </li>
            </ul>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-sky-100 py-2">
          <a href="" className="px-3">
            <FaClipboardList className="inline-block size-6 mr-2 -mt-2" />
            Property Lists
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-sky-100 py-2">
          <a href="" className="px-3">
            <BiSolidMessageDetail className="inline-block size-6 mr-2 -mt-2" />
            Inbox
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-sky-100 py-2">
          <a href="" className="px-3">
            <IoMdSettings className="inline-block size-6 mr-2 -mt-2" />
            Settings
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Sidebar