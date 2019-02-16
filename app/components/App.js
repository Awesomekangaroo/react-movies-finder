import React, { PureComponent } from 'react';
import Layout from './layout/Layout';
import IndexHome from './Index/IndexHome';

class App extends PureComponent {
  render() {
    return (
      <Layout >
        <IndexHome />
      </Layout>
    )
  }
}

export default App;