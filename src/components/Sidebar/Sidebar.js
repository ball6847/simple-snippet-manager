import React from 'react';

import './Sidebar.css';

const Sidebar = (props) => (
  <div className="Sidebar column is-one-fifth">
    <div className="content">
      <ul>
        <li>
          <h4>PHP (10)</h4>
          <ul>
            <li>Concat Array</li>
            <li>Splice Array</li>
            <li>Object Unique</li>
          </ul>
        </li>
        <li>
          <h4>JavaScript (20)</h4>
          <ul>
            <li>Concat Array</li>
            <li>Splice Array</li>
            <li>Object Unique</li>
          </ul>
        </li>
        <li>
          <h4>Python (5)</h4>
          <ul>
            <li>Concat Array</li>
            <li>Splice Array</li>
            <li>Object Unique</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
