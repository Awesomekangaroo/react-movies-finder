import React from 'react';
import { Link } from 'react-router-dom';

class CarouselSlides extends React.Component {
	render() {
		const { details, index } = this.props;
		const baseUrl = 'https://image.tmdb.org/t/p/';
		return(
			<li key={index} className={"carousel-slider__item " + (index === this.props.currentIndex ? 'active' : '')}>
				<picture>
					<source srcSet={`${baseUrl}w640${details[index].backdrop_path}`} media="(max-width: 640px)"/>
					<img src={`${baseUrl}w1280${details[index].backdrop_path}`} alt={details[index].title} className="slide-item__featured--img"/>
				</picture>
				<div className="slide-item__info">
					<p className="slide-item__release">{details[index].release_date.substr(0,4)}</p>
					<Link to={ { pathname: `/movie/${details[index].id}/${details[index].title}`, state: details[index]} }>
						<h3 className="slide-item__title">{details[index].title}</h3>
					</Link>
					<div className="slide-item__meta--info">
						<span className="slide-item__meta--count">{details[index].vote_average}</span>
						<span className="slide-item__meta--rating">{details[index].vote_count} votes</span>
					</div>
					<div className="slide-item__caption">
						<p>{details[index].overview}</p>
					</div>
				</div>
			</li>
		)
	}
}

export default CarouselSlides;