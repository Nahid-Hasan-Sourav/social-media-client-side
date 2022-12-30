import React from 'react';
import { Outlet } from 'react-router-dom';
import Leftsidebar from '../../Component/LeftSidebar/Leftsidebar';
import Navbar from '../../Component/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar className=''></Navbar>
            <div className='lg:grid grid-cols-6'>
                <div className='lg:block hidden'>
                    <Leftsidebar></Leftsidebar>
                </div>
                <div className='px-3 col-span-4 '>
                    <Outlet>

                    </Outlet>
                </div>
                <div className='lg:block hidden'>
                    <Leftsidebar></Leftsidebar>
                </div>
            </div>
        </div>
    );
};

export default Main;