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
			movieVideos: false,
			movieCast: false
		}
	}

	componentDidMount() {

		const movieId = this.props.location.state.details.id;
		const getMovieTrailers = "https://api.themoviedb.org/3/movie/" + movieId + "/videos?api_key=" + apiKey;
		const getMovieCast = "https://api.themoviedb.org/3/movie/" + movieId + "/credits?api_key=" + apiKey;
		
		// Add movie detail info for videos, reviews, similar movies

		//Search movie videos
		fetch(getMovieTrailers)
		.then(data => data.json())
		.then(data => {
			this.setState({
				movieVideos: data.results
			})
		});

		//Search movie cast credits
		fetch(getMovieCast)
		.then(data => data.json())
		.then(data => {
			this.setState({
				movieCast: data.cast
			})
		});

	}

	render() {
		const details = this.props.location.state.details;
		return(
			<div className="container">
				<MovieDetailHead info={details} />

				{
					this.state.movieCast != false ?
						<MovieDetailCast
							info={details}
							profile={this.state.movieCast}
						/>
						: false
				}

				<MovieDetailBodyInfo info={details} />
				<MovieDetailBodyMeta info={details} />

				{ // Conditional rendering of trailers
					this.state.movieVideos != false ?
						<div className="container">
							<section>
								<div id="trailers" className="movie-trailers__container">
									<h3>Trailers</h3>
									<div className="movie-trailers__carousel">
										<MovieDetailBodyTrailers 
											info={details} 
											videos={this.state.movieVideos}
										/> 
									</div>
								</div>
							</section>
						</div>
					: false
				}

				<MovieDetailBodyReviews info={details} />
			</div>
		)
	}
}

export default MovieDetail;