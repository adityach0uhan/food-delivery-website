import React from 'react'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
      <div>   <Carousel /> </div>
      <div className='Cards-container'> <Card/> </div>
      
      

    </div>
  )
}

export default Home