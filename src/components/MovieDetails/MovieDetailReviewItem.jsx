import React, { Component } from 'react'

class MovieDetailReviewItem extends Component {
  state = {
    isButtonActive: false
  }

  toggleShowMore = () => {
    this.setState(prevState => ({
      isButtonActive : !prevState.isButtonActive
    }))
  }

  render() {
    const {
      url,
      author,
      content,
    } = this.props

    const { isButtonActive } = this.state

    return (
      <div className={`movie-detail__review--item`}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="movie-detail__review--author">Review by <em>{author}</em></h3>
        </a>

        {isButtonActive && (
          <p>{content}</p>
        )}

        <button
          type="button"
          className="movie-review__show-more"
          title="Show more content"
          aria-label="Show more content"
          onClick={() => this.toggleShowMore()}
        >
          {isButtonActive ? 'Show Less' : 'Show More'}
        </button>
      </div>
    )
  }
}

export default MovieDetailReviewItem