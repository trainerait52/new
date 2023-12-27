import React from "react";


import { Route,Routes } from "react-router-dom";

import Review from "./Review/Review";
import About from "./About/About";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Login from "./Login/Login"; 
import Signup from "./Signup/Signup";
import Product from "./Product/Product";
import Features from "./Features/Features";
import Product1 from "./Product/Product1";
import Search from "./Search/Search";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";


function App(){




  return(

    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="review" element={<Review/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="features" element={<Features/>}/>
        <Route path="product1" element={<Product1/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="contact" element={<Contact/>}/>

      </Routes>

      <Footer/>
     

    
    </>
  )

  
}

export default App;





