import React, { PureComponent } from 'react'

import MovieIndexFeed from './MovieIndexFeed'
import UpcomingIndexFeed from './UpcomingIndexFeed'
import IndexHomeCarousel from '../Carousel/IndexHomeCarousel'
import PromoBanner from './PromoBanner'

class IndexHome extends PureComponent {
  render() {
    return (
      <div className="index-container">
        <IndexHomeCarousel />
        <PromoBanner />
        <div className="banner-block index-promo purple-gradient">
          <h3>Find new collections</h3>
          <p>
            <a href="">Find a new series.</a>
          </p>
        </div>
        <MovieIndexFeed />
        <UpcomingIndexFeed />
      </div>
    )
  }
}

export default IndexHome