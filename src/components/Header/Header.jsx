import React, { Component } from 'react';

import NavMenu from './NavMenu';
import HeaderSearch from '../Search/HeaderSearch'
import { ReactComponent as Logo } from '../../static/images/logo.svg'
import { isBreakpointLarge } from  '../../util/breakpoints'

class Header extends Component {
  state = {
    isNavOpen: false,
    isSearchOpen: false,
    isBreakpointLarge: false,
  }

  componentDidMount() {
    isBreakpointLarge() && this.setState({ isBreakpointLarge: true })
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
    const { isSearchOpen, isNavOpen, isBreakpointLarge } = this.state

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
            <span className="search__icon"></span>
            <small className="is-visually-hidden">search for movies</small>
          </button>

          {isSearchOpen && (
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
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <small className="is-visually-hidden">mobile menu</small>
          </button>

          {(isNavOpen || isBreakpointLarge) && (
            <NavMenu toggleMenu={this.toggleMenu} />
          )}
        </div>
      </nav>
    )
  }
}

export default Header;