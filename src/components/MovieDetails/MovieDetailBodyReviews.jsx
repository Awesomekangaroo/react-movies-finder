import React from 'react'

class MovieDetailBodyReviews extends React.Component {
	constructor() {
		super()
		this.state = {
			button: false
		}
		this.renderMovieReviews = this.renderMovieReviews.bind(this)
		this.toggleShowMore = this.toggleShowMore.bind(this)
	}

	toggleShowMore(key) {
		this.setState(prevState => ({
			['button' + key]: !prevState['button' + key]
		}))
	}

	renderMovieReviews(key) {
		const review = this.props.info.reviews.results
		let button = null
		if (review[key].content.length > 300) {
			button = <button className="movie-review__show-more" onClick={() => this.toggleShowMore(key)}>Show More +</button>
		}
		return(
			<div key={key} className={this.state['button' + key] ? ' movie-detail__review--item active' : 'movie-detail__review--item'}>
				<a href={review[key].url} target="_blank" title="Author's external review">
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

export default MovieDetailBodyReviews