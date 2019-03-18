import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class CarouselSlide extends Component {
  render() {
    const {
      details,
      index,
      currentIndex,
    } = this.props

    const baseUrl = 'https://image.tmdb.org/t/p/'
    const isActive = index === currentIndex ? 'active' : ''

    return (
      <li className={`carousel-slide__item ${isActive}`}>
        <picture>
          <source
            srcSet={`${baseUrl}w640${details.backdrop_path}`}
            media="(max-width: 640px)"
          />
          <img
            src={`${baseUrl}w1280${details.backdrop_path}`}
            alt={details.title}
            className="slide-item__featured--img"
          />
        </picture>
        <div className="slide-item__info">
          <div className="carousel-slide--backdrop">
            <div className="slide-item__meta">
              <span className="slide-item__release">{details.release_date.substr(0, 4)}</span>
              <span className="slide-item__meta--count">{details.vote_average}</span>
            </div>
            <Link
              to={{
                pathname: `/movie/${details.id}/${details.title}`,
                state: details
              }}
              className="slide-item__title"
            >
              <h3>{details.title}</h3>
            </Link>
            <div className="slide-item__caption">
              <p>{details.overview}</p>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

CarouselSlide.propTypes = {
  details: PropTypes.object,
  index: PropTypes.number,
}

export default CarouselSlide