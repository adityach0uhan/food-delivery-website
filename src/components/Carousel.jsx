import React from 'react'
import '../styles/Carousel.css'
const Carousel = () => {
    return (
        <div className='carousel-parent'>
            <div className='input-box'>
                <input type="text" className='mx-2' />
                <button type='submit'><i class="fa-solid fa-magnifying-glass fa-shake"></i></button>
            </div>
            
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="images/Biryani.webp" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/pasta.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/Burger.jpg" class="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel