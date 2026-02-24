import React from 'react'
import './Nav.css'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineUserAdd ,AiOutlineShoppingCart} from 'react-icons/ai'
const Nav = ({value,handleInputChange}) => {
  return (
   <nav>
    <div className="nav-container">
        <input 
        type="text" 
        placeholder='Enter your serch shoes'
        className='search-input'
        value={value} onChange={handleInputChange}
        />
    </div>
    <div className="profile-container">
        <a href="#">
        <FiHeart className='nav-icons'/>
        </a>
        <a href="#">
            <AiOutlineShoppingCart className='nav-icons'/>
        </a>
        <a href="#">
            <AiOutlineUserAdd className='nav-icons' />
        </a>
    </div>
   </nav>
  )
}

export default Nav
