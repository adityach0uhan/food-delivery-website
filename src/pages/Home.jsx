import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import '../styles/Home.css'
// import { useState } from 'react'
// import Footer from '../components/Footer'

const Home = () => {
  // const [foodCategory, setfoodCategory] = useState([])
  // const [foodList, setfoodList] = useState([])
  
  
  async function loadBackendData() {
    const backendData = await fetch("http://localhost:5000/api/foodData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(backendData)
  }
  useEffect(() => {
    loadBackendData();
  }, [])

  return (
    <div>
      <div>   <Carousel /> </div>
      <div className='Cards-container'> <Card/> </div>
      {/* <div className='footer-container'><Footer/></div> */}
      

    </div>
  )
}

export default Home