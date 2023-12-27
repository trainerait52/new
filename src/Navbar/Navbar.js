import React from 'react';
import { Link } from 'react-router-dom';
import {FaShoppingCart} from "react-icons/fa"
import {FaSearch} from "react-icons/fa"

function Navbar() {
  return (
    <div>
      <div>
        <nav style={{flex:1,alignItems:"center",justifyContent:"center"}}>
          <div style={{
            color:"white",
            display:"flex",
            width:"1500px",
            alignItems:"center",
            background:"bisque",
            marginRight:"auto",
            marginLeft:"auto",
            paddingLeft:10,
            paddingRight:10,
            minHeight:56,


          }}>

          <img src='https://freepngimg.com/save/33957-coffee-logo-transparent-background/2147x2400' style={{width:"50px",height:"50px",marginLeft:"20px"}}></img>
          <ul style={{display:"flex"}}>
            <li style={{listStyleType:"none",padding:"18px",}}><Link to="/" style={{textDecoration:"none" ,color:"black",}}><b>HOME</b></Link></li>
            <li style={{listStyleType:"none",padding:"18px"}}><Link to="about" style={{textDecoration:"none",color:"black",}}><b>ABOUT</b></Link></li>
            <li style={{listStyleType:"none",padding:"18px"}}><Link to="review" style={{textDecoration:"none",color:"black",}}><b>REVIEWS</b></Link></li>
            <li style={{listStyleType:"none",padding:"18px"}}><Link to="search" style={{textDecoration:"none",color:"black"}}><i className="fas fa-star" style={{fontSize:"25px"}}><FaSearch/></i></Link></li>
            

          </ul>
          <ul style={{display:"flex",marginLeft:700}}>
          <li style={{listStyleType:"none",padding:"18px"}}><Link to="login" style={{textDecoration:"none",color:"black",}}><b>LOGIN</b></Link></li>
          <li style={{listStyleType:"none",padding:"18px"}}><Link to="signup" style={{textDecoration:"none",color:"black",}}><b>SIGNUP</b></Link></li>
          <li style={{listStyleType:"none",padding:"18px"}}><Link to="product" style={{textDecoration:"none",color:"black"}}><i className="fas fa-star" style={{fontSize:"25px"}}><FaShoppingCart/></i></Link></li>

          </ul>

          </div>

        </nav>
      </div>





    </div>
  )
}

export default Navbar