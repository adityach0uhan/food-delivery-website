import React from 'react'
import '../styles/Carousel.css'
const Carousel = () => {
    return (
        <div className='carousel-parent'>
            <div className='input-box '>
                <form action="">
                    <input type="text" className='p-2' />
                    <button type='submit'><i className="fa-solid fa-magnifying-glass fa-shake"></i></button>
                </form>
            </div>

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/953710/pexels-photo-953710.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="d-block w-100 h-5/6" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/1797171/pexels-photo-1797171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 h-5/6" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 h-5/6" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel