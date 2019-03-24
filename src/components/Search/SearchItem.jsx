import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchItem extends PureComponent {
  componentDidMount() {
    const { handleRefLink } = this.props

    handleRefLink && handleRefLink(this.searchItem)
  }

  render() {
    const { item } = this.props
    return (
      <li>
        <Link
          to={{
            pathname: `/movie/${item.id}/${item.title}`,
            state: item
          }}
          innerRef={link => this.searchItem = link}
        >
          <p>{item.title || item.name}</p>
        </Link>
      </li>
    )
  }
}

export default SearchItem