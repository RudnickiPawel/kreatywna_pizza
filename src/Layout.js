import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Order from './components/Order/Order';
import About from './components/About/About';
import Career from './components/Career/Career';
import Recommended from './components/Recommended/Recommended';

const Layout = () => {
  //state stores the name of component that needs to be shown
  const [state, setstate] = useState('Main');
  const handleSectionChange = (r) => {
    setstate(r);
    // throw new Error('ayyy lmao');
    //TODO: Error Boundary
  };


  return (
    <div className="Layout">
      <Header section={handleSectionChange} />
      {state === 'Main' ? <Main section={handleSectionChange} /> : state === 'Order' ? <Order section={handleSectionChange} /> : state === 'About' ? <About section={handleSectionChange} /> : state === 'Career' ? <Career section={handleSectionChange} /> : state === 'Recommended' ? <Recommended section={handleSectionChange} /> : null}
    </div>
  );
}

export default Layout;