import React from 'react';
import { Link } from 'react-router-dom';

const apiKey = "1ae83ca4d8a91826db50f652ef3e24de";
const currentMoviesUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key="+ apiKey + "&language=en-US&page=1";

class MovieIndexFeed extends React.Component {
	constructor() {
		super();
		this.state = {
			nowMovies: false
		};
		this.renderMovieFeed = this.renderMovieFeed.bind(this);
	}

	componentDidMount() {
		//Search Latest Movies
		fetch(currentMoviesUrl)
		.then(data => data.json())
		.then(data => {
			this.setState({
				nowMovies: data.results
			})
		});
	}

	renderMovieFeed(key) {
		const details = this.state.nowMovies;
		const baseUrl = "https://image.tmdb.org/t/p/w154";
		return(
			<article key={key} className="index-tile__container">
				<Link to={ {pathname: `/movie/${details[key].id}/${details[key].title}`, state: details[key]} }>
					<img src={baseUrl + details[key].poster_path} alt={details[key].title}/>
					<h2 className="index-tile--title">{details[key].title}</h2>
				</Link>
			</article>
		)
	}
	
	render() {
		if (this.state.nowMovies) {
			return(
				<div className="slider-container">
					<h2 className="index-movie__header">Now Playing</h2>
					{ Object.keys(this.state.nowMovies).slice(0,10).map(this.renderMovieFeed) }
				</div>
			)
		} return('');
	}
}

export default MovieIndexFeed;