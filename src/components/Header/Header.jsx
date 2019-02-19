import React, { Component } from 'react';

import NavMenu from './NavMenu';
import HeaderSearch from '../Search/HeaderSearch'
import { Logo } from '../../static/images/logo.svg'

class Header extends Component {
  state = {
    isNavActiveOn: false,
    isSearchActiveon: false
  }

  render() {
    return (
      <div className="nav-header">
        <div className="navigation-container">
          <Logo />
          <section className="search-container">
            <i className="fa fa-search" aria-hidden="hidden"></i>
          </section>
          <HeaderSearch />
          <nav>
            <div id="mobile-menu" onClick={e => this.addActiveClass(e)} >
              <i className="fa fa-bars" aria-hidden="hidden"></i>
            </div>
            <NavMenu />
          </nav>
        </div>
      </div>
    )
  }
}

export default Header;