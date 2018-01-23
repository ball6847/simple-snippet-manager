import React, { Component } from 'react';

import FormSnippet from '../FormSnippet/FormSnippet';

import './AddSnippet.css';

class AddSnippet extends Component {
  render() {
    return (
      <div className="AddSnippet">
        <FormSnippet name="Add Snippet" />
      </div>
    );
  }
}

export default AddSnippet;
