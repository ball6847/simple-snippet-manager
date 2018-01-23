import React, { Component } from 'react';

import FormSnippet from '../FormSnippet/FormSnippet';

import './EditSnippet.css';

class EditSnippet extends Component {
  render() {
    return (
      <div className="EditSnippet">
        <FormSnippet name="Edit Snippet" />
      </div>
    );
  }
}

export default EditSnippet;
