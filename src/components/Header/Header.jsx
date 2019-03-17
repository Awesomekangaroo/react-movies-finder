import React, { Component } from 'react';

import NavMenu from './NavMenu';
import HeaderSearch from '../Search/HeaderSearch'
import { ReactComponent as Logo } from '../../static/images/logo.svg'

class Header extends Component {
  state = {
    isNavOpen: false,
    isSearchOpen: false
  }

  toggleSearch = () => {
    this.setState(prevState => ({
      isSearchOpen: !prevState.isSearchOpen
    }))
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isNavOpen: !prevState.isNavOpen
    }))
  }

  render() {
    return (
      <nav>
        <div className="navigation-container">
          {/* <Logo /> */}
          <div className="search-container">
            <button
              className="search-container__button"
              type="button"
              onClick={this.toggleMenu}
              title="Open search"
              aria-label="Open search"
            >
              Search container
              <i className="fa fa-search" aria-hidden="hidden"></i>
            </button>
          </div>

          <HeaderSearch />

          <div id="mobile-menu">
            <button
              type="button"
              onClick={this.toggleSearch}
              title="open menu"
              aria-label="open menu"
            >
              <i className="fa fa-bars" aria-hidden="hidden"></i>
            </button>
          </div>

          <NavMenu />
        </div>
      </nav>
    )
  }
}

export default Header;