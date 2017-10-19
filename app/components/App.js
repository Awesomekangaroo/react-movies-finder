import React from 'react';
import Header from './Header';
import MovieIndexFeed from './MovieIndexFeed';
import TVIndexFeed from './TVIndexFeed';
import MovieDetailHead from './MovieDetailHead';

class App extends React.Component {
	render() {
		return(
			<div className="react-app">
				<Header />
				<div className="index-container">
					{/*<MovieIndexFeed />
					<TVIndexFeed /> */}
					<MovieDetailHead />
				</div>
			</div>
		)
	}
}

export default App;