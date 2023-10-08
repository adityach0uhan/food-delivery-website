import React from 'react'

const filterPanel = (data) => {
    return (
        <>
        
            <div className='container bg-blue-500 w-screen h-10 mt-2 '>

            <select name="Category" id="">
                    <option value={data.CategoryName}>data.CategoryName</option>
            </select>


        </div>
        </>
    )
}

export default filterPanel