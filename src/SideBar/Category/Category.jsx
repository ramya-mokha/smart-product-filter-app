import React from 'react'
import './Category.css'
import Input from '../../Components/Input'

const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
       <label className="sidebar-label-container">
        <input type="radio" value='' name="test" onChange={handleChange}/>
        <span className='checkmark'></span>All
       </label>
       <Input 
       handleChange={handleChange}
       value="sneakers"
       name="test"
       title="Sneakers"
       />
       <Input 
       handleChange={handleChange}
       value="flats"
       name="test"
       title="Flats"
       />
       <Input 
       handleChange={handleChange}
       value="sandals"
       name="test"
       title="Sandals"
       />
       <Input 
       handleChange={handleChange}
       value="heels"
       name="test"
       title="Heels"
       />
       
      </div>
    </div>
  )
}

export default Category
