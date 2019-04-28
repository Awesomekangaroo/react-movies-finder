import React, { Component } from 'react'

import MovieDetailHead from './MovieDetailHead'
import MovieDetailCast from './MovieDetailCast'
import MovieDetailBodyInfo from './MovieDetailBodyInfo'
import MovieDetailBodyMeta from './MovieDetailBodyMeta'
import MovieDetailBodyTrailers from './MovieDetailBodyTrailers'
import MovieDetailReviews from './MovieDetailReviews'

import { getSearchResult } from '../../util/search'
import Layout from '../layout/Layout'

class MovieDetail extends Component {
  state = {
    movieInfo: false,
    movieId: null,
  }

  componentDidMount() {
    this.fetchMovieById()
  }

  async fetchMovieById() {
    const movieId = this.props.location.state.id
    const data = await getSearchResult(`https://api.themoviedb.org/3/movie/${movieId}?api_key=`, '&append_to_response=videos,images,credits,releases,reviews')

    this.setState({
      movieInfo: data,
      movieId
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
                <MovieDetailBodyInfo overview={movieInfo.overview} />
                <MovieDetailBodyTrailers
                  videos={movieInfo.videos.results.slice(0, 4)} />
                <MovieDetailReviews reviews={movieInfo.reviews.results} />
              </div>
              <div className="one-third column">
                <aside className="movie-body__meta--container">
                  <MovieDetailBodyMeta
                    status={movieInfo.status}
                    original_language={movieInfo.original_language}
                    runtime={movieInfo.runtime}
                    budget={movieInfo.budget}
                    revenue={movieInfo.revenue}
                    homepage={movieInfo.homepage}
                    releaseDate={movieInfo.release_date}
                    title={movieInfo.title}
                    productionCompanies={movieInfo.production_companies}
                  />
                </aside>
              </div>
            </div>
          </div>
        </Layout>
      )
    )
  }
}

export default MovieDetail