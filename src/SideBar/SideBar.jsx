import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import './SideBar.css'
import Category from './Category/Category';
import Price from './Price/Price';
import Color from './Colors/Color';

const SideBar = ({handleChange}) => {
  return (
   <>
   <section className="sidebar">
    <div className="logo-container">
        <h1><FaCartShopping style={{ transform: "scaleX(-1)" }}/></h1>
    </div>
    <Category handleChange={handleChange}/>
    <Price handleChange={handleChange}/>
    <Color handleChange={handleChange}/>

   </section>
   </>
  )
}

export default SideBar
