import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class CarouselContent extends PureComponent {
  render() {
    const { details } = this.props

    return (
      <section className="slide-item__info">
        <Link
          to={{
            pathname: `/movie/${details.id}/${details.title}`,
            state: details
          }}
          className="slide-item__title"
        >
          <h3>{details.title}</h3>
        </Link>
        <div className="slide-item__meta">
          <span className="slide-item__meta--count">{details.vote_average}</span> |
            <span className="slide-item__release">{details.release_date.substr(0, 4)}</span>
        </div>
        <div className="slide-item__caption">
          <p>{details.overview.substr(0, 100)}</p>
        </div>
      </section>
    )
  }
}

export default CarouselContent