import React from 'react';

import './Button.css';

const Button = ({ addSnippet, toggleSnippet }) => (
  <div className="Button">
    <a className="button is-link" onClick={() => toggleSnippet(!addSnippet)}>
      {addSnippet ? 'Cancel' : 'Add'}
    </a>
    <a className="button is-warning">Edit</a>
  </div>
);

export default Button;
