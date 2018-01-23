import React from 'react';

import './ButtonAddEdit.css';

const ButtonAddEdit = ({ addSnippet, toggleSnippet }) => (
  <div className="ButtonAddEdit">
    <a className="button is-link" onClick={() => toggleSnippet(!addSnippet)}>
      {addSnippet ? 'Cancel' : 'Add'}
    </a>
    <a className="button is-warning">Edit</a>
  </div>
);

export default ButtonAddEdit;
