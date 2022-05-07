import React from 'react';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <section className='h-screen'>
            <Navbar />
            <Hero />
        </section>
    );
};

export default Header;