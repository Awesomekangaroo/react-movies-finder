import React from 'react';
import DetailHeader from './DetailHeader';
import MovieDetailHead from './MovieDetailHead';
import MovieDetailCast from './MovieDetailCast';
import MovieDetailBodyInfo from './MovieDetailBodyInfo';
import MovieDetailBodyMeta from './MovieDetailBodyMeta';
import MovieDetailBodyTrailers from './MovieDetailBodyTrailers';
import MovieDetailBodyReviews from './MovieDetailBodyReviews';
import Footer from './Footer';

const apiKey = "1ae83ca4d8a91826db50f652ef3e24de";

class MovieDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movieInfo: false
		}
	}

	componentWillMount() {
		// Check if movieId is on local storage before AJAX call
		const localStorageMovie = localStorage.getItem(`movieId-${this.props.location.state.id}`);
		if (localStorageMovie) {
			this.setState({
				movieInfo: localStorageMovie
			});
		}
	}

	componentDidMount() {
		// Perform AJAX calls here
		const movieId = this.props.location.state.id;
		const getMovieDetails = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + apiKey + "&append_to_response=videos,images,credits,releases,reviews";

		// Get movie details on AJAX call
		fetch(getMovieDetails)
		.then(data => data.json())
		.then(data => {
			this.setState({
				movieInfo: data
			})
		});
	}

	componentDidUpdate() {
		const movieId = this.props.location.state.id;
		// Add movieId to localStorage to preserve state on reload
		localStorage.setItem(`movieId-${movieId}`, JSON.stringify(this.state));
	}

	componentWillUnmount() {
		// Remove local storage object
		localStorage.clear();
	}

	render() {
		const details = this.state.movieInfo;
		console.log(details);
		// Conditional rendering of components until API request complete.
		if (this.state.movieInfo != false) {
			return(
				<div className="container">
					<DetailHeader />
					<MovieDetailHead info={details} />
					<MovieDetailCast profile={details.credits.cast} />
					<MovieDetailBodyInfo info={details} />
					<MovieDetailBodyMeta info={details} />
					<MovieDetailBodyTrailers
						videos={details.videos}
					/> 
					<MovieDetailBodyReviews info={details} />
					<Footer />
				</div>
			)
		} else {
			return('')
		}
	}
}

export default MovieDetail;