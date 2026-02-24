
import './index.css'
import { useState } from 'react'
import Navigation from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import SideBar from './SideBar/SideBar'
import data from './db/data'
import Card from './Components/Card'

const App = () => {
  const products=data;
  const [selectedCategory,setSelectedCategory]=useState(null);
  const [query,setQuery]=useState("");
  const handleInputChange=event=>{
  setQuery(event.target.value);
}

const filteredItems = products.filter(product =>
  product.title.toLowerCase().includes(query.toLowerCase())
);

const handleChange=event=>{
  setSelectedCategory(event.target.value);
}

const handleClick=event=>{
  setSelectedCategory(event.target.value)
}
function filteredData(products,selected,query){
  let filteredProducts=products;
  //filtering based on input
  if(query){
    filteredProducts=filteredItems
  }
  //filtering based on selected
  if(selected){
    filteredProducts=filteredProducts.filter(({category,color,company, newPrice,title})=> category===selected || color===selected ||company===selected || Number(newPrice)===Number(selected)||title==selected)
  }
  return filteredProducts.map(({img,title,star,reviews,prevPrice, newPrice})=>(
    <Card key={Math.random()}
    img={img}
    title={title}
    star={star}
    reviews={reviews}
     newPrice={ newPrice}
    prevPrice={prevPrice}
    />
  ))
}
const result=filteredData(products,selectedCategory,query);
return(
   <>
   <SideBar handleChange={handleChange}/>
    <Navigation value={query} handleInputChange={handleInputChange}></Navigation>
    <Recommended handleClick={handleClick}></Recommended>
    <Products result={result}></Products>
   </>

    
  )
}

export default App

