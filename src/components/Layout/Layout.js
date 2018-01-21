import React from 'react';

import 'bulma/css/bulma.css';

import './Layout.css';

const Layout = ({ children }) => (
  <div className="Layout">
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Snippet Manager</h1>
          <h2 className="subtitle">Useful snippet for everyone</h2>
        </div>
        <br/>
        <div className="container">
          <a className="button is-link">Add</a>
          {' '}
          <a className="button is-warning">Edit</a>
        </div>
      </div>
    </section>
    <div className="container">
      <div className="columns">{children}</div>
    </div>
  </div>
);

export default Layout;
