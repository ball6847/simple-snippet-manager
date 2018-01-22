import React, { Component } from 'react';
import Select from 'react-select';

import ListSnippet from '../ListSnippet/ListSnippet';

import 'react-select/dist/react-select.css';
import './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedOption) {
    this.setState({ selectedOption });
  }

  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <div className="Sidebar column is-one-fifth">
        <Select
          name="form-field-name"
          value={value}
          onChange={this.handleChange}
          options={[
            { value: 'js', label: 'JavaScript' },
            { value: 'react', label: 'React' },
            { value: 'node', label: 'Node.js' },
            { value: 'php', label: 'PHP' }
          ]}
        />
        {this.state.selectedOption ? <ListSnippet /> : null}
      </div>
    );
  }
}

export default Sidebar;
