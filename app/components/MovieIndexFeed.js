import React from 'react';
import { Link } from 'react-router-dom';

class MovieIndexFeed extends React.Component {
	render() {
		const { details, index } = this.props;
		const baseUrl = "https://image.tmdb.org/t/p/w600";
		return(
			<article>
				<Link to={ {pathname: `/movie/${details.title}`, state: {details, index}} }>
					<div className="index-tile__container">
						<img src={baseUrl + details.backdrop_path} alt={details.title}/>
						<div className="index-tile__overlay">
						<h2 className="index-tile__overlay--title">{details.title}</h2>
							<div className="index-tile__overlay--cast">
								<span></span>
							</div>
						</div>
					</div>
				</Link>
			</article>
		)
	}
}

export default MovieIndexFeed;