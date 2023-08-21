import React from 'react'
import '../styles/Card.css'

const Card = () => {
    return (
        <div>
            <div className="card" style={{ "width": "18rem" }}>
                <img src="/images/pasta.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='select-btn-parent'>
                    <select name="Quantity" id="Quantity">
                        <option key={1} value="1">1</option>
                        <option key={2} value="2">2</option>
                        <option key={3} value="3">3</option>
                        <option key={4} value="4">4</option>
                        <option key={5} value="5">5</option>
                    </select>
                    <select name="Size" id="size">
                        <option key={"half"} value="half"> Half</option>
                        <option key={"full"} value="full">Full</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Card