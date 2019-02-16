import React from 'react'

class MovieDetailBodyInfo extends React.Component {
	render() {
		const details = this.props.info
		return(
			<section className="movie-body__information show-mobile">
				<h3>Overview</h3>
				<p>{details.overview}</p>
			</section>
		)
	}
}

export default MovieDetailBodyInfo