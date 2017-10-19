import React from 'react';

class MovieDetailHead extends React.Component {
	render() {
		return(
			<section>				
				<div className="movie__hero--container">
					<img src="https://image.tmdb.org/t/p/w640/xGWVjewoXnJhvxKW619cMzppJDQ.jpg" alt="Hero image"/>
				</div>
				<div className="movie__head">
					<div className="movie__head--genre">
						<span>Action Adventure</span>
						<hr/>
					</div>
					<header>
						<div className="movie__head--title">
							<h2>Stars Wars: Episode VIII The Last Jedi</h2>
						</div>
					</header>
					<div className="movie__head--meta">
						<div className="movie__head--score">
							<span className="btn-score">94%</span>
							<span className="user-score">User Score</span>
						</div>
						<div className="movie__head--rating">
							<span>Rated: </span><span>PG-13</span>
						</div>
					</div>
					<div className="mobile-head__toggle">
						<button>INFO</button>
						<button>TRAILERS</button>
					</div>
				</div>
			</section>
		)
	}
}

export default MovieDetailHead;