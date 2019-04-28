import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchItem extends PureComponent {
  componentDidMount() {
    const { handleRefLink } = this.props

    this.searchItem && handleRefLink(this.searchItem)
  }

  render() {
    const { title, id, name } = this.props

    return (
      <li>
        <Link
          to={{
            pathname: `/movie/${id}/${title}`,
            state: {id}
          }}
          innerRef={link => this.searchItem = link}
        >
          {title || name}
        </Link>
      </li>
    )
  }
}

SearchItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  handleRefLink: PropTypes.func,
}

export default SearchItem