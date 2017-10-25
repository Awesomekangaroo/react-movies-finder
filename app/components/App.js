import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Header from './Header';
import MovieIndexFeed from './MovieIndexFeed';
import TVIndexFeed from './TVIndexFeed';
import MovieDetail from './MovieDetail';

class App extends React.Component {
	render() {
		return(
			<div className="react-app">
				<Header />
				<div className="index-container">
					{/*<MovieIndexFeed />
					<TVIndexFeed /> */}
					<MovieDetail />
				</div>
			</div>
		)
	}
}

export default App;