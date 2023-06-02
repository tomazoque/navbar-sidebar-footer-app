import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import  HomePage  from './HomePage';
import  InventoryPage  from './InventoryPage';
import  InventoryListPage  from './InventoryListPage';
import  AboutPage  from './AboutPage';
import  BillingPage  from './BillingPage';
import  SignInPage  from './SignInPage';
import  SignUpPage  from './SignUpPage';
import  NotFoundPage  from './NotFoundPage';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log('click');
  }
    return (
        <div>
        <Router>
          <Sidebar isOpen={isOpen} toggle={toggle} />   
          <Navbar toggle={toggle} />
          <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/billing" element={<BillingPage />} />
                <Route path="/inventory" element={<InventoryListPage />} />
                <Route path="/inventory/:productId" element={<InventoryPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </Router>
        </div>
    );
}

export default IndexPage;