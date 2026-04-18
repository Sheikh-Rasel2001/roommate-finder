import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';

const MainLayout = () => {
    return (
        <div className='bg-gray-50 py-6 min-h-screen'>
            <div className=''>
                <header>
                    <Navbar></Navbar>
                </header>
                <main className='max-w-7xl mx-auto'>
                    <Outlet></Outlet>
                </main>
                <footer>

                </footer>
            </div>
        </div>
    );
};

export default MainLayout;