import React from 'react';

class MovieDetailBodyMeta extends React.Component {
	render() {
		const details = this.props.info;
		return(
			<div className="container">
				<div className="movie-body__meta--container movie-body__information">
					<h3>Details</h3>
					<ul className="movie-body__meta--items">
						<li>
							<span>Release Date: </span>
							<span>{details.release_date}</span>
						</li>
						<li>
							<span>Language: </span>
							<span>{details.original_language}</span>
						</li>
						<li>
							<span>Country of Origin: </span>
							<span>USA</span>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default MovieDetailBodyMeta;