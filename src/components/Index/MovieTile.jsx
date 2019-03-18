import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class MovieTile extends PureComponent {
  render() {
    const baseUrl = "https://image.tmdb.org/t/p/w154"
    
    const { title, poster, element, id } = this.props
    const Tag = element ? element : 'li'

    return (
      <Tag className="index-tile__container">
        <Link to={{
          pathname: `/movie/${id}/${title}`,
          state: { id }
        }}>
          <img src={baseUrl + poster} alt={title} />
          <h2 className="index-tile--title">{title}</h2>
        </Link>
      </Tag>
    )
  }
}

MovieTile.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  element: PropTypes.string,
}

MovieTile.defaultProps = {
  element: 'li',
  id: null,
}

export default MovieTile