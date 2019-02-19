import React, { Component } from 'react'

import TypeAhead from './TypeAhead'

class HeaderSearch extends Component {
  state = {
    characters: 0,
    query: ''
  }

  getCharacterCount = e => {
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
    return (
      <section id="header-search" className="active">
        <form className="header-search__form" role="search">
          <label htmlFor="movie-search" aria-label="search for movie"></label>
          <input className="header-search__input" name="movie-search" type="text" placeholder="Search" title="Search for a movie" onChange={this.getCharacterCount} />
        </form>

        {this.state.characters > 1 ?
          <TypeAhead query={this.state.query} /> : null}
      </section>
    )
  }
}

export default HeaderSearch
