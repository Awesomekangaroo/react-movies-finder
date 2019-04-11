import React, { Component } from 'react'
import { getSearchResult } from '../../util/search'

import MovieTile from './MovieTile'

class UpcomingIndexFeed extends Component {
  state = {
    upcomingMovies: false
  }

  componentDidMount() {
    this.getUpcomingMovies()
  }

  async getUpcomingMovies() {
    const data = await getSearchResult("https://api.themoviedb.org/3/movie/upcoming?api_key=", "&language=en-US&page=1")

    this.setState({ upcomingMovies: data.results.slice(0, 10) })
  }

  render() {
    const { upcomingMovies } = this.state

    return (
      upcomingMovies && (
        <section>
          <h2 className="index-movie__header">Upcoming</h2>
          <div className="slider-container">
            <ul>
              {upcomingMovies.map((movie, index) =>
                <MovieTile
                  key={`movie-${index}-${movie.title}`}
                  title={movie.title}
                  id={movie.id}
                  poster={movie.poster_path}
                  element={'li'}
                />
              )}
            </ul>
          </div>
        </section>
      )
    )
  }
}

export default UpcomingIndexFeed