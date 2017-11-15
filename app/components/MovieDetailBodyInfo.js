import React from 'react';

class MovieDetailBodyInfo extends React.Component {
	render() {
		const details = this.props.info;
		return(
			<div className="container">
				<section className="movie-body__information">
					<h3>Overview</h3>
					<p>{details.overview}</p>
				</section>
			</div>
		)
	}
}

export default MovieDetailBodyInfo;