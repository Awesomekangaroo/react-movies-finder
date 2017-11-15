import React from 'react';
import { Link } from 'react-router-dom';

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
							<Link className="index-tile__overlay--title" to={ {pathname: `/movie/${details.title}`, state: {details, index}} }>{details.title}</Link>
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