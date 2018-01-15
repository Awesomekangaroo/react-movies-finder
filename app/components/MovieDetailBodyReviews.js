import React from 'react';

class MovieDetailBodyReviews extends React.Component {
	constructor() {
		super();
		this.renderMovieReviews = this.renderMovieReviews.bind(this);
		this.viewMoreOpen = this.viewMoreOpen.bind(this);
	}

	viewMoreOpen(key, event) {
		console.log('You clicked view more: ', key);
		console.log(event);
		this.setState(prevState => ({
			['showButton'+key]: !prevState
		}));
	}

	renderMovieReviews(key) {
		const review = this.props.info.reviews.results;
		let button = null;
		if (review[key].content.length > 100) {
			button = <button className="movie-review__show-more" onClick={() => this.viewMoreOpen(key, event)}>Show More +</button>;
		}
		return(
			<div key={key} className="movie-detail__review--item">
				<a href={review[key].url} target="_blank">
					<h3 className="movie-detail__review--author">Review by <em>{review[key].author}</em></h3>
				</a>
				<p>{review[key].content}</p>
				{button}
			</div>
		)
	}

	render() {
		return(
			<div className="movie-detail__reviews">
				<h2>Movie Reviews</h2>
				{Object.keys(this.props.info.reviews.results).map(this.renderMovieReviews)}
			</div>
		)
	}
}

export default MovieDetailBodyReviews;