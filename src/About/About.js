import React from 'react'
import './About.css'

function About() {
  return (
    <div>
      <div className='section'>
        <div className='container'>
          <div className='content-section'>
            <div className='title'>
              <h1>About Us</h1>

            </div>
            <div className='content'>
              <h1>DREAMSTIME CAFE</h1>
              <h3>A coffeehouse, coffee shop, or café is an establishment that primarily serves coffee of various types, notably espresso, latte, and cappuccino. Some coffeehouses may serve cold drinks, such as iced coffee and iced tea, as well as other non-caffeinated beverages</h3>
              <div className='button'>
                <a href='features'>EXPLORE US</a>

              </div>

            </div>
            <div className='social'>
              <a href=''><i className='fab fa-facebook-f'></i></a>
              <a href=''><i className='fab fa-twitter'></i></a>
              <a href=''><i className='fab fa-instagram'></i></a>

            </div>

          </div>
          <div className='image-section'>
            <img src='https://www.acouplecooks.com/wp-content/uploads/2021/05/Latte-Art-066.jpg'></img>

          </div>

        </div>

      </div>
      

        

      
    </div>
  )
}

export default About