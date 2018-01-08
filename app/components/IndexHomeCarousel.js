import React from 'react';

class IndexHomeCarousel extends React.Component {

	render() {
		// http://bashooka.com/wp-content/uploads/2016/06/movie-music-website-ui-50.jpg
		return(
			<div className="carousel-slider--container">
				<ul>
					<li className="carousel-slider__item">
						<div className="slide-item__meta--container">
							<p>Release Date (YY)</p>
							<h3 className="slide-item__title">Slide title</h3>
							<div className="slide-item__meta--info">
								<p>Length of movie</p>
								<p className="slide-item__meta--rating">Rating: 4.9</p>
							</div>
						</div>
					</li>
				</ul>
				<div className="carousel-slider--dots">
					<ul>
						<li>
							<span>0</span>
						</li>
					</ul>
				</div>
			</div>
		)
	}

}

export default IndexHomeCarousel;
