import React from 'react'
import { icons } from 'react-icons/lib'
import './Contact.css'
import {FaLocationArrow} from "react-icons/fa"
import {FaPhoneSquareAlt} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa"

function Contact() {
  return (
    <div>
        <body className='contact-body'>
        <section>
    
    <div class="section-header">
      <div class="contact-container">
        <h2>Contact Us</h2>
        <p>Contact Us. Have a question about your account? Looking for a specific product? Costa Coffee service representatives are available to answer your questions ...</p>
      </div>
    </div>
    
    <div class="contact-container">
      <div class="contact-row">
        
        <div class="contact-info">
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-home"><FaLocationArrow/></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Address</h4>
              <p>4671 Sugar Camp Road,<br/> Owatonna, Minnesota, <br/>55060</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-phone"><FaPhoneSquareAlt/></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Phone</h4>
              <p>571-457-2321</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-envelope"><FaEnvelope/></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Email</h4>
             <p>ntamerrwael@mfano.ga</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div class="input-box">
              <input type="text" required="true" name=""></input>
              <span>Full Name</span>
            </div>
            
            <div class="input-box">
              <input type="email" required="true" name=""></input>
              <span>Email</span>
            </div>
            
            <div class="input-box">
              <textarea required="true" name=""></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div class="input-box">
              <input type="submit" value="Send" name=""></input>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </section>
  </body>
        
    </div>
  )
}

export default Contact