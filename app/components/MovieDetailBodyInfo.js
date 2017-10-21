import React from 'react';

class MovieDetailBodyInfo extends React.Component {
	render() {
		return(
			<div className="container">
				<section className="movie-body__information">
					<h3>Plot</h3>
					<p>The summary overview text goes here: Ut porttitor, dui luctus consequat ultricies, dui libero convallis libero, vitae luctus erat tortor sed lectus. Integer placerat mattis eros, in ultricies nibh scelerisque eu.</p>
					<p>
						Mauris id odio malesuada, volutpat arcu sit amet, ullamcorper est. Fusce pulvinar vestibulum quam, eu facilisis risus iaculis in. Vivamus efficitur consequat erat quis convallis. Integer eget efficitur ante, nec vehicula lacus. 
					</p>
				</section>
				<section className="movie-body__information">
					<h3>Awards</h3>
					<div className="movie-award__type">
						<span>1 nomination & 1 Academy</span>
						<span className="movie-award__text">Academy Award for Best Visuals</span>
					</div>
				</section>
			</div>
		)
	}
}

export default MovieDetailBodyInfo;