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
							<a target="_blank" href={details.homepage}>Visit homepage</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default MovieDetailBodyMeta;