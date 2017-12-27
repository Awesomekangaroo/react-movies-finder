import React from 'react';

class MovieDetailCast extends React.Component {

	constructor() {
		super();
		this.renderCastMembers = this.renderCastMembers.bind(this);
	}

	renderCastMembers(key) {
		const profileBasePath = "https://image.tmdb.org/t/p/w92";
		return(
			<li className="carousel-cast__item">
				<img src={profileBasePath + this.props.profile[key].profile_path} alt={'Image of ' + this.props.profile[key].name} />
				<div className="carousel-cast__names--info">
					<p>{ this.props.profile[key].name }</p>
					<span>{ this.props.profile[key].character }</span>
				</div>
			</li>
		)
	}

	render() {
		return(
			<div className="container">
				<ol className="carousel-cast__container">
					{ Object.keys(this.props.profile).map(this.renderCastMembers) }
				</ol>
			</div>
		)
	}
}

export default MovieDetailCast;