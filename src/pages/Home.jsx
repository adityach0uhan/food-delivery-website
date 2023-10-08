import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'
import filterPanel from '../components/filterPanel'
import Card from '../components/Card'
import { useState } from 'react'
// import Footer from '../components/Footer'

const Home = () => {
  const [foodCategory, setfoodCategory] = useState([])
  const [foodList, setfoodList] = useState([])

  async function loadBackendData() {
    const backendData = await fetch("http://localhost:5000/api/foodData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (backendData.ok) {
      const data = await backendData.json();
      setfoodCategory(data.CategoriesOfFood);
      setfoodList(data.listOfFood)
    } else {
      console.error("Failed to fetch data. Status code: " + backendData.status);
    }


  }
  // console.log(foodList[0].name)

  useEffect(() => {
    loadBackendData();
  }, [])

  return (
    <div className='bg-yellow-200'>
      <div> <Carousel /> </div>
      {
        foodCategory.length === 0 ? "" : foodCategory.map((item, index) => {
          return <filterPanel key={item._id} data={item} />
        })
      }
      
      
      <div className='container mx-auto  flex flex-wrap w-screen  mt-6  justify-around'>
        {
          foodList.length === 0 ? "Wait the component is loading " : foodList.map((item, index) => {

            return <Card key={item._id} data={item} />

          })
        }
      </div>




      {/* <div className='footer-container'><Footer/></div> */}


    </div>
  )
}

export default Home