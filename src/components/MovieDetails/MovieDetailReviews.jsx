import React, { PureComponent } from 'react'

import MovieDetailReviewItem from './MovieDetailReviewItem'

class MovieDetailReviews extends PureComponent {
  render() {
    const { reviews } = this.props

    return (
      <div className="movie-detail__reviews">
        <h2 className="header__title">Movie Reviews</h2>

        {reviews.map((review, index) =>
          <MovieDetailReviewItem
            key={`review-${index}`}
            url={review.url}
            author={review.author}
            content={review.content}
          />
        )}
      </div>
    )
  }
}

export default MovieDetailReviews