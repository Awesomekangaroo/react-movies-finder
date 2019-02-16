import React from 'react'

class Footer extends React.Component {

	render() {
		return(
			<footer>
				<div className="footer-main">
					<ul className="footer-credits">
						<li>
							<button className="footer-credits__cta--btn">
								<a href="https://www.themoviedb.org/" target="_blank">Visit TMDB.org</a>
							</button>
						</li>
						<li>
							<a href="https://developers.themoviedb.org" target="_blank">About API</a>
						</li>
						<li>
							<a href="">About developer</a>
						</li>
					</ul>
				</div>
			</footer>
		)
	}
}

export default Footer
