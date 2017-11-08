import React from 'react';
import MovieIndexFeed from './MovieIndexFeed';
import TVIndexFeed from './TVIndexFeed';

class IndexHome extends React.Component {
	render() {
		return(
			<div>
				<MovieIndexFeed />
				<TVIndexFeed />
			</div>
		)
	}
}

export default IndexHome;