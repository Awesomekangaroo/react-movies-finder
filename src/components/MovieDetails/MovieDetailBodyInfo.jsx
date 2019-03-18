import React, { PureComponent } from 'react'

class MovieDetailBodyInfo extends PureComponent {
	render() {
		return (
			<section className="movie-body__information show-mobile">
				<h2>Overview</h2>
				<p>{this.props.overview}</p>
			</section>
		)
	}
}

export default MovieDetailBodyInfo