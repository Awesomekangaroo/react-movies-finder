import React from 'react';
import { Link } from 'react-router-dom';

class CarouselSlides extends React.Component {
	render() {
		const item = this.props.details;
		const index = this.props.index;
		return(
			<li key={index} className={"carousel-slider__item " + (index === this.props.currentIndex ? 'active' : '')}>
				<picture>
					<source srcSet={`https://image.tmdb.org/t/p/w640${item[index].backdrop_path}`} media="(max-width: 640px)"/>
					<img src={"https://image.tmdb.org/t/p/w1280" + item[index].backdrop_path } alt={item[index].title} className="slide-item__featured--img"/>
				</picture>
				<div className="slide-item__info--container">
					<p className="slide-item__release">{item[index].release_date.substr(0,4)}</p>
					<Link to={ { pathname: `/movie/${item[index].id}/${item[index].title}`, state: item[index]} }>
						<h3 className="slide-item__title">{item[index].title}</h3>
					</Link>
					<div className="slide-item__meta--info">
						<span className="slide-item__meta--count">{item[index].vote_average}</span>
						<span className="slide-item__meta--rating">{item[index].vote_count} votes</span>
					</div>
					<div className="slide-item__caption">
						<p>{item[index].overview}</p>
					</div>
				</div>
			</li>
		)
	}
}

export default CarouselSlides;