import React from 'react';
import Header from './Header';
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

	componentWillUpdate(nextProps) {
		// Set new props for movieID
		console.log('this is next props: ', nextProps);
		localStorage.setItem(`movieID-${this.props.location.state.details.id}`, nextProps.location.state.details.id)
	}

	render() {
		const details = this.state.movieInfo;
		return(
			<div className="container">
				<Header />
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