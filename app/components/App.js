import React from 'react';
import Header from './Header';
import MovieIndexFeed from './MovieIndexFeed';
import TVIndexFeed from './TVIndexFeed';
import MovieDetailHead from './MovieDetailHead';
import MovieDetailCast from './MovieDetailCast';
import MovieDetailBodyInfo from './MovieDetailBodyInfo';
import MovieDetailBodyMeta from './MovieDetailBodyMeta';
import MovieDetailBodyTrailers from './MovieDetailBodyTrailers';

class App extends React.Component {
	render() {
		return(
			<div className="react-app">
				<Header />
				<div className="index-container">
					{/*<MovieIndexFeed />
					<TVIndexFeed /> */}
					<MovieDetailHead />
					<MovieDetailCast />
					<MovieDetailBodyInfo />
					<MovieDetailBodyMeta />
					<MovieDetailBodyTrailers />
				</div>
			</div>
		)
	}
}

export default App;