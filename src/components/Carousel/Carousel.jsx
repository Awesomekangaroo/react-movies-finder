import React, { Component } from 'react'

import CarouselSlide from './CarouselSlide'
import CarouselDot from './CarouselDot'

class Carousel extends Component {
  state = {
    popularMovies: null,
    activeIndex: 0,
  }

  componentDidMount() {
    const apiKey = "1ae83ca4d8a91826db50f652ef3e24de"
    const popularMoviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&append_to_response=genre,cast"

    fetch(popularMoviesUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          popularMovies: data.results.slice(0, 5)
        })
      })

    setInterval(this.carouselTimer, 8500)
  }

  componentWillUnmount() {
    clearInterval(this.carouselTimer)
  }

  carouselTimer = () => {
    const { activeIndex, popularMovies } = this.state

    activeIndex >= popularMovies.length - 1 ?
      this.setState({ activeIndex: 0 }) : this.setState({ activeIndex: activeIndex + 1 })
  }

  goToPrevSlide = () => {
    const { activeIndex, popularMovies } = this.state

    if (activeIndex === 0) {
      this.setState({ activeIndex: popularMovies.length - 1 })
      return
    }

    this.setState({ activeIndex: activeIndex - 1 })
  }

  goToNextSlide = () => {
    const { activeIndex, popularMovies } = this.state

    if (activeIndex === popularMovies.length - 1) {
      this.setState({ activeIndex: 0 })
      return
    }
    
    this.setState({ activeIndex: activeIndex + 1 })
  }

  handleDots = activeIndex => {
    this.setState({ activeIndex })
  }

  render() {
    const { popularMovies, activeIndex } = this.state

    return (
      popularMovies && (
        <div className="carousel-slider--container">
          <button
            className="carousel__arrow arrow-left"
            type="button"
            title="previous slide"
            aria-label="previous slide"
            onClick={this.goToPrevSlide}
          >
            <i className="fa fa-2x fa-angle-left" aria-hidden="true"></i>
          </button>
          <ul className="carousel-slides">
            {
              popularMovies.map((slide, index) =>
                <CarouselSlide
                  key={`slide-${index}`}
                  index={index}
                  currentIndex={activeIndex}
                  details={slide}
                />
              )
            }
          </ul>
          <button
            className="carousel__arrow arrow-right"
            type="button"
            title="next slide"
            aria-label="next slide"
            onClick={e => this.goToNextSlide(e)}
          >
            <i className="fa fa-2x fa-angle-right" aria-hidden="true"></i>
          </button>

          <ul className="carousel-slider--dots">
            {
              popularMovies.map((_, index) =>
                <CarouselDot
                  key={`dot-${index}`}
                  index={index}
                  currentIndex={activeIndex}
                  slideLength={popularMovies.length}
                  handleDots={this.handleDots}
                />
              )
            }
          </ul>
        </div>
      )
    )
  }
}

export default Carousel
