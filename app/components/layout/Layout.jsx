import React, { PureComponent, Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import PropTypes from 'prop-types';

class Layout extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
          { this.props.children }
        <Footer />
      </Fragment>
    )
  }
};

Layout.PropTypes = {
  children: propTypes.any
};

export default Layout;