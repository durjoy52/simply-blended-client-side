import React from 'react';
import FirstSection from '../../FirstSection/FirstSection';
import Items from '../../Items/Items';
import SecondSection from '../../SecondSection/SecondSection';
import Banner from '../Banner/Banner';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container">
            <Items></Items>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
            </div>
        </div>
    );
};

export default Home;