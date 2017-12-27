import React from 'react';
import MovieDetailHead from './MovieDetailHead';
import MovieDetailCast from './MovieDetailCast';
import MovieDetailBodyInfo from './MovieDetailBodyInfo';
import MovieDetailBodyMeta from './MovieDetailBodyMeta';
import MovieDetailBodyTrailers from './MovieDetailBodyTrailers';
import MovieDetailBodyReviews from './MovieDetailBodyReviews';

const apiKey = "1ae83ca4d8a91826db50f652ef3e24de";


class MovieDetail extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			movieInfo: false
		}
	}

	componentDidMount() {
		const movieId = this.props.location.state.details.id;
		const getMovieDetails = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + apiKey + "&append_to_response=videos,images,credits,releases";

		// Get movie details on AJAX call
		fetch(getMovieDetails)
		.then(data => data.json())
		.then(data => {
			this.setState({
				movieInfo: data
			})
		});
	}

	render() {
		const details = this.state.movieInfo;
		return(
			<div className="container">
				<MovieDetailHead info={details} />
				{
					this.state.movieInfo != false ?
						<MovieDetailCast profile={details.credits.cast} />
					: false
				}

				<MovieDetailBodyInfo info={details} />
				<MovieDetailBodyMeta info={details} />

				{ // Conditional rendering of trailers
					this.state.movieInfo != false ?
						<MovieDetailBodyTrailers
							videos={details.videos}
						/> 
					: false
				}

				<MovieDetailBodyReviews info={details} />
			</div>
		)
	}
}

export default MovieDetail;