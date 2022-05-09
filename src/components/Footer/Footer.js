import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook, BsPinterest, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from "../../images/logo/logo.png";
import payment from '../../images/logo/payment-img.png';
import './Footer.css';
const Footer = () => {
    return (
        <footer class="footer mt-4">

        <div class="footer-top">
          <div class="container">
    
            <div class="footer-brand">
    
              <Link to='#' class="logo">
                <img src={logo} alt="Casmart logo"/>
              </Link>
    
              <p class="footer-text">
              Simply Blended company can serve you healthy fresh fruit juice and a lot of variant juice.
              </p>
    
              <ul class="social-list">
                  <Link to='#' class="social-link">
                      <BsFacebook/>
                  </Link>
                  <Link to='#' class="social-link">
                    <BsTwitter/>
                  </Link>
                  <Link to='#' class="social-link">
                    <AiOutlineInstagram/>
                  </Link>
                  <Link to='#' class="social-link">
                  <BsPinterest/>
                  </Link>
    
              </ul>
    
            </div>
    
            <ul class="footer-list">
    
              <li>
                <p class="footer-list-title">Information</p>
              </li>
    
              <li>
                <Link to='#' class="footer-link">About Company</Link>
              </li>
    
              <li>
                <Link to='#' class="footer-link">Payment Type</Link>
              </li>
    
              <li>
                <Link to='#' class="footer-link">Awards Winning</Link>
              </li>
    
              <li>
                <Link to='#' class="footer-link">World Media Partner</Link>
              </li>
    
              <li>
                <Link to='#' class="footer-link">Become an Agent</Link>
              </li>
    
              <li>
                <Link to='#' class="footer-link">Refund Policy</Link>
              </li>
    
            </ul>
    
            <ul class="footer-list">
    
              <li>
                <p class="footer-list-title">Help & Support</p>
              </li>
    
              <li>
                <Link to='#' class="footer-link">Dealers & Agents</Link>
              </li>
    
              <li>
                <Link to='#' class="footer-link">FAQ Information</Link>
              </li>
    
              <li>
                <Link to='#' class="footer-link">Return Policy</Link>
              </li>
    
              <li>
                <Link to='#' class="footer-link">Shipping & Delivery</Link>
              </li>
    
              <li>
                <Link to='#' class="footer-link">Order Tranking</Link>
              </li>
    
              <li>
                <Link to='#' class="footer-link">List of Shops</Link>
              </li>
    
            </ul>
    
          </div>
        </div>
    
        <div class="footer-bottom">
          <div class="container">
    
            <p class="copyright">
              &copy; 2022 <Link to='#'>durjoy52</Link>. All Rights Reserved
            </p>
    
            <ul class="footer-bottom-list">
    
              <li>
                <Link to='#' class="footer-bottom-link">Privacy Policy</Link>
              </li>
    
              <li>
                <Link to='#' class="footer-bottom-link">Terms & Conditions</Link>
              </li>
    
              <li>
                <Link to='#' class="footer-bottom-link">Sitemap</Link>
              </li>
    
            </ul>
    
            <div class="payment">
              <p class="payment-title">We Support</p>
    
              <img src={payment} alt="Online payment logos" class="payment-img"/>
            </div>
    
          </div>
        </div>
    
      </footer>
    
    );
};

export default Footer;