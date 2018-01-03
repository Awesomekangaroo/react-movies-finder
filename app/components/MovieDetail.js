import React from 'react';
// import DetailHeader from './DetailHeader';
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

		// Check if movie ID exists in localStorage and compare values

		// const localStorageMovieID = localStorage.getItem(`movieID-${this.props.location.state.details.id}`);
		// if ( localStorageMovieID != this.props.location.state.details.id ) {
		// 	alert('I dont exist on localStorage');
		// }

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
		// Conditional rendering of components until API request complete.
		if (this.state.movieInfo != false) {
			return(
				<div className="container">
					{/*<DetailHeader />*/}
					<MovieDetailHead info={details} />
					<MovieDetailCast profile={details.credits.cast} />
					<MovieDetailBodyInfo info={details} />
					<MovieDetailBodyMeta info={details} />
					<MovieDetailBodyTrailers
						videos={details.videos}
					/> 
					<MovieDetailBodyReviews info={details} />
				</div>
			)
		} else {
			return('')
		}
	}
}

export default MovieDetail;