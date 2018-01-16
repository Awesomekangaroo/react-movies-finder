import React from 'react';
import { Link } from 'react-router-dom';

const apiKey = "1ae83ca4d8a91826db50f652ef3e24de";
const upcomingMoviesUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key="+ apiKey + "&language=en-US&page=1";

class UpcomingIndexFeed extends React.Component {
	constructor() {
		super();
		this.state = {
			upcomingMovies: false
		};
		this.renderUpcomingFeed = this.renderUpcomingFeed.bind(this);
	}

	componentDidMount() {
		//Search Latest Movies
		fetch(upcomingMoviesUrl)
		.then(data => data.json())
		.then(data => {
			this.setState({
				upcomingMovies: data.results
			})
		});
	}

	renderUpcomingFeed(key) {
		const details = this.state.upcomingMovies;
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
		if (this.state.upcomingMovies) {
			return(
				<div className="carousel-slider--container">
					<h2 className="index-movie__header">Upcoming</h2>
					{ Object.keys(this.state.upcomingMovies).slice(0,10).map(this.renderUpcomingFeed) }
				</div>
			)
		} return('');
	}
}

export default UpcomingIndexFeed;