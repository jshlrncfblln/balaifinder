import {FaHome} from 'react-icons/fa'



export default function Sidebar(){
    return(
        <div className="w-64 bg-gray-400 fixed h-full px-4 py-2">
            <div className='my-2 mb-4'>
                <h1 className="text-2xl text-black font-bold">Realtor Dashboard</h1>
            </div>
            <hr />
            <ul className='mt-5 text-black font-bold'>
                <li className='mb-2 rounded hover:shadow hover:bg-sky-500 py-2'>
                    <a href="" className='px-3'>
                        <FaHome className='inline-block size-6 mr-2 -mt-2'></FaHome>
                        Dashboard
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-sky-500 py-2'>
                    <a href="" className='px-3'>
                        <FaHome className='inline-block size-6 mr-2 -mt-2'></FaHome>
                        Dashboard
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-sky-500 py-2'>
                    <a href="" className='px-3'>
                        <FaHome className='inline-block size-6 mr-2 -mt-2'></FaHome>
                        Dashboard
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-sky-500 py-2'>
                    <a href="" className='px-3'>
                        <FaHome className='inline-block size-6 mr-2 -mt-2'></FaHome>
                        Dashboard
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-sky-500 py-2'>
                    <a href="" className='px-3'>
                        <FaHome className='inline-block size-6 mr-2 -mt-2'></FaHome>
                        Dashboard
                    </a>
                </li>
            </ul>
        </div>
    )
}