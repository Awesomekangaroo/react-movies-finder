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

  componentDidUpdate(nextState) {
    const newSearch = nextState.location.state.id
    if (newSearch) {
      this.fetchMovieById(newSearch)
    }
  }

  async fetchMovieById(id) {
    const movieId = this.props.location.state.id || id
    const data = await getSearchResult(`https://api.themoviedb.org/3/movie/${movieId}?api_key=`, '&append_to_response=videos,images,credits,releases,reviews')

    this.setState({
      movieInfo: data,
      movieId
    })
  }

  render() {
    const {
      movieInfo,
      movieInfo: {
        backdrop_path,
        poster_path,
        vote_average,
        tagline,
        overview,
        runtime,
        title,
        genres,
        credits,
        videos,
        reviews,
        original_language,
        budget,
        revenue,
        homepage,
        status,
        release_date,
        production_companies,
      }
    } = this.state

    return (
      movieInfo && (
        <Layout>
          <div className="movie-detail__container">
            <MovieDetailHead
              backdrop={backdrop_path}
              poster={poster_path}
              average={vote_average}
              tagline={tagline}
              overview={overview}
              runtime={runtime}
              title={title}
              genres={genres}
            />
            <div className="movie-detail__body">
              <div className="two-third column">
                <MovieDetailCast profile={credits} />
                <MovieDetailBodyInfo overview={overview} />
                <MovieDetailBodyTrailers
                  videos={videos.results.slice(0, 4)} />
                {reviews.results.length > 0 && (
                  <MovieDetailReviews reviews={reviews.results} />
                )}
              </div>
              <div className="one-third column">
                <aside className="movie-body__meta--container">
                  <MovieDetailBodyMeta
                    status={status}
                    original_language={original_language}
                    runtime={runtime}
                    budget={budget}
                    revenue={revenue}
                    homepage={homepage}
                    releaseDate={release_date}
                    title={title}
                    productionCompanies={production_companies}
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