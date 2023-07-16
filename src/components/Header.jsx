import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <>
        <div data-aos="zoom-in" data-aos-duration="1000" className='text-center text-yellow-500 py-20'>
            <h1 className='text-4xl font-bold uppercase shadow-2xl'>Food safty in suplly chian using Blockchain</h1>
        </div>
        <Navbar></Navbar>
        </>
    );
};

export default Header;