import React from 'react';
import './Product.css'

function Product() {
  return (
   <div>
    <body className='product-body'>
      <div className='wrapper'>
        <div className='card-box'>
          <img className='shop' src='data:image/jpeg;base64,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'></img>
          <div className='info'>
          <h1>instant coffee powder</h1>
          <p>100% home made powder, no added sugar </p>
          <a href='product1' className='btn'>buy now</a>
          </div>

        </div>

        <div className='card-box'>
          <img className='shop'  src='data:image/jpeg;base64,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'></img>
          <div className='info'>
          <h1>instant coffee powder</h1>
          <p>100% home made powder,no added sugar</p>
          <a href='product1' className='btn'>buy now</a>
          </div>

        </div>


        <div className='card-box'>
          <img className='shop' src='data:image/jpeg;base64,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'></img>
          <div className='info'>
          <h1>instant coffee powder</h1>
          <p>100% home made powder,no added sugar</p>
          <a href='product1' className='btn'>buy now</a>
          </div>

        </div>

        <div className='card-box'>
          <img className='shop' src='data:image/jpeg;base64,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'></img>
          <div className='info'>
          <h1>instant coffee powder</h1>
          <p>100% home made powder,no added sugar</p>
          <a href='product1' className='btn'>buy now</a>
          </div>

        </div>


        

      </div>

    </body>

   </div>
  )
}

export default Product