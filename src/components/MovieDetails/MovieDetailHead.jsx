import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class MovieDetailHead extends PureComponent {
  render() {
    const {
      backdrop,
      title,
      poster,
      overview,
      tagline,
      runtime,
      average,
      genres
    } = this.props

    const imageBaseUrl = "https://image.tmdb.org/t/p/"
    const bgImage = { backgroundImage: `url(${imageBaseUrl}w1280${backdrop})` }

    return (
      <section className="container">
        <div className="movie__hero--container" style={bgImage}>
          <img
            className="show-mobile"
            src={`${imageBaseUrl}w1280${backdrop}`}
            alt={`Backdrop of ${title}`}
          />
          <div className="movie__head">
            <div className="movie__head--poster">
              <picture>
                <source srcSet={`${imageBaseUrl}w640${poster}`} media="(min-width: 767px)" />
                <img src={`${imageBaseUrl}w154${poster}`} alt={title} />
              </picture>
            </div>
            <header className="movie__head-top">
              <div className="movie__head--genre">
                <span>{genres[0].name}</span> |
								<span>{runtime} mins</span>
              </div>
              <div className="movie__head--title">
                <h2>{title}</h2>
                <p>{tagline}</p>
              </div>
            </header>
            <div className="movie__head--meta">
              <div className="movie__head--score">
                <div className="btn-score">
                  <span>{average}</span>
                </div>
                <span className="user-score">User Score</span>
              </div>
              <div className="hide-mobile movie__head-overview">
                <p>{overview}</p>
              </div>
            </div>
            <div className="mobile-head__toggle show-mobile">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.google.com/search?q=${title}+showtimes`}>
                TICKETS
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

MovieDetailHead.propTypes = {
  backdrop: PropTypes.string,
  title: PropTypes.string,
  poster: PropTypes.string,
  overview: PropTypes.string,
  tagline: PropTypes.string,
  runtime: PropTypes.number,
  average: PropTypes.number,
  genre: PropTypes.array,
}

export default MovieDetailHead