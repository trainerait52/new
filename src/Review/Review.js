import React from 'react'
import './Review.css'
import {FaStar} from "react-icons/fa"
import {FaStarHalfAlt} from "react-icons/fa"

function Review() {
  return (
   <body className='review-body'>
    <div>
      
      <div className="rev-section">

<h2 className="title">Our Guests Love Us</h2>
<p className="note">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laboriosam possimus perferendis non error neque.</p>

<div className="reviews">

<div className="review1">
   <div className="head-review">
      <img className='review' src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" width="250px"></img>
   </div>
   <div className="body-review">
      <div className="name-review">Nathan D.</div>
      <div className="place-review">Germany</div>
      <div className="rating">
         <i className="fas fa-star"><FaStar/></i>
         <i className="fas fa-star"><FaStar/></i>
         <i className="fas fa-star"><FaStar/></i>
         <i className="fas fa-star"><FaStar/></i>
         <i className="fas fa-star-half"><FaStarHalfAlt/></i>
      </div>
      <div className="desc-review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.</div>
   </div>
</div>
<div className="review1">
   <div className="head-review">
      <img className='review' src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" width="250px"></img>
   </div>
   <div className="body-review">
      <div className="name-review">Mary Will</div>
      <div className="place-review">Paris</div>
      <div className="rating">
         <i className="fas fa-star"><FaStar/></i>
         <i className="fas fa-star"><FaStar/></i>
         <i className="fas fa-star"><FaStar/></i>
         <i className="fas fa-star"><FaStar/></i>
         <i className="fas fa-star"><FaStar/></i>
      </div>
      <div className="desc-review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.</div>
   </div>
</div>
<div className="review1">
   <div className="head-review">
      <img className='review' src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" width="250px"></img>
   </div>
   <div className="body-review">
      <div className="name-review">Kevin Tuck</div>
      <div className="place-review">New York</div>
      <div className="rating">
         <i className="fas fa-star"><FaStar/></i>
         <i className="fas fa-star"><FaStar/></i>
         <i className="fas fa-star"><FaStar/></i>
         <i className="fas fa-star"><FaStar/></i>
         <i className="fas fa-star-half"><FaStarHalfAlt/></i>
      </div>
      <div className="desc-review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.</div>
   </div>
</div>

</div>

</div>

    </div>
    </body>
  )
}

export default Review