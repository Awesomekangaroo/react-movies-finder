import React from 'react';
import MovieIndexFeed from './MovieIndexFeed';
import IndexHomeCarousel from './IndexHomeCarousel';
import Footer from './Footer';

class IndexHome extends React.Component {
	render() {
		return(
			<div>
				<IndexHomeCarousel />
				<div className="banner-block index-promo red-gradient">
					<h3>Discover new movies</h3>
					<p>
						<a href="">Find a new favorite.</a>
					</p>
				</div>
				<div className="banner-block index-promo purple-gradient">
					<h3>Find new collections</h3>
					<p>
						<a href="">Find a new favorite.</a>
					</p>
				</div>
				<MovieIndexFeed />
				<Footer />
			</div>
		)
	}
}

export default IndexHome;