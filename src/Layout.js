import './styles/main.css';
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
      {state.which === 'Main' ? <Main /> : state.which === 'Order' ? <Order /> : state.which === 'About' ? <About /> : state.which === 'Career' ? <Career />: state.which === 'Recommended' ? <Recommended /> : null}

    </div>
  );
}

export default Layout;