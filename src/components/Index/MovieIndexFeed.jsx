import React, { Component } from 'react'

import MovieTile from './MovieTile'

class MovieIndexFeed extends Component {
  state = {
    currentMovies: false
  }

  componentDidMount() {
    const apiKey = "1ae83ca4d8a91826db50f652ef3e24de"
    const currentMoviesUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + apiKey + "&language=en-US&page=1"

    fetch(currentMoviesUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          currentMovies: data.results.slice(0, 10)
        })
      })
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

export default MovieIndexFeed