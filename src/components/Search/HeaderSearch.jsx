import React, { Component } from 'react'
import TypeAhead from './TypeAhead'

class HeaderSearch extends Component {
  state = {
    query: '',
    results: null,
  }

  setSearchValue = e => {
    if (e.target.value.length > 1) {
      this.setState({ query: e.target.value })
      return
    }

    this.setState({ query: '' })
  }

  render() {
    const { query } = this.state

    return (
      <section className="header-search">
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

          {query.length > 1 && (
            <TypeAhead query={query} />
          )}
        </form>
      </section>
    )
  }
}

export default HeaderSearch
