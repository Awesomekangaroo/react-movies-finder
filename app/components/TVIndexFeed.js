import React from 'react';

class TVIndexFeed extends React.Component {
	render() {
		return(
			<div>
				<h3 className="index-movies--title">TV Shows</h3>
				<article>
					<div className="index-tile__container">
						<div className="index-tile__overlay">
							<section>
								<h2 className="index-tile__overlay--title">
									<a href="">The Nice Guys</a>
								</h2>
								<div className="index-tile__overlay--cast">
									<span>Ryan Gosling</span>
								</div>
							</section>
						</div>
					</div>
				</article>
			</div>
		)
	}
}

export default TVIndexFeed;