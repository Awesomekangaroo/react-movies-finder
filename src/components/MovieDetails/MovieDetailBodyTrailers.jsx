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
                  <button
                    type="button"
                    onClick={() => this.setState({ activeModal: item })}
                    ref={modal => this.currentModal = modal}
                  >
                    <img src={`https://i.ytimg.com/vi/${item.key}/sddefault.jpg`} alt={`Trailer: ${item.name}`} />
                  </button>
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