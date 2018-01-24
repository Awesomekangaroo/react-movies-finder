import React from 'react';
import MovieIndexFeed from './MovieIndexFeed';
import UpcomingIndexFeed from './Index/UpcomingIndexFeed';
import IndexHomeCarousel from './Carousel/IndexHomeCarousel';
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
						<a href="">Find a new series.</a>
					</p>
				</div>
				<MovieIndexFeed />
				<UpcomingIndexFeed />
				<Footer />
			</div>
		)
	}
}

export default IndexHome;