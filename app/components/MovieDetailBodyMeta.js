import React from 'react';

class MovieDetailBodyMeta extends React.Component {
	render() {
		const details = this.props.info;
		return(
			<div className="container">
				<div className="movie-body__meta--container movie-body__information">
					<ul className="movie-body__meta--items">
						<li>
							<span>Release Date: </span>
							<span>{details.release_date} ({details.status})</span>
						</li>
						<li>
							<span>Language: </span>
							<span>{details.original_language === 'en' ? 'English' : details.original_language }</span>
						</li>
						<li>
							<span>Country of Origin: </span>
							<span>USA</span>
						</li>
						<li>
							<span>Runtime: </span>
							<span>{details.runtime} mins</span>
						</li>
						<li>
							<span>Budget: </span>
							<span>{details.budget}</span>
						</li>
						<li>
							<span>Revenue: </span>
							<span>{details.revenue}</span>
						</li>
						<li className="movie-body__meta--link">
							<span>Visit homepage: </span>
							<a target="_blank" href={details.homepage} title=
							{"Visit homepage of" + details.title}>{details.title}</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default MovieDetailBodyMeta;