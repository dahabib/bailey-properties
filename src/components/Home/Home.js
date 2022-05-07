import React from 'react';
import Contact from '../Contact/Contact';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Statistics from '../Statistics/Statistics';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Header />
            <Services />
            <Featured />
            <Statistics />
            <Team />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;