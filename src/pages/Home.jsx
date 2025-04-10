import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Activities from '../components/Activities';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <Activities />
            <Testimonials />
            <CallToAction />
        </>
    );
};

export default Home;