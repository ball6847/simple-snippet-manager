import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Main/Main';

// import AddSnippet from '../components/AddSnippet/AddSnippet';

class Snippets extends Component {
  render() {
    return (
      <Layout>
        <Sidebar />
        <Main />
      </Layout>
    );
  }
}

export default Snippets;
