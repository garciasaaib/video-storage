// src/components/
import React from 'react';

// componentes por defecto
import Header from '../components/Header';
import Footer from '../components/Footer';

//componentes definidos por router
const Layout = ({ children }) => (
  <div className='App'>
    <Header />
    { children }
    <Footer />
  </div>
);
export default Layout;
