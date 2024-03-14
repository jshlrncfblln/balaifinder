import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {toast} from "react-toastify"
import axios from "axios"

function Matching () {

  const [locationData, setLocationData] = useState([]);
  const [typeData, setTypeData] = useState([]);
  const [priceData, setPriceData] = useState([]);
  
  const loadData = async () => {
    const [locationResponse, typeResponse, priceResponse  ] = await Promise.all([
      axios.get('http://localhost:5000/api/get/option/location'),
      axios.get('http://localhost:5000/api/get/option/type'),
      axios.get('http://localhost:5000/api/get/option/price'),
    ]);
  
    setLocationData(locationResponse.data);
    setTypeData(typeResponse.data);
    setPriceData(priceResponse.data);
  };
  
  useEffect(() => {
    loadData();
  }, []);





    return(
        <div>
            <Navbar />
                <h1>SELECT LOCATION</h1>
                <select name="options" id="option-location" className="rounded-full border-sky-500 border-[3px]">
                  <option value="" hidden>Select Preferred Location</option>
                  {locationData.map((item, index) => (
                    <option key={index} value={item.location}>{item.location}</option>
                  ))}
                </select>
                <h1>SELECT HOUSE TYPE</h1>
                <select name="options" id="option-location" className="rounded-full border-sky-500 border-[3px]">
                  <option value="" hidden>Select Preferred House Type</option>
                  {typeData.map((item, index) => (
                    <option key={index} value={item.type}>{item.type}</option>
                  ))}
                </select>
                <h1>SELECT PRICE</h1>
                <select name="options" id="option-price" className="rounded-full border-sky-500 border-[3px]">
                  <option value="" hidden>Select Price</option>
                  {priceData.map((item, index) => (
                    <option key={index} value={item.price}>{item.price}</option>
                  ))}
                </select>

                <button>SUBMIT</button>

            <Footer />
        </div>
    )
}
export default Matching