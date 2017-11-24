import React from 'react';

class MovieDetailBodyTrailers extends React.Component {

	render() {
		const trailers = this.props.videos;
		return(
			<div className="container">
				<section>
					<div className="movie-trailers__container">
						<h3>Trailers</h3>
						<div className="movie-trailers__carousel">
							<ul>
							{console.log(trailers)}

								{ trailers.forEach(function(item) {
									{console.log(item)}
									<li className="movie-trailers__carousel--item">
										<h2>Name here</h2>
										<img src="" alt={item.name}/>
									</li>
								}) }

							</ul>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default MovieDetailBodyTrailers;