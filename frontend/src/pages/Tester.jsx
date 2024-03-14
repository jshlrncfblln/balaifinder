import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {toast} from "react-toastify"
import axios from "axios"


function Tester() {

  const [data, setData] = useState([])

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get")
    setData(response.data)
  }

  useEffect(() => {
    loadData();
  }, [])



  return (
    <div>
      <section className="bg-gradient-to-b from-white to-blue-400">
        <Navbar />
        <div style={{marginTop: "150px"}}>
        <table className="styled-table">
            <thead>
              <tr>
                <th style={{textAlign: "center"}}>id</th>
                <th style={{textAlign: "center"}}>name</th>
                <th style={{textAlign: "center"}}>type</th>
                <th style={{textAlign: "center"}}>location</th>
                <th style={{textAlign: "center"}}>price</th>
                <th style={{textAlign: "center"}}>Near School</th>
                <th style={{textAlign: "center"}}>Near Church</th>
                <th style={{textAlign: "center"}}>Near Mall</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{index+1}</th>
                      <td>{item.name}</td>
                      <td>{item.type}</td>
                      <td>{item.location}</td>
                      <td>{item.price}</td>
                      <td>{item.isnearschool}</td>
                      <td>{item.isnearchurch}</td>
                      <td>{item.isnearmall}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
          
        <Footer />
      </section>
    </div>
  )
}
export default Tester
