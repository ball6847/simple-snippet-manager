import React, { Component } from 'react';

import Button from '../Button/Button';
import ShowSnippet from '../ShowSnippet/ShowSnippet';
import AddSnippet from '../AddSnippet/AddSnippet';

import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { addSnippet: false };
  }

  render() {
    return (
      <div className="Main column">
        <Button addSnippet={this.state.addSnippet} toggleSnippet={addSnippet => this.setState({ addSnippet })} />

        {this.state.addSnippet ? <AddSnippet /> : <ShowSnippet />}
      </div>
    );
  }
}
export default Main;
