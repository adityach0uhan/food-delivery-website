import React from 'react'

const FilterPanel = ({ data }) => {
    return (
        <>  
            <select name="Category" id="" className=' bg-green-400 text-center w-1/4 h-full'>
                <option value="All" selected>All </option>
                
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