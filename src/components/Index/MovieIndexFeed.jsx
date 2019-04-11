import React, { Component } from 'react'
import { getSearchResult } from '../../util/search'

import MovieTile from './MovieTile'

class MovieIndexFeed extends Component {
  state = {
    currentMovies: false
  }

  componentDidMount() {
    this.getCurrentMovies()
  }
  
  async getCurrentMovies () {
    const data = await getSearchResult("https://api.themoviedb.org/3/movie/now_playing?api_key=", "&language=en-US&page=1")

    this.setState({ currentMovies: data.results.slice(0, 10) })
  }

  render() {
    const { currentMovies } = this.state

    return (
      currentMovies && (
        <section>
          <h2 className="index-movie__header">Now Playing</h2>
          <div className="slider-container">
            <ul>
              {currentMovies.map((movie, index) =>
                <MovieTile 
                  key={`movie-${index}-${movie.title}`}
                  title={movie.title}
                  id={movie.id}
                  poster={movie.poster_path}
                  tag={'li'}
                />
              )}
            </ul>
          </div>
        </section>
      )
    )
  }
}

export default MovieIndexFeed