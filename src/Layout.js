import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Order from './components/Order/Order';
import About from './components/About/About';
import Career from './components/Career/Career';
import Recommended from './components/Recommended/Recommended';

const Layout = () => {
  //state stores the name of component that needs to be shown
  const [state, setstate] = useState({ which: 'Main' });
  const handleSetState = (r) => {
    setstate({ which: r });
  };

  return (
    <div className="Layout">
      <Header section={handleSetState} />
      {state.which === 'Main' ? <Main section={handleSetState}/> : state.which === 'Order' ? <Order section={handleSetState}/> : state.which === 'About' ? <About section={handleSetState}/> : state.which === 'Career' ? <Career section={handleSetState}/>: state.which === 'Recommended' ? <Recommended section={handleSetState}/> : null}

    </div>
  );
}

export default Layout;