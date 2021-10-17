import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Departments from '../Departments/Departments';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Departments></Departments>
            <Contact></Contact>

        </div>
    );
};

export default Home;