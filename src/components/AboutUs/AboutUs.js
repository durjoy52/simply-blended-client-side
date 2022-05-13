import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import about from '../../images/undraw_Contact_us_re_4qqt.png';
import './AboutUs.css';
const AboutUs = () => {
    return (
        <div className="section">
		<div className="contain">
			<div className="content-section">
				<div className="title">
					<h1>About Us</h1>
				</div>
				<div className="content">
					<h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
					<div className="button">
						<Link to=''>Read More</Link>
					</div>
				</div>
				<div className="social">
					<Link to=''><FaFacebook/></Link>
					<Link to=''><FaInstagramSquare/></Link>
					<Link to=''><FaTwitterSquare/></Link>
					
				</div>
			</div>
			<div className="image-section">
				<img src={about} alt=''/>
			</div>
		</div>
	</div>
    );
};

export default AboutUs;