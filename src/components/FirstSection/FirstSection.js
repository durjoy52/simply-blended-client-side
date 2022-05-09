import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import sideImg from '../../images/sideImg.jpg';
import './FirstSection.css';
const FirstSection = () => {
    return (
        <div className='first-section row mb-3'>
            <div className='img-side d-flex justify-content-center align-items-center col-md-4'>
                <img src={sideImg} alt="" />
            </div>
            <div className=' col-md-8'>
                <h3>
                    Why Choose Us
                </h3>
                <p>Everyone loves a cold glass of juice! Apple juice, orange juice, carrot juice – no matter the fruit or vegetable, it’s a refreshing staple in households around the world. What you may not realize, though, is if all the juice you drink is processed and pre-packaged you may be denying your body nutrients that come from fresh juice.</p>
            <div className=" benefit">
                <h4>Benefit</h4>
                <ul>
                    <li><AiOutlineCheck color='palevioletred'/> <span>Healthy</span></li>
                    <li><AiOutlineCheck color='palevioletred'/> <span>Fresh Fruit</span></li>
                    <li><AiOutlineCheck color='palevioletred'/> <span>Pure Sugar</span></li>
                    <li><AiOutlineCheck color='palevioletred'/> <span>Good Taste</span></li>
                    <li><AiOutlineCheck color='palevioletred'/> <span>Packing</span></li>
                    <li><AiOutlineCheck color='palevioletred'/> <span>Low Price</span></li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default FirstSection;