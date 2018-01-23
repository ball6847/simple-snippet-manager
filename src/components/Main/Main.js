import React, { Component } from 'react';

import AddSnippet from '../AddSnippet/AddSnippet';
import ButtonAddEdit from '../ButtonAddEdit/ButtonAddEdit';
import EditSnippet from '../EditSnippet/EditSnippet';
import ShowSnippet from '../ShowSnippet/ShowSnippet';

import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addSnippet: false,
      editSnippet: false,
    };
  }

  render() {
    let addEditSnippet = null;

    if (this.state.addSnippet) {
      addEditSnippet = <AddSnippet />;
    } else {
      addEditSnippet = <EditSnippet />;
    }

    return (
      <div className="Main column">
        <ButtonAddEdit
          name="Add"
          state={this.state.addSnippet}
          setstate={addSnippet => this.setState({ addSnippet })}
        />
        <ButtonAddEdit
          name="Edit"
          state={this.state.editSnippet}
          setstate={editSnippet => this.setState({ editSnippet })}
        />
        {this.state.addSnippet || this.state.editSnippet ? addEditSnippet : <ShowSnippet />}
      </div>
    );
  }
}
export default Main;
