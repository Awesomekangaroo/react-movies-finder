import React, { Component } from 'react'

import SearchItem from './SearchItem';
import { getSearchResult } from '../../util/search.js'

class TypeAhead extends Component {
  state = {
    searchResults: false,
    itemRefs: [],
    currentFocus: 0,
  }

  componentWillReceiveProps(nextProps) {
    this.handleSearchQuery(nextProps)
  }

  componentDidMount() {
    this.handleSearchQuery()
  }

  async handleSearchQuery (nextProps) {
    const query = this.props.query || nextProps.query
    const data = await getSearchResult('https://api.themoviedb.org/3/search/multi?api_key=', query, '&query=')

    this.setState({ searchResults: data.results })
  }

  handleRefLink = link => {
    this.setState(prevState => ({
      itemRefs: [...prevState.itemRefs, link]
    }))
  }

  handleKeyNavigation = e => {
    const { currentFocus, itemRefs } = this.state

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      // Check if first item, then rotate to end of list.
      if (currentFocus === 0) {
        this.setState({ currentFocus: itemRefs.length - 1 }, () => {
          itemRefs[itemRefs.length - 1].focus()
        })
      } else {
        this.setState({ currentFocus: currentFocus - 1 }, () => {
          itemRefs[currentFocus - 1].focus()
        })
      }

      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      // Check if last item, then rotate to start of list.
      if (currentFocus === itemRefs.length - 1) {
        this.setState({ currentFocus: 0 }, () => {
          itemRefs[0].focus()
        })
      } else {
        this.setState({ currentFocus: currentFocus + 1 }, () => {
          itemRefs[currentFocus + 1].focus()
        })
      }

      return
    }

    // if (e.key === 'Tab')
  }

  render() {
    const { searchResults } = this.state
    const { query, handleSearchPress } = this.props

    return (
      (searchResults && query.length > 1) && (
        <div className="typeahead-form">
          <h3>Search results: {query}</h3>
          <ul onKeyDown={this.handleKeyNavigation}>
            {searchResults.map((item, index) =>
              <SearchItem
                key={`search-${index}`}
                item={item}
                title={item.title}
                name={item.name}
                id={item.id}
                handleSearchPress={handleSearchPress}
                handleRefLink={this.handleRefLink}
              />
            )}
          </ul>
        </div>
      )
    )
  }
}

export default TypeAhead
