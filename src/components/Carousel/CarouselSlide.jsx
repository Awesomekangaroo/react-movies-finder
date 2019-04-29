import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CarouselContent from './CarouselContent'

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
      <li
        className={`carousel-slide__item ${isActive}`}
        aria-hidden={index === currentIndex}
      >
        <picture>
          <source
            srcSet={`${baseUrl}w780${details.backdrop_path}`}
            media="(max-width: 640px)"
          />
          <img
            src={`${baseUrl}w1280${details.backdrop_path}`}
            alt={details.title}
            className="slide-item__featured--img"
          />
        </picture>
        <CarouselContent
          details={details}
        />
      </li>
    )
  }
}

CarouselSlide.propTypes = {
  details: PropTypes.object,
  index: PropTypes.number,
}

export default CarouselSlide