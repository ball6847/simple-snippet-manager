import React from 'react';

import './ButtonAddEdit.css';

const ButtonAddEdit = ({ name, state, setstate }) => {
  let btnStyle;
  if (name === 'Add') {
    btnStyle = 'is-link';
  } else {
    btnStyle = 'is-warning';
  }

  return (
    <a className={`ButtonAddEdit button ${ btnStyle }`} onClick={() => setstate(!state)}>
      { state ? 'Cancel' : name }
    </a>
  );
};

export default ButtonAddEdit;
