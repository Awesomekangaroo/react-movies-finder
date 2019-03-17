import React from 'react'
import PropTypes from 'prop-types'

const PromoBanner = ({
  title,
  message,
  classes,
}) => (
    <div className={classes}>
      {title && (
        <h3>{title}</h3>
      )}
      {message && (
        <p>{message}</p>
      )}
    </div>
  )

PromoBanner.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  classes: PropTypes.string,
}

export default PromoBanner