import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class CarouselDot extends PureComponent {
  render() {
    const {
      index,
      slideLength,
      handleDots,
      currentIndex,
    } = this.props

    const isActive = index === currentIndex ? 'active' : ''

    return (
      <li>
        <button
          className={isActive}
          type="button"
          title={`Slide ${index + 1} of ${slideLength}`}
          aria-label={`Slide ${index + 1} of ${slideLength}`}
          onClick={() => handleDots(index)}
        ></button>
      </li>
    )
  }
}

CarouselDot.propTypes = {
  index: PropTypes.number,
  slideLength: PropTypes.number
}

export default CarouselDot