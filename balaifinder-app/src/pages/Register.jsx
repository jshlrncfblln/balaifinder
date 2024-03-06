import { RiUserAddLine } from "react-icons/ri"
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { useState } from "react"

export default function Register(){
    const [formData, setFormData] = useState ({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: ""
    })
    const [errors, setErrors] = useState ({})
    const validateForm = () =>{
        let valid = true
        const newErrors = []
        if(!formData.first_name){
            newErrors.first_name = "First Name is required"
            valid = false
        }
        if(!formData.last_name){
            newErrors.last_name = "Last Name is required"
            valid = false
        }
        if(!formData.email){
            newErrors.email = "Email is required"
            valid = false
        }
        if(!formData.password){
            newErrors.password = "Password is required"
            valid = false
        }else if(formData.password.trim().length<6){
            newErrors.password = "Password must be at least 6 characters"
            valid = false
        }
        if(formData.confirm_password.trim()!==formData.password.trim()){
            newErrors.confirm_password = "Passwords do not match"
            valid = false
        }
        setErrors(newErrors)
        return valid
    }
    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData({
         ...formData,
            [name]: value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(validateForm()){
            console.log(formData)
        }
    }
    const [showPassword, setShowPassword] = useState (true)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return(
        <div className="py-16 bg-gray-200 h-screen justify-center">
            <div className="flex bg-white rounded-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl shadow-xl shadow-sky-600 relative">
                <Link to="/">
                    <div className="absolute top-0 right-0 m-4 cursor-pointer">
                        <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                </Link>
                <div className="hidded lg:block lg:w-1/2 bg-cover bg-[url('./src/assets/Landing-page-2.jpg')]"></div>
                <form onSubmit={handleSubmit} className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">BalaiFinder</h2>
                    <p className="text-xl text-gray-600 text-center">Create Account</p>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                        <input type="text" value={formData.first_name} onChange={handleChange} name="first_name" className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${errors.first_name ? 'border-red-600' : ''}`} />
                        {errors.first_name && <div className="text-red-600 text-xs">{errors.first_name}</div>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                        <input type="text" name="last_name" className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${errors.last_name ? 'border-red-500' : '' }`} value={formData.last_name} onChange={handleChange} />
                        {errors.last_name && <div className="text-red-600 text-xs">{errors.last_name}</div>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input type="email" name="email" className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${errors.email ? 'border-red-500' : ''}`} value={formData.email} onChange={handleChange} />
                        {errors.email && <div className="text-red-600 text-xs">{errors.email}</div>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Birthdate</label>
                        <input type="date" className="bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Create Password</label>
                        <input name="password" type={showPassword ? 'text' : 'password'} className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${errors.password ? 'border-red-500' : ''}`} value={formData.password} onChange={handleChange} />
                        {errors.password && <div className="text-red-600 text-xs">{errors.password}</div>}
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                        </div>
                        <input name="confirm_password" type={showPassword ? 'text' : 'password'} className={`bg-gray-200 text-gray-700 focus:outline-sky-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${errors.confirm_password ? 'border-red-500' : ''}`} value={formData.confirm_password} onChange={handleChange} />
                        {errors.confirm_password && <div className="text-red-600 text-xs">{errors.confirm_password}</div>}
                        <div className="mt-3">
                            <label className="inline-flex items-center" htmlFor="showPassCheck">
                                <input type="checkbox" id="showPassCheck"
                                checked={showPassword}
                                onChange={togglePasswordVisibility}
                                className="size-4 accent-sky-500 "/>
                                <span className="text-gray-700 text-sm font-bold ml-2">Show password</span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button type="submit" className="bg-sky-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-sky-500">Create Account</button>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                        <span className="border-b border-gray-500 w-1/5 md:w-1/4"></span>
                        <Link to="/Login" >
                            <p className="text-xs text-gray-500 uppercase">or Login</p>
                        </Link>
                        <span className="border-b border-gray-500 w-1/5 md:w-1/4"></span>
                    </div>
                </form>
            </div>
        </div>
    )
}