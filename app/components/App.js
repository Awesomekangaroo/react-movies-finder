import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Header from './Header';
import MovieIndexFeed from './MovieIndexFeed';
import TVIndexFeed from './TVIndexFeed';
import MovieDetail from './MovieDetail';
import sampleMovies from '../../sample-movies';

class App extends React.Component {
	constructor() {
		super();
		this.loadMovies = this.loadMovies.bind(this);

		// initial state
		this.state = {
			movies: {}
		};
	}

	loadMovies() {
		this.setState({
			movies: sampleMovies
		});
	}

	render() {
		return(
			<div className="react-app">
				<Header />
				<div className="index-container">
					<MovieIndexFeed />
					<TVIndexFeed />
					<MovieDetail loadMovies={this.loadMovies} />
				</div>
			</div>
		)
	}
}

export default App;