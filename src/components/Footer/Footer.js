import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook, BsPinterest, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from "../../images/logo/logo.png";
import payment from '../../images/logo/payment-img.png';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer mt-4">

        <div className="footer-top">
          <div className="container">
    
            <div className="footer-brand">
    
              <Link to='#' className="logo">
                <img src={logo} alt="Casmart logo"/>
              </Link>
    
              <p className="footer-text">
              Simply Blended company can serve you healthy fresh fruit juice and a lot of variant juice.
              </p>
    
              <ul className="social-list">
                  <Link to='#' className="social-link">
                      <BsFacebook/>
                  </Link>
                  <Link to='#' className="social-link">
                    <BsTwitter/>
                  </Link>
                  <Link to='#' className="social-link">
                    <AiOutlineInstagram/>
                  </Link>
                  <Link to='#' className="social-link">
                  <BsPinterest/>
                  </Link>
    
              </ul>
    
            </div>
    
            <ul className="footer-list">
    
              <li>
                <p className="footer-list-title">Information</p>
              </li>
    
              <li>
                <Link to='#' className="footer-link">About Company</Link>
              </li>
    
              <li>
                <Link to='#' className="footer-link">Payment Type</Link>
              </li>
    
              <li>
                <Link to='#' className="footer-link">Awards Winning</Link>
              </li>
    
              <li>
                <Link to='#' className="footer-link">World Media Partner</Link>
              </li>
    
              <li>
                <Link to='#' className="footer-link">Become an Agent</Link>
              </li>
    
              <li>
                <Link to='#' className="footer-link">Refund Policy</Link>
              </li>
    
            </ul>
    
            <ul className="footer-list">
    
              <li>
                <p className="footer-list-title">Help & Support</p>
              </li>
    
              <li>
                <Link to='#' className="footer-link">Dealers & Agents</Link>
              </li>
    
              <li>
                <Link to='#' className="footer-link">FAQ Information</Link>
              </li>
    
              <li>
                <Link to='#' className="footer-link">Return Policy</Link>
              </li>
    
              <li>
                <Link to='#' className="footer-link">Shipping & Delivery</Link>
              </li>
    
              <li>
                <Link to='#' className="footer-link">Order Tranking</Link>
              </li>
    
              <li>
                <Link to='#' className="footer-link">List of Shops</Link>
              </li>
    
            </ul>
    
          </div>
        </div>
    
        <div className="footer-bottom">
          <div className="container">
    
            <p className="copyright">
              &copy; 2022 <Link to='#'>durjoy52</Link>. All Rights Reserved
            </p>
    
            <ul className="footer-bottom-list">
    
              <li>
                <Link to='#' className="footer-bottom-link">Privacy Policy</Link>
              </li>
    
              <li>
                <Link to='#' className="footer-bottom-link">Terms & Conditions</Link>
              </li>
    
              <li>
                <Link to='#' className="footer-bottom-link">Sitemap</Link>
              </li>
    
            </ul>
    
            <div className="payment">
              <p className="payment-title">We Support</p>
    
              <img src={payment} alt="Online payment logos" className="payment-img"/>
            </div>
    
          </div>
        </div>
    
      </footer>
    
    );
};

export default Footer;