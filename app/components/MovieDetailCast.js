import React from 'react';

class MovieDetailCast extends React.Component {

	render() {
		const profileBasePath = "https://image.tmdb.org/t/p/w92";
		return(
			<div className="container">
				<div className="carousel-cast__container">
					<div className="carousel-cast__item">
						<img src={this.props.profile.profile_path} alt=`Image of ${this.props.profile.name}` />
						<div className="carousel-cast__names--info">
							<h3>Mark Hamill</h3>
							<span>Luke Skywalker</span>
						</div>
					</div>
					<div className="carousel-cast__item">
						<img src="" alt=""/>
						<div className="carousel-cast__names--info">
							<h3>Mark Hamill</h3>
							<span>Luke Skywalker</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default MovieDetailCast;