import React from 'react';
import Header from '../Header/Header';

import 'bulma/css/bulma.css';

import './Layout.css';

const Layout = ({ children }) => (
  <div className="Layout">
    <Header />
    <div className="container">
      <div className="columns">{children}</div>
    </div>
  </div>
);

export default Layout;
