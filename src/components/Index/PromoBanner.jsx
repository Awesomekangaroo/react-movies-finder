import React from 'react'
import PropTypes from 'prop-types'

const PromoBanner = ({
  title,
  message,
  classes,
  link,
}) => (
    <a
      className={classes}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title && (
        <h3>{title}</h3>
      )}
      {message && (
        <p>{message}</p>
      )}
    </a>
  )

PromoBanner.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  classes: PropTypes.string,
  link: PropTypes.string,
}

PromoBanner.defaultProps = {
  link: 'div'
}

export default PromoBanner