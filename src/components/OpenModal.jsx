import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class OpenModal extends PureComponent {
  componentDidMount() {
    this.closeButton && this.closeButton.focus()
  }

  render() {
    const {
      toggleClose,
      name,
      videoKey
    } = this.props

    return (
      <div className="overlay__backdrop">
        <div 
          className="trailer-modal"
          onKeyDown={e => e.key === 'Escape' && toggleClose()}
        >
          <div className="trailer-modal__header">
            <h3 className="trailer-modal__header--title">{name}</h3>
            <button
              className="trailer-modal__close"
              type="button"
              title="close modal"
              aria-label="close modal"
              onClick={toggleClose}
              ref={button => this.closeButton = button}
            >
              <span>X</span>
            </button>
          </div>
          <div className="trailer-modal__content">
            <iframe
              title={name}
              src={`http://www.youtube.com/embed/${videoKey}`}
              allowFullScreen="allowFullScreen"
              frameBorder="0">
            </iframe>
          </div>
        </div>
      </div>
    )
  }
}

OpenModal.propTypes = {
  toggleClose: PropTypes.func,
  name: PropTypes.string,
  videoKey: PropTypes.string,
}

export default OpenModal