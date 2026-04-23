import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div className='bg-gray-50 pt-6 min-h-screen'>
            <div className=''>
                <header>
                    <Navbar></Navbar>
                </header>
                <main className='max-w-7xl mx-auto'>
                    <Outlet></Outlet>
                </main>
                <footer>
                    <Footer></Footer>
                </footer>
            </div>
           <ToastContainer position='top-center'/>
        </div>
    );
};

export default MainLayout;