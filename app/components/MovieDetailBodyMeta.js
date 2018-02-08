import React from 'react';

class MovieDetailBodyMeta extends React.Component {
	render() {
		const details = this.props.info;
		return(
			<div className="container">
				<div className="movie-body__meta--container movie-body__information">
					<ul className="movie-body__meta--items">
						<li>
							<div className="movie-body__meta--detail">
								<span>Release Date: </span>
							</div>
							<div className="movie-body__meta--info">
								<span>{details.release_date} ({details.status})</span>
							</div>
						</li>
						<li>
							<div className="movie-body__meta--detail">
								<span>Language: </span>
							</div>
							<div className="movie-body__meta--info">
								<span>{details.original_language === 'en' ? 'English' : details.original_language }</span>
							</div>
						</li>
						<li>
							<div className="movie-body__meta--detail">
								<span>Country of Origin: </span>
							</div>
							<div className="movie-body__meta--info">
								<span>USA</span>
							</div>
						</li>
						<li>
							<div className="movie-body__meta--detail">
								<span>Runtime: </span>
							</div>
							<div className="movie-body__meta--info">
								<span>{details.runtime} mins</span>
							</div>
						</li>
						<li>
							<div className="movie-body__meta--detail">
								<span>Budget: </span>
							</div>
							<div className="movie-body__meta--info">
								<span>{details.budget}</span>
							</div>
						</li>
						<li>
							<div className="movie-body__meta--detail">
								<span>Revenue: </span>
							</div>
							<div className="movie-body__meta--info">
								<span>{details.revenue}</span>
							</div>
						</li>
						<li>
							<div className="movie-body__meta--detail">
								<span>Visit homepage: </span>
							</div>
							<div className="movie-body__meta--info">
								<a className="primary-link" target="_blank" href={details.homepage} title={"Visit homepage of" + details.title}>{details.title}</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default MovieDetailBodyMeta;