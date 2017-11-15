import React from 'react';
import MovieIndexFeed from './MovieIndexFeed';
import TVIndexFeed from './TVIndexFeed';

const apiKey = "";

const moviesUrl = "https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&with_cast=&include_video=true&language=en-US&api_key=" + apiKey;

const tvUrl = "https://api.themoviedb.org/3/discover/tv?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=" + apiKey;

class IndexHome extends React.Component {
	constructor() {
		super();
		this.state ={
			movies: {},
			tv: {}
		};
	}

	componentDidMount() {
		//Search Latest Movies
		fetch(moviesUrl)
		.then(data => data.json())
		.then(data => {
			this.setState({
				movies: data.results
			})
		});

		//Search TV shows
		fetch(tvUrl)
		.then(data => data.json())
		.then(data => {
			this.setState({
				tv: data.results
			})
		})
	}

	render() {
		return(
			<div>
				<h2>Discover Movies</h2>
				{
					Object.keys(this.state.movies).map(key => <MovieIndexFeed index={key} key={key} details={this.state.movies[key]} />)
				}

				{console.log(this.state.movies)}
				{console.log(this.state.tv)}
				<TVIndexFeed />
			</div>
		)
	}
}

export default IndexHome;