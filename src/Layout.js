import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Order from './components/Order/Order';
import About from './components/About/About';
import Career from './components/Career/Career';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const Layout = () => {
  //state stores the name of component that needs to be shown
  const [state, setstate] = useState('Main');
  const handleSectionChange = (r) => {
    setstate(r);
  };


  return (
    <div className="Layout">
      <Header section={handleSectionChange} />
      <ErrorBoundary>
        {state === 'Main' ? <Main section={handleSectionChange} /> : state === 'Order' ? <Order section={handleSectionChange} /> : state === 'About' ? <About section={handleSectionChange} /> : state === 'Career' ? <Career section={handleSectionChange} /> : null}
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default Layout;