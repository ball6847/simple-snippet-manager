import React, { Component } from 'react';

import './AddSnippet.css';

class AddSnippet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'javascript',
      title: '',
      snippet: ''
    };

    this.handleLang = this.handleLang.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSnippet = this.handleSnippet.bind(this);
    this.clearSnippet = this.clearSnippet.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLang(event) {
    this.setState({lang: event.target.value});
  }

  handleTitle(event) {
    this.setState({title: event.target.value});
  }

  handleSnippet(event) {
    this.setState({snippet: event.target.value});
  }

  clearSnippet() {
    this.setState({snippet: ''});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return(
      <div className="AddSnippet">
        <h1 className="title">Add Snippet</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="field">
            <div className="control">
              <div className="select">
                <select value={this.state.lang} onChange={this.handleLang}>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="python">Python</option>
                  <option value="node">Node.js</option>
                  <option value="react">React</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Title"
                onChange={this.handleTitle}
                value={this.state.title}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Type your snippet..."
                onChange={this.handleSnippet}
                value={this.state.snippet}
              ></textarea>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-text" onClick={this.clearSnippet}>Clear</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddSnippet;
