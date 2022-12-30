import React from 'react';
import Counter from '../../components/Counter/Counter';
import FAQ from '../../components/FAQ/FAQ';
import Header from '../../components/Header/Header';
import Project from '../../components/Project/Project';
import SecondSection from '../../components/SecondSection/SecondSection';
import Services from '../../components/Services/Services';
import Testimonials from '../../components/Testomonials/Testimonials';

const Home = () => {
    return (
        <div className='bg-[#F9F8FF]'>
            <Header></Header>
            <SecondSection></SecondSection>
            <Counter></Counter>
            <Services></Services>
            <Project></Project>
            <Testimonials></Testimonials>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;