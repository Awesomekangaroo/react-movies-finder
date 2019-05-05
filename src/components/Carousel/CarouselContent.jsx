import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class CarouselContent extends PureComponent {
  render() {
    const {
      details,
      details: {
        id,
        title,
        vote_average,
        release_date,
        overview,
      }
    } = this.props

    return (
      <section className="slide-item__info">
        <Link
          to={{
            pathname: `/movie/${id}/${title}`,
            state: details
          }}
          className="slide-item__title"
        >
          <h3>{title}</h3>
        </Link>
        <div className="slide-item__meta">
          <span className="slide-item__meta--count">{vote_average}</span> |
            <span className="slide-item__release">{release_date.substr(0, 4)}</span>
        </div>
        <div className="slide-item__caption">
          <p>{overview.substr(0, 100)}</p>
        </div>
      </section>
    )
  }
}

CarouselContent.propTypes = {
    details: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    overview: PropTypes.string,
  })
}

export default CarouselContent