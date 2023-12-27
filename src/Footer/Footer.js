import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import './Footer.css'
import { icons } from 'react-icons/lib'
function Footer() {
  return (
    <div>

        <footer class="footer-distributed">

            <div class="footer-right">
                

                <a  href="contact"><i class="fa fa-facebook"><FaFacebookSquare/></i></a>
                <a href="contact"><i class="fa fa-twitter"><FaTwitterSquare/></i></a>
                <a href="contact"><i class="fa fa-linkedin"><FaLinkedin/></i></a>
                <a href="contact"><i class="fa fa-github"><FaGithubSquare/></i></a>
                <a href="contact"><i class="fa fa-instagram"><FaInstagramSquare/></i></a>

            </div>

            <div class="footer-left">

                <p class="footer-links">
                    <a class="link-1" href="/">HOME</a>

                    

                    <a href="about">ABOUT</a>

                    <a href="review">REVIEW</a>

                    <a href="product">COFFEE</a>

                    <a href="login">LOGIN</a>

                    <a href="signup">SIGNUP</a>
                </p>

                <p className='footer-links'><img src='https://freepngimg.com/save/33957-coffee-logo-transparent-background/2147x2400' style={{width:"50px",height:"50px",marginBottom:"-15px"}}></img> <a href='/'>COSTA COFFEE</a> &copy; 1971</p>
            </div>

        </footer>
    </div>
  )
}

export default Footer