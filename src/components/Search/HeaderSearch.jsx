import React, { Component } from 'react'
import TypeAhead from './TypeAhead'

class HeaderSearch extends Component {
  state = {
    query: '',
    results: false,
    isOpen: false,
  }

  handleEscapeKey = () => {
    this.setState({ isOpen: false })
  }

  setSearchValue = e => {
    if (e.target.value.trim() !== '') {
      this.setState({
        query: e.target.value,
        isOpen: true,
      })
      return
    }
    this.setState({ query: '', isOpen: false })
  }

  render() {
    const { query, isOpen } = this.state
    const { isBreakpointLarge } = this.props

    return (
      <section
        className={`header-search ${isBreakpointLarge && 'is-expanded'}`}
        onKeyDown={e => e.key === 'Escape' && this.handleEscapeKey()}
      >
        <form className="header-search__form" role="search">
          <label
            htmlFor="movie-search"
            aria-label="search for movie"
            hidden
          >
            Search movies
          </label>
          <input
            className="header-search__input"
            autoFocus
            name="movie-search"
            type="text"
            autoComplete="off"
            placeholder="Search"
            title="Search for a movie"
            onChange={this.setSearchValue}
          />

          {isOpen && (
            <TypeAhead query={query} />
          )}
        </form>
      </section>
    )
  }
}

export default HeaderSearch
