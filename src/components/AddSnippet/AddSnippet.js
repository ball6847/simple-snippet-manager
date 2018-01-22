import React, { Component } from 'react';

import './AddSnippet.css';

class AddSnippet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: '',
      snippet: ''
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleTextarea = this.handleTextarea.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearSnippet = this.clearSnippet.bind(this);
  }

  handleSelect(event) {
    this.setState({lang: event.target.value});
  }

  handleTextarea(event) {
    this.setState({snippet: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  clearSnippet() {
    this.setState({snippet: ''});
  }

  render() {
    return(
      <div className="AddSnippet">
        <h1 className="title">Add Snippet</h1>
        <form onSubmit={this.handleSubmit}>

          <div class="field">
            <div class="control">
              <div class="select">
                <select value={this.state.lang} onChange={this.handleSelect}>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="python">Python</option>
                  <option value="node">Node.js</option>
                  <option value="react">React</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Type your snippet..."
                onChange={this.handleTextarea}
                value={this.state.snippet}
              ></textarea>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
            <div class="control">
              <button class="button is-text" onClick={this.clearSnippet}>Clear</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddSnippet;
