import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import ProductViewModal from './ProductViewModal';

import Routers from '../routes/Routers';

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={
                    <div>
                        <Header />
                        <div className='container'>
                            <div className='main'>
                                <Routers />
                            </div>
                        </div>
                        <Footer />
                        <ProductViewModal />
                    </div>
                } />
            </Routes>
        </BrowserRouter>
    );
};

export default Layout;