import React from 'react';

class MovieDetailBodyMeta extends React.Component {
	render() {
		return(
			<div className="container">
				<div className="movie-body__meta--container">
					<h3>Details</h3>
					<ul className="movie-body__meta--items">
						<li>
							<span>Release Date: </span>
							<span>December 15, 2017</span>
						</li>
						<li>
							<span>Languages: </span>
							<span>English, German</span>
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