import React from 'react'
import '../styles/Card.css'
const Card = ({data}) => {
    return (
        <div className=''>
            <div className="card p-1 m-2 " style={{ "width": "16.3rem" }}>
                <img src={data.img} className="card-img-top h-48" alt="..." />
                <div className="card-body">
                    <h4 className='font-bold text-center text-l mb-2'>{data.name}</h4>
                    <hr />
                    <p className="card-text text-sm mt-2">{data.description}</p>
                </div>
                <div className='select-btn-parent  flex justify-around pb-2'>
                    <label htmlFor="Quantity" className='m-0 p-0 text-center font-bold'>Qty</label>
                    <select name="Quantity" id="Quantity" className='text-center rounded h-6 w-10 bg-green-400' >
                        <option key={1} value="1"> 1</option>
                        <option key={2} value="2"> 2</option>
                        <option key={3} value="3"> 3</option>
                        <option key={4} value="4"> 4</option>
                        <option key={5} value="5"> 5</option>
                    </select>
                    <select name="Size" id="size" className='w-32 text-center bg-green-400 rounded'>
                        <option key={"half"} value="half">Half {data.options[0].half} Rs</option>
                        <option key={"full"} value="full">Full {data.options[0].full} Rs</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Card