import React from 'react'
import './Home.css'
import {FaShoppingCart} from "react-icons/fa"

function Home() {
  return (
    <div>
      <div className='home' style={{backgroundImage:`url("https://wallpaperaccess.com/full/1076693.jpg")`}}>
        <h1 className='title-1'>Good <span>Coffee</span> will always <br></br>find the Audience</h1>
        <p className='home-p'>we provide a variety of best and unique coffees</p>
        <div className='home-shop'>
          <a href='product'>Shop Now <i className="fas fa-star"><FaShoppingCart/></i></a>

        </div>
       
      
      

      </div>
    </div>
  )
}

export default Home