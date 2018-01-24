import React from 'react';
import DetailHeader from './DetailHeader';
import MovieDetailHead from './MovieDetailHead';
import MovieDetailCast from './MovieDetailCast';
import MovieDetailBodyInfo from './MovieDetailBodyInfo';
import MovieDetailBodyMeta from './MovieDetailBodyMeta';
import MovieDetailBodyTrailers from './MovieDetailBodyTrailers';
import MovieDetailBodyReviews from './MovieDetailBodyReviews';
import Footer from './Footer';
import { getMovieQueryID } from '../helpers.js';

const apiKey = "1ae83ca4d8a91826db50f652ef3e24de";

class MovieDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movieInfo: false,
			inLocalStorage: ''
		}
	}

	componentWillMount() {
		// Check if movieId is on local storage before AJAX call
		const number = getMovieQueryID();
		const localStorageMovie = localStorage.getItem(`movieId-${number}`);
		if (localStorageMovie) {
			this.setState({
				movieInfo: JSON.parse(localStorageMovie),
				movieIDNumber: number
			});
		} else {
			this.setState({
				inLocalStorage: false
			});
		}
	}

	componentDidMount() {
		// Perform AJAX calls here if not in localStorage
		if (this.state.inLocalStorage === false) {
			const movieId = this.props.location.state.id;
			const getMovieDetails = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + apiKey + "&append_to_response=videos,images,credits,releases,reviews";

			// Get movie details on AJAX call
			fetch(getMovieDetails)
			.then(data => data.json())
			.then(data => {
				this.setState({
					movieInfo: data,
					movieIDNumber: data.id
				})
			});
		}
	}

	componentDidUpdate() {
		const movieId = this.props.location.state.id;
		// Add movieId to localStorage to preserve state on reload
		localStorage.setItem(`movieId-${movieId}`, JSON.stringify(this.state.movieInfo));
	}

	componentWillUnmount() {
		// Remove local storage object
		localStorage.removeItem(this.state.movieIDNumber);
	}

	render() {
		const details = this.state.movieInfo;
		// Conditional rendering of components until API request complete.
		if (this.state.movieInfo != false) {
			return(
				<div className="container">
					<DetailHeader />
					<MovieDetailHead info={details} />
					<MovieDetailCast profile={details.credits} />
					<MovieDetailBodyInfo info={details} />
					<MovieDetailBodyMeta info={details} />
					<MovieDetailBodyTrailers videos={details.videos} /> 
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