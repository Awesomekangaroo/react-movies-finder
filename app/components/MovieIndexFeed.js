import React from 'react';

class MovieIndexFeed extends React.Component {
	render() {
		const { details, index } = this.props;
		const baseUrl = "https://image.tmdb.org/t/p/w300";
		return(
			<article>
				<div className="index-tile__container">
					<img src={baseUrl + details.backdrop_path} alt={details.title}/>
					<div className="index-tile__overlay">
						<section>
							<h2 className="index-tile__overlay--title">
								<a href="">{details.title}</a>
							</h2>
							<div className="index-tile__overlay--cast">
								<span></span>
							</div>
						</section>
					</div>
				</div>
			</article>
		)
	}
}

export default MovieIndexFeed;