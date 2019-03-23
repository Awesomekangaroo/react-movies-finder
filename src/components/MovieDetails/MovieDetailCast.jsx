import React, { PureComponent } from 'react'

class MovieDetailCast extends PureComponent {
  render() {
    const profileBasePath = "https://image.tmdb.org/t/p/w92"
    const { cast } = this.props.profile

    return (
      <div className="container movie-detail__cast--container">
        <h2 className="header__title">Top Cast</h2>
        <ol className="carousel-cast__container">
          {
            cast.slice(0, 8).map(member => 
              <li key={`Tile-${member.name}`} className="carousel-cast__item">
                <img
                  src={profileBasePath + member.profile_path}
                  alt={'Profile of ' + member.name}
                />
                <div className="carousel-cast__info--names">
                  <p>{member.name}</p>
                  <span>{member.character}</span>
                </div>
              </li>
            )
          }
        </ol>
      </div>
    )
  }
}

export default MovieDetailCast