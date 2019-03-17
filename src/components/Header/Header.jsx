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

  toggleMenu = e => {
    this.setState(prevState => ({
      isNavOpen: !prevState.isNavOpen
    }))
  }

  render() {
    return (
      <nav>
        <div className="navigation-container">
          <button
            className="search-container__button"
            type="button"
            onClick={this.toggleSearch}
            title="Open search"
            aria-label="Open search"
          >
            Search container
            <i className="fa fa-search" aria-hidden="hidden"></i>
          </button>

          {this.state.isSearchOpen && (
            <HeaderSearch />
          )}

          <Logo
            className="navigation__logo"
            role="img"
          />

          <button
            className="mobile-menu__button"
            type="button"
            onClick={this.toggleMenu}
            title="open menu"
            aria-label="open menu"
          >
            Open menu
            <i className="fa fa-bars" aria-hidden="hidden"></i>
          </button>

          {this.state.isNavOpen && (
            <NavMenu toggleMenu={this.toggleMenu} />
          )}
        </div>
      </nav>
    )
  }
}

export default Header;