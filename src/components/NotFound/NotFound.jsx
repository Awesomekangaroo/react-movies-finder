import React from 'react'

import Layout from '../layout/Layout'

class NotFound extends React.Component {
  render() {
    return (
      <Layout>
        <section className="notfound__page">
          <h1>This isn't what you are looking for.</h1>
          <p>Please use the navigation above or search here.</p>
        </section>
      </Layout>
    )
  }
}

export default NotFound