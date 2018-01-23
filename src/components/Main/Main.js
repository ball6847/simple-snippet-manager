import React, { Component } from 'react';

import AddSnippet from '../AddSnippet/AddSnippet';
import ButtonAddEdit from '../ButtonAddEdit/ButtonAddEdit';
import ShowSnippet from '../ShowSnippet/ShowSnippet';

import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { addSnippet: false };
  }

  render() {
    return (
      <div className="Main column">
        <ButtonAddEdit addSnippet={this.state.addSnippet} toggleSnippet={addSnippet => this.setState({ addSnippet })} />

        {this.state.addSnippet ? <AddSnippet /> : <ShowSnippet />}
      </div>
    );
  }
}
export default Main;
