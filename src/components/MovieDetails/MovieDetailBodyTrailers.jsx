import React, { Component } from 'react'

import OpenModal from './../OpenModal'

class MovieDetailBodyTrailers extends Component {
  state = {
    activeModal: null
  }

  toggleClose = () => {
    this.setState(prevState => ({
      activeModal: !prevState.activeModal,
    }))
  }

  render() {
    const { videos } = this.props
    const { activeModal } = this.state

    return (
      <div className="container">
        <section>
          <div className="movie-trailers__container">
            <h3 id="trailerTitle">Trailers</h3>
            <ul className="movie-trailers__carousel" aria-labelledby="trailerTitle">
              {videos.map((item, index) =>
                <li
                  key={`trailer-${index}`}
                  className="movie-trailers__carousel--item"
                >
                  <div
                    role="button"
                    onClick={() => this.setState({ activeModal: item })}
                    onKeyPress={e => {
                      e.preventDefault()
                      if (e.key === 'Enter' || e.key === ' ') this.setState({ activeModal: item })
                    }}
                    tabIndex="0"
                    aria-label={`Open video trailer ${item.name}`}
                  >
                    <img src={`https://i.ytimg.com/vi/${item.key}/sddefault.jpg`} alt={`Trailer: ${item.name}`} />
                  </div>
                </li>
              )}
            </ul>
          </div>

          {activeModal && (
            <OpenModal
              name={activeModal.name}
              videoKey={activeModal.key}
              toggleClose={this.toggleClose}
            />
          )}
        </section>
      </div>
    )
  }
}

export default MovieDetailBodyTrailers