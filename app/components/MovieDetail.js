import React from 'react';
import MovieDetailHead from './MovieDetailHead';
import MovieDetailCast from './MovieDetailCast';
import MovieDetailBodyInfo from './MovieDetailBodyInfo';
import MovieDetailBodyMeta from './MovieDetailBodyMeta';
import MovieDetailBodyTrailers from './MovieDetailBodyTrailers';
import MovieDetailBodyReviews from './MovieDetailBodyReviews';

class MovieDetail extends React.Component {
	render() {
		const { details, index } = this.props;
		return(
			<div className="container">
				<MovieDetailHead />
				<MovieDetailCast />
				<MovieDetailBodyInfo />
				<MovieDetailBodyMeta />
				<MovieDetailBodyTrailers />
				<MovieDetailBodyReviews />
			</div>
		)
	}
}

export default MovieDetail;