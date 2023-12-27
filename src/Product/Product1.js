import React from 'react'
import Quantity from '../Quantity'
import './Product1.css'

function Product1() {
  return (
    <div>
    <div className='container1'>
    <div className='product'>
        <div className='gallery'>
            <img src='https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/275950/breakly-instant-coffee-powder-rich-caramel-flavour-intense-and-smooth-perfect-blend-100-percentage-premium-arabica-40g-glass-jar_1_display_1643627662_c038aade.jpg'></img>

        </div>
        <div className='details'>
            <h1>breakly instant coffee</h1>
            <h2>preferred and unique taste</h2>
            <h3>$150</h3>
            <h3>30% OFF(LIMITED SALE!)</h3>
            <p>#1 best seller in NEWYORK</p>

            
            

            
            
           
            <Quantity/>
            <button className='form1'>Buy now</button>
            <button className='cart'>Add to cart</button>

            </div>

    
            

           

            
            

        </div>

    </div>

    </div>



  )
}

export default Product1