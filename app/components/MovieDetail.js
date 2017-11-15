import React from 'react';
import MovieDetailHead from './MovieDetailHead';
import MovieDetailCast from './MovieDetailCast';
import MovieDetailBodyInfo from './MovieDetailBodyInfo';
import MovieDetailBodyMeta from './MovieDetailBodyMeta';
import MovieDetailBodyTrailers from './MovieDetailBodyTrailers';
import MovieDetailBodyReviews from './MovieDetailBodyReviews';

class MovieDetail extends React.Component {
	render() {
		const { details, index } = this.props.location.state;
		return(
			<div className="container">
				<MovieDetailHead info={details} />
				<MovieDetailCast info={details} />
				<MovieDetailBodyInfo info={details} />
				<MovieDetailBodyMeta info={details} />
				<MovieDetailBodyTrailers info={details} />
				<MovieDetailBodyReviews info={details} />
			</div>
		)
	}
}

export default MovieDetail;