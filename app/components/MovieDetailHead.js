import React from 'react';
import ShareButtons from './ShareButtons';

class MovieDetailHead extends React.Component {
	constructor() {
		super();
		this.state = {
			addActive: false
		}
	}

	render() {
		const details = this.props.info;
		const imageBaseUrl = "https://image.tmdb.org/t/p/";
		const bgImage = { backgroundImage: `url(${imageBaseUrl}w1280${details.backdrop_path})` }

		return(
			<section className="container">
				<div className="movie__hero--container" style={ bgImage }>
					<img className="show-mobile" src={`${imageBaseUrl}w1280${details.backdrop_path}`} alt={ `Backdrop image of ${details.title}` }/>
					<div className="movie__head">
						<div className="movie__head--poster">
							<picture>
								<source srcSet={`${imageBaseUrl}w640${details.poster_path}`} media="(min-width: 767px)"/>
								<img src={`${imageBaseUrl}w154${details.poster_path}`} alt={ details.title }/>
							</picture>
						</div>
						<header className="movie__head-top">
							<div className="movie__head--genre">
								<span>{details.genres[0].name}</span> |
								<span>{details.runtime} mins</span>
							</div>
							<div className="movie__head--title">
								<h2>{details.title}</h2>
								<p>{details.tagline}</p>
							</div>
							<div className="movie__head-share hide-mobile">
								<ShareButtons name={details.title} icons={['twitter', 'facebook']} />
							</div>
						</header>
						<div className="movie__head--meta">
							<div className="movie__head--score">
								<div className="btn-score"><span>{details.vote_average}</span></div>
								<span className="user-score">User Score</span>
							</div>
							<div className="movie__head--rating">
								<span>Rated: </span><span>PG</span>
							</div>
							<div className="hide-mobile movie__head-overview">
								<p>{details.overview}</p>
							</div>
						</div>
						<div className="mobile-head__toggle show-mobile">
							<a className="active">INFO</a>
							<a target="_blank" href={"https://www.google.com/search?q=" + details.title + "+showtimes"}>TICKETS</a>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default MovieDetailHead;