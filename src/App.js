import React, { Component } from 'react';

import Snippets from './containers/Snippets';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Snippet Manager</h1>
        <Snippets />
      </div>
    );
  }
}

export default App;
