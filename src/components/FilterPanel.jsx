import React from 'react'

const FilterPanel = ({ data }) => {
    return (
        <>  

            <select name="Category" id="" className=' text-center w-1/4 h-full'>
                
                {
                    data.map((item, index) => {
                      return  <option key={item._id} className='w-full h-full ' value={item.CategoryName}>{item.CategoryName}</option>
                    })
                }
            </select>



        </>
    )
}

export default FilterPanel