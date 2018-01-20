import React from 'react';

import './Sidebar.css';

const Sidebar = (props) => (
  <div className="Sidebar">
    <h3>Category</h3>
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
        <h4>JS (20)</h4>
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
)

export default Sidebar
