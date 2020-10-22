// src/components/
import React from 'react';

// componentes por defecto
import Footer from '../components/Footer';

//componentes definidos por router
const Layout = ({ children }) => (
  <div className='App'>
    { children }
    <Footer />
  </div>
);
export default Layout;
