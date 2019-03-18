import React, { Component } from 'react'

import MovieDetailHead from './MovieDetailHead'
import MovieDetailCast from './MovieDetailCast'
import MovieDetailBodyInfo from './MovieDetailBodyInfo'
import MovieDetailBodyMeta from './MovieDetailBodyMeta'
import MovieDetailBodyTrailers from './MovieDetailBodyTrailers'
import MovieDetailBodyReviews from './MovieDetailBodyReviews'

import Layout from '../layout/Layout'

class MovieDetail extends Component {
  state = {
    movieInfo: false,
    movieId: null,
  }

  componentDidMount() {
    this.fetchMovieById()
  }

  fetchMovieById = () => {
    const apiKey = "1ae83ca4d8a91826db50f652ef3e24de"
    const movieId = this.props.location.state.id
    const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos,images,credits,releases,reviews`

    fetch(movieUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          movieInfo: data,
          movieId
        })
      })
  }

  render() {
    const { movieInfo } = this.state

    return (
      movieInfo && (
        <Layout>
          <div className="movie-detail__container">
            <MovieDetailHead
              backdrop={movieInfo.backdrop_path}
              poster={movieInfo.poster_path}
              average={movieInfo.vote_average}
              tagline={movieInfo.tagline}
              overview={movieInfo.overview}
              runtime={movieInfo.runtime}
              title={movieInfo.title}
              genres={movieInfo.genres}
            />
            <div className="movie-detail__body">
              <div className="two-third column">
                <MovieDetailCast profile={movieInfo.credits} />
                <MovieDetailBodyInfo info={movieInfo} />
                <MovieDetailBodyTrailers videos={movieInfo.videos} />
                <MovieDetailBodyReviews info={movieInfo} />
              </div>
              <div className="one-third column">
                <MovieDetailBodyMeta info={movieInfo} />
              </div>
            </div>
          </div>
        </Layout>
      )
    )
  }
}

export default MovieDetail