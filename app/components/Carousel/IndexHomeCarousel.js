import React from 'react';
import CarouselSlides from '../Carousel/CarouselSlides';

const apiKey = "1ae83ca4d8a91826db50f652ef3e24de";
const popularMoviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key="+ apiKey + "&append_to_response=genre,cast";

class IndexHomeCarousel extends React.Component {
	constructor() {
		super();
		this.state = {
			popularMovies: false,
			activeIndex: 0
		}
		this.goToSlide = this.goToSlide.bind(this);
		this.renderSlideDots = this.renderSlideDots.bind(this);
		this.goToPrevSlide = this.goToPrevSlide.bind(this);
		this.goToNextSlide = this.goToNextSlide.bind(this);
		this.timer = this.timer.bind(this);
	}

	componentDidMount() {
		// Get popular movies for carousel
		fetch(popularMoviesUrl)
		.then(data => data.json())
		.then(data => {
			this.setState({
				popularMovies: data.results
			})
		});

		// Invoke carousel slider timer
		setInterval(this.timer, 8500);
	}

	componentWillUnmount() {
		// Clear the interval timer on component leave
		clearInterval(this.timer);
	}
	
	timer() {
		// If index greater than slide count reset to 0
		let index = this.state.activeIndex;
		index >= 4 ? this.setState({ activeIndex: 0 }) : this.setState({ activeIndex: ++index });
	}


	goToPrevSlide(e) {
		e.preventDefault();
		// Only go to previous slide if not the min slide count
		let index = this.state.activeIndex;

		index <= 0 ? '' : --index;

		this.setState({
			activeIndex: index
		});
	}

	goToNextSlide(e) {
		e.preventDefault();
		// Only go to next slide if not the max slide count
		let index = this.state.activeIndex;

		index >= 4 ? '' : ++index;

		this.setState({
			activeIndex: index
		});
	}

	goToSlide(index) {
		this.setState({
			activeIndex: index
		});
	}

	renderSlideDots(index) {
		// Render slider dot count to container
		return(
			<li key={index} className={index === this.state.activeIndex ? 'active' : ''} onClick={e => this.goToSlide(index)}></li>
		)
	}

	render() {
		if (this.state.popularMovies) {
			return(
				<div className="carousel-slider--container">
					<a href="#" className="carousel__arrow arrow-left" onClick={e => this.goToPrevSlide(e)}>
						<span className="fa fa-2x fa-angle-left" aria-label="hidden"></span>
					</a>
					<ul className="carousel-slides">
						{
							Object
								.keys(this.state.popularMovies.slice(0,5))
								.map((slide, index) => <CarouselSlides key={index} index={index} currentIndex={this.state.activeIndex} details={this.state.popularMovies.slice(0,5)} />)
						}
					</ul>
					<a href="#" className="carousel__arrow arrow-right" onClick={e => this.goToNextSlide(e)}>
						<span className="fa fa-2x fa-angle-right" aria-label="hidden"></span>
					</a>
					<ul className="carousel-slider--dots">
						{Object.keys(this.state.popularMovies.slice(0,5)).map((slide, index) => this.renderSlideDots(index))}
					</ul>
				</div>
			)
		} return('');
	}

}

export default IndexHomeCarousel;
