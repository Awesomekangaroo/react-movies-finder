import React, { Component } from 'react'
import TypeAhead from './TypeAhead'

class HeaderSearch extends Component {
  state = {
    characters: 0,
    query: ''
  }

  setCharacterCount = e => {
    if (e.target.value.length > 1) {
      this.setState({
        characters: e.target.value.length,
        query: e.target.value
      })
      return
    }

    this.setState({
      query: '',
      characters: e.target.value.length
    })
  }

  render() {
    const {characters, query} = this.state

    return (
      <div className="header-search">
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
            placeholder="Search"
            title="Search for a movie"
            onChange={this.setCharacterCount}
          />
        </form>

        {characters > 1 && (
          <TypeAhead query={query} />
        )}
      </div>
    )
  }
}

export default HeaderSearch
