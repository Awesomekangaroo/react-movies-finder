import React from 'react';
import MovieIndexFeed from './MovieIndexFeed';

const apiKey = "1ae83ca4d8a91826db50f652ef3e24de";

const currentMoviesUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key="+ apiKey + "&language=en-US&page=1&total_results=2";

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
		fetch(currentMoviesUrl)
		.then(data => data.json())
		.then(data => {
			this.setState({
				movies: data.results
			})
		});
	}

	render() {
		return(
			<div>
				<h2 className="index-movie__header">Now Playing</h2>
				{
					Object.keys(this.state.movies).map(key => 
						<MovieIndexFeed 
							index={key}
							key={key}
							details={this.state.movies[key]}
						/>
					)
				}
			</div>
		)
	}
}

export default IndexHome;