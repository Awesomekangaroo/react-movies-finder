import React, { PureComponent } from 'react'

class MovieDetailBodyMeta extends PureComponent {
  render() {
    const {
      status,
      original_language,
      runtime,
      budget,
      revenue,
      homepage,
      title,
      releaseDate,
      productionCompanies,
    } = this.props

    return (
      <ul>
        <li className="movie-body__meta--item">
          <div className="movie-body__meta--label">
            <span>Release Date: </span>
          </div>
          <div className="movie-body__meta--info">
            <span>{releaseDate} ({status})</span>
          </div>
        </li>
        <li className="movie-body__meta--item">
          <div className="movie-body__meta--label">
            <span>Language: </span>
          </div>
          <div className="movie-body__meta--info">
            <span>{original_language === 'en' ? 'English' : original_language}</span>
          </div>
        </li>
        <li className="movie-body__meta--item">
          <div className="movie-body__meta--label">
            <span>Country of Origin: </span>
          </div>
          <div className="movie-body__meta--info">
            <span>USA</span>
            <i className="fa fa-flag" aria-label="hidden"></i>
          </div>
        </li>
        <li className="movie-body__meta--item">
          <div className="movie-body__meta--label">
            <span>Runtime: </span>
          </div>
          <div className="movie-body__meta--info">
            <span>{runtime} mins</span>
          </div>
        </li>
        <li className="movie-body__meta--item">
          <div className="movie-body__meta--label">
            <span>Budget: </span>
          </div>
          <div className="movie-body__meta--info">
            <span>{budget}</span>
          </div>
        </li>
        <li className="movie-body__meta--item">
          <div className="movie-body__meta--label">
            <span>Revenue: </span>
          </div>
          <div className="movie-body__meta--info">
            <span>{revenue}</span>
          </div>
        </li>
        <li className="movie-body__meta--item">
          <div className="movie-body__meta--label">
            <span>Visit homepage: </span>
          </div>
          <div className="movie-body__meta--info">
            <a className="primary-link" target="_blank" href={homepage} title={"Visit homepage of" + title}>{title}</a>
          </div>
        </li>
        {productionCompanies && (
          <li className="movie-body__meta--item">
            <div className="movie-body__meta--label">
              <span>Companies: </span>
            </div>
            <div className="movie-body__meta--info">
              {productionCompanies.map(item =>
                <p key={item.id}>{item.name}</p>
              )}
            </div>
          </li>
        )}
      </ul>
    )
  }
}

export default MovieDetailBodyMeta