import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import '../index.css'
import { useState } from 'react'
export default function Navbar(){
    return(
        <div className="flex bg-white shadow-xl items-center justify-between gap-8 p-3 w-full">
            <div className='flex items-center'>
                <img src="./src/assets/BalaiFinder-Logo-30x30.png" alt="" height={50} width={50} />
                <Link to="/" className="font-bold text-3xl">BalaiFinder</Link>
            </div>
            <ul className="flex gap-4 p-2 items-center">
                <CustomLink to="/" className="p-2 underline-hover relative font-semibold">
                    Home
                    <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-sky-600"></span>
                </CustomLink>

                <CustomLink to="/About" className="underline-hover relative p-2 font-semibold">
                    About Us
                    <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-sky-600"></span>
                </CustomLink>

                <CustomLink to="/Properties" className="underline-hover relative p-2 font-semibold">
                    Properties
                    <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-sky-600"></span>
                </CustomLink>
                <CustomLink to="/Matching" className="underline-hover relative p-2 font-semibold">
                    Match Up
                    <span class="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-sky-600"></span>
                </CustomLink>
                <CustomLink to='/login'>
                    <button className="outline outline-sky-600 hover:bg-sky-800 hover:outline-sky-300 hover:text-white p-2 w-24 rounded-lg font-semibold" >
                    Login
                    </button>
                </CustomLink>
            </ul>
        </div>
    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}