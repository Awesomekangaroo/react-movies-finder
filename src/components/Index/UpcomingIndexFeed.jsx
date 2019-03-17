import React, { Component } from 'react'

import MovieTile from './MovieTile'

class UpcomingIndexFeed extends Component {
  state = {
    upcomingMovies: false
  }

  componentDidMount() {
    const apiKey = "1ae83ca4d8a91826db50f652ef3e24de"
    const upcomingMoviesUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=" + apiKey + "&language=en-US&page=1"

    fetch(upcomingMoviesUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({ upcomingMovies: data.results.slice(0, 10) })
      })
  }

  render() {
    const { upcomingMovies } = this.state

    return (
      upcomingMovies && (
        <section>
          <h2 className="index-movie__header">Upcoming</h2>
          <div className="slider-container">
            {upcomingMovies.map((movie, index) =>
              <MovieTile
                key={`movie-${index}-${movie.title}`}
                title={movie.title}
                id={movie.id}
                poster={movie.poster_path}
                element={'li'}
              />
            )}
          </div>
        </section>
      )
    )
  }
}

export default UpcomingIndexFeed