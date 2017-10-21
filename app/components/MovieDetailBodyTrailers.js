import React from 'react';

class MovieDetailBodyTrailers extends React.Component {
	render() {
		return(
			<div className="container">
				<section>
					<div className="movie-trailers__container">
						<h3>Trailers</h3>
						<div className="movie-trailers__carousel">
							<ul>
								<li className="movie-trailers__carousel--item">
									<img src="" alt=""/>
								</li>
								<li className="movie-trailers__carousel--item">
									<img src="" alt=""/>
								</li>
								<li className="movie-trailers__carousel--item">
									<img src="" alt=""/>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default MovieDetailBodyTrailers;