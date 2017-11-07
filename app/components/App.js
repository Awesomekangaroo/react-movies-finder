import React from 'react';
import Header from './Header';
import IndexHome from './IndexHome';
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
					<IndexHome />
				</div>
			</div>
		)
	}
}

export default App;